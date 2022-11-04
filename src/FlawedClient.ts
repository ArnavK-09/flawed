// Imports 
import http from 'http';
import express from 'express';
import ClientOptions from './types/ClientOptions';

// Client 
export class FlawedClient {
    private server: any;
    public server_port: number;

    constructor(options: ClientOptions) {
        this.server = express();
        this.server_port = options.port;
        console.log('Initial')
    }

    handleServer() {
        this.server.get('/*', (req: any, res: any) => {
            res.send('Flawed');
        });
    }

    start() {
        console.log('Listnening...')
        this.server.listen(this.server_port)
        this.handleServer()
    }
}