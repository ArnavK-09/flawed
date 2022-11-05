// imports 
import { FlawedComponent } from '../../../flawed/src/index';

// screen 
export default class Navbar extends FlawedComponent {
    constructor() {
        super({
            name: 'Navbar'
        })
    }

    view() {
        return (`
        <header>
        <nav>
        <a href="/">Home</h1></a>
        <a href="/404">404</h1></a>
        <a href="/about">About</h1></a>
        </nav>
        </header>
        `);
    }
}