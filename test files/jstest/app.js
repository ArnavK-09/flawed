// imports 
const { FlawedClient, FlawedScreen }  = require('../../packages/flawed/lib/cjs/index.js');

 
// screen 
class MainScreen extends FlawedScreen {
    constructor() {
        super({
            id: 'main'
        })
    }

    render() {
        return {
            page: `
               <h1> Hiii </h1>            
            `,
            title: 'Index'
        }
    }
}

// new app 
const app = new FlawedClient({
    port: 3030
})


// set

app.setScreens([new MainScreen()])

// start 
app.start()

// exporting 
module.exports = app;