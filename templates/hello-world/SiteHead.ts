// imports 
import { FlawedHead } from '../../packages/flawed/dist/index.mjs';

// screen 
export default class SiteHead extends FlawedHead {
    constructor() {
        super({
            head: `<title>Hi</title>`
        })
    }
}