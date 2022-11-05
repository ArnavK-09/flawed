// imports 
import { FlawedComponent } from '../../../packages/flawed/dist/index';

// screen 
export default class Page404 extends FlawedComponent {
    constructor() {
        super({
            name: 'Page404'
        })
    }

    view() {
        return `
        <h1>Page Not Found!</h1>
        <a href="/">Back Home</h1></a>
        `
    }
}