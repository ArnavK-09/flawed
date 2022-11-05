// Imports 
import { FlawedHead } from './FlawedHead';
import express from 'express';
import ClientOptions from './types/ClientOptions';
import GetPageContent from './GetPageContent';

// Client 
export class FlawedClient {
    private server: any;
    private server_port: number;
    private screens: any[] = [];
    public Screen404: string = '404 - Flawed';
    public components: any[] = [];
    // @ts-ignore 
    public sitehead: FlawedHead;

    constructor(options: ClientOptions) {
        this.server = express();
        this.server.use(express.static('static'));
        this.server_port = options.port;
        console.log("init");
    }

    handleServer() {
        this.server.get('/*', (req: any, res: any) => {
            // route 
            let route = req.params[0].trim().toLowerCase();
            // index or other route 
            if(route == '') {
                // main index page 
                res.send(`${GetPageContent(this.screens[0], this.sitehead)}`,);
            } else {
                // other page 
                let routePage = this.screens.filter((screen) => screen.id == route)

                if(routePage.length == 1) {
                    res.send(`${GetPageContent(routePage[0], this.sitehead)}`,);
                } else {
                    // 404
                    res.send(`${this.Screen404}`);
                }

            }
        });
    }

    start() {
        this.server.listen(this.server_port)
        this.handleServer()
        console.log("Server Started")
    }

    setScreens(screens: any) {
        screens.forEach((screen: any) => {
            this.screens.push(screen);
        });
    }

    setHead(customHead: FlawedHead) {
        this.sitehead = customHead;
    }

    set404Content(new404: string){
        this.Screen404 = new404;
    }

    registerComponents(componentsList: Array<any>) {
        componentsList.forEach((component: any) => {
            this.components.push(component);
        });
    }

}