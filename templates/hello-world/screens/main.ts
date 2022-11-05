// imports 
import { FlawedScreen, UseComponent } from '../../../packages/flawed/src/index';
import App from '../App';

// screen 
export default class MainScreen extends FlawedScreen {
    constructor() {
        super({
            id: 'main'
        })
    }

    render() {
        return {
            page: `
                ${UseComponent('Navbar', App)}
               <h1> Hii </h1>            
            `,
            title: 'Index'
        }
    }
}