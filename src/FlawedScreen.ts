// FlawedScreen 
export class FlawedScreen {
    // config variables 
    public screen_id;
    constructor(options: any) {
        this.screen_id = options.id
    }

    get id() {
        return this.screen_id;
    }

    render() {
        return {
            page: `
                Flawed
            
            `,
            title: 'Flawed Site'
        }
    }
}