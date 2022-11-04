// imports 
import { FlawedClient } from '../../src/index';

// new app 
const app = new FlawedClient({
    port: 5353
})

// tests 
app.start()