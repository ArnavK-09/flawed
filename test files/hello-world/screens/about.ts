// imports 
import { FlawedScreen } from '../../../packages/flawed/src/index';

// screen 
export default class AboutScreen extends FlawedScreen {
    constructor() {
        super({
            id: 'about'
        })
    }

    render() {
        return {
            page: `
               <h1> About Us </h1>
               <a href="/">Home</h1>
            `,
            title: 'About Us'
        }
    }
}