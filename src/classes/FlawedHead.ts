// Imports 
import type { FlawedHeadOptions } from "../types";

// Flawed Head 
export class FlawedHead {
    // Variables 
    public head: string;
    public faviconUrl: string;

    // Options 
    constructor(options: FlawedHeadOptions) {
        this.head = options.head;
        this.faviconUrl = options.favicon || '/favicon.png';
    };

    // Getter for head content 
    get rawhead() {
        return `<head>  
            ${this.head} 
            <link rel="icon" type="image/x-icon" href="${this.faviconUrl}">
        </head>`.trim();
    }
}