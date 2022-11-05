// Imports 
import type { FlawedScreenOptions } from '../types';

// FlawedScreen 
export class FlawedScreen {
    // config variables 
    public screen_id;

    // Screen Options 
    constructor(options: FlawedScreenOptions) {
        this.screen_id = options.id;
    };

    // Id Getter 
    get id() {
        return this.screen_id;
    };

    // Render Functions, Returns Page Content 
    render() {
        return {
            page: `
                Flawed
            
            `,
            title: 'Flawed Site'
        };
    };
};