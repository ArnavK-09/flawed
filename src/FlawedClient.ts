// Imports 
import http from 'http';
import ClientOptions from './types/ClientOptions';

// Client 
export class FlawedClient {
    private server: any;
    public server_port: number;

    constructor(options: ClientOptions) {
        this.server = http.createServer(this.handleServer);
        this.server_port = options.port;
        console.log('Initial')
    }
    handleServer(req: any, res: any) {
        console.log(req.url)
        res.end('Hello Flawed')
    }

    start() {
        console.log('Listnening...')
        this.server.listen(this.server_port)
    }
}