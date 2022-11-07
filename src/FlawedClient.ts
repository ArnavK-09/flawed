// Imports 
import express from 'express';
import { FlawedHead, FlawedScreen, FlawedComponent } from './classes';
import { FlawedClientOptions } from './types';
import { GetPageContent, FormatHtml } from './utils';
import gradient  from 'gradient-string';

// Client 
export class FlawedClient {
    // Variables 
    private server: any;
    private server_port: number;
    private screens: FlawedScreen[] = [];
    public Screen404: string = '404 - Flawed';
    public components: FlawedComponent[] = [];
    public sitehead: FlawedHead = new FlawedHead({
        head: `<title>Flawed App</title>`
    });

    // Init Server 
    constructor(options: FlawedClientOptions) {
        // Starting sserver 
        this.server = express();
        this.server.use(express.static('static'));
        this.server_port = options.port;

        // Log 
        console.log(gradient('#0d0d0d', '#333131')(`\n[Flawed] [${new Date().toString()}] `) + gradient('#02d625', '#4cc932')('App Initialize...Wating For Start...'))
    };

    // Handling Server 
    handleServer() {
        this.server.get('/*', (req: any, res: any) => {
            // getting route 
            let route = req.params[0].trim().toLowerCase();

            // Log 
            console.log(gradient('#0d0d0d', '#333131')(`[Flawed] [${new Date().toString()}] `) + gradient('#f43b47', '#453a94')(`Requested Route :- /${route}`))

            // validting route 
            if (route == '') {
                // finding index page 
                const indexPage: FlawedScreen[] = this.screens.filter((screen) => screen.route.toLowerCase() == 'main'); 

                // validating if index exists 
                if (indexPage.length == 1) {
                    // @ts-ignore rendering index 
                    res.send(`${GetPageContent(indexPage[0], this.sitehead)}`);
                } else {
                    // index not there
                    res.send(`${GetPageContent(this.screens[0] == undefined ? new FlawedScreen({ route: 'index_not_there'}) : this.screens[0], this.sitehead)}`);
                };
            } else {
                // getting any other page 
                let routePages: FlawedScreen[] = this.screens.filter((screen) => screen.route == route);

                // validating if page exists 
                if (routePages.length >= 1) {
                    // @ts-ignore rendering page 
                    res.send(`${GetPageContent(routePages[0], this.sitehead)}`);
                } else {
                    // 404
                    res.send(`${this.Screen404}`);
                };
            };
        });
    };

    // Start Server 
    start() {
        // starting server + log 
        try {
            this.server.listen(this.server_port)
            this.handleServer();
            console.log(gradient('#0d0d0d', '#333131')(`[Flawed] [${new Date().toString()}] `) + gradient('#ff5f6d', '#ffc371')('Server Started On Port ' + this.server_port + '\n'))
        } catch(e) {
            // if err 
            console.log(gradient('#0d0d0d', '#333131')(`[Flawed] [${new Date().toString()}] `) + gradient('#f5111d', '#ab050d')(e))
        }
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