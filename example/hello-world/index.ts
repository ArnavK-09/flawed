// imports 
import { FlawedClient } from '../../src/index';

// new app 
const app = new FlawedClient({
    port: 4444
})

// tests 
app.start()