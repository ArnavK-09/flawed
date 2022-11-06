// Imports 
import type { FlawedScreenOptions } from '../types';

// FlawedScreen 
export class FlawedScreen {
    // config variables 
    public screen_route;

    // Screen Options 
    constructor(options: FlawedScreenOptions) {
        this.screen_route = options.route;
    };

    // Id Getter 
    get route() {
        return this.screen_route;
    };

    // Render Functions, Returns Page Content 
    render() {
        return {
            page: `
                <h1>You Successfully Create Flawed Site!</h1>
                <p>Checkout Out <a href="https://github.com/ArnavK-09/flawed" target="_blank"> Docs</a></p>
            `
        };
    };
};