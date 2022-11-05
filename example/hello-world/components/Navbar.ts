// imports 
import { FlawedComponent } from '../../../src/index';

// screen 
export default class Navbar extends FlawedComponent {
    constructor() {
        super({
            name: 'Navbar'
        })
    }

    view() {
        return `
        <a href="/">Home</h1></a>
        <a href="/rrrgrrgr436364">404</h1></a>
        <a href="/about">About</h1></a>
        `
    }
}