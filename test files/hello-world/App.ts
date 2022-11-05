// @ts-ignore imports 
import { FlawedClient, UseComponent }  from '../../packages/flawed/src/index';
import SiteHead from './SiteHead';

// new app 
const app = new FlawedClient({
    port: 1233
})

// views 
import MainView from './screens/main';
import AboutView from './screens/about';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';


// set
app.setHead(new SiteHead())
app.setScreens([new MainView(), new AboutView()])
app.registerComponents([new Navbar(), new Page404()])
app.set404Content(UseComponent('Page404', app))

// start 
app.start()

// exporting 
export default app;