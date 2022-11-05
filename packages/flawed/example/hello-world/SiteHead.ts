// imports 
import { FlawedHead } from '../../packages/flawed/src/index';

// screen 
export default class SiteHead extends FlawedHead {
    constructor() {
        super({
            head: `<title>Hi</title>`
        })
    }
}