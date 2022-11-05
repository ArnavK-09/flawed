// Imports 
import express from 'express';
import { FlawedHead, FlawedScreen, FlawedComponent } from './classes';
import { FlawedClientOptions } from './types';
import { GetPageContent, FormatHtml} from './utils';

// Client 
export class FlawedClient {
    // Variables 
    private server: any;
    private server_port: number;
    private screens: FlawedScreen[] = [];
    public Screen404: string = '404 - Flawed';
    public components: FlawedComponent[] = [];
    // @ts-ignore 
    public sitehead: FlawedHead;

    // Init Server 
    constructor(options: FlawedClientOptions) {
        this.server = express();
        this.server.use(express.static('static'));
        this.server_port = options.port;
        console.log("init");
    };

    // Handling Server 
    handleServer() {
        this.server.get('/*', (req: any, res: any) => {
            // getting route 
            let route = req.params[0].trim().toLowerCase();

            // validting route 
            if (route == '') {
                // index page 
                res.send(`${GetPageContent(this.screens[0], this.sitehead)}`);
            } else {
                // getting any other page 
                let routePage = this.screens.filter((screen) => screen.id == route);

                // validating if page exists 
                if (routePage.length == 1) {
                    // rendering page 
                    res.send(`${GetPageContent(routePage[0], this.sitehead)}`);
                } else {
                    // 404
                    res.send(`${FormatHtml(this.Screen404)}`);
                };
            };
        });
    };

    // Start Server 
    start() {
        this.server.listen(this.server_port);
        this.handleServer();
        console.log("Server Started");
    };

    // Set Screens 
    setScreens(screens: FlawedScreen[]) {
        // Pushing all screens to array
        screens.forEach((screen: any) => {
            this.screens.push(screen);
        });
    };

    // Set Head Content 
    setHead(customHead: FlawedHead) {
        this.sitehead = customHead;
    };

    // Custom 404 Page 
    set404Content(new404: string) {
        this.Screen404 = new404;
    };

    // Registering All Compoents To App 
    registerComponents(componentsList: Array<FlawedComponent>) {
        componentsList.forEach((component: any) => {
            this.components.push(component);
        });
    };
};