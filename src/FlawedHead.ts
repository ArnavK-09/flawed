type headOptions = {
    head: string,
    favicon? : string
}

export class FlawedHead {
    public head: string;
    public faviconUrl: string;
    constructor(options: headOptions) {
        this.head = options.head;
        this.faviconUrl = options.favicon || '/favicon.png';
    }
    get rawhead() {
        return `<head>  
            ${this.head} 
            <link rel="icon" type="image/x-icon" href="${this.faviconUrl}">
        </head>`.trim();
    }
}