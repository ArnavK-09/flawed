# Flawed - Javascript/Typescript Html Framework
<div>
  <p align="center">
    <a href="https://github.com/ArnavK-09/flawed" target="_blank" rel="nofollow">
      <img src="https://raw.githubusercontent.com/ArnavK-09/flawed/main/FlawedLogo.png" width="300" />
    </a>
  </p>
  <div align="center" class="badge-container">
    <a href="https://www.npmjs.com/package/@arnavk-09/flawed"
      ><img
        src="https://img.shields.io/npm/v/@arnavk-09/flawed.svg?maxAge=3600"
        alt="NPM version"
    /></a>
    <a href="https://www.npmjs.com/package/@arnavk-09/flawed"
      ><img
        src="https://img.shields.io/npm/dt/@arnavk-09/flawed.svg?maxAge=3600"
        alt="NPM downloads"
    /></a>
  </div>
  <p align="center">
    <b> Timepass Useless JS/TS & Html Framework </b>
  </p>
</div>

# 💾 Installation

> Version 16.6.0 or newer of [Node.js](https://nodejs.org/) is required

```
npm install @arnavk-09/flawed
```

> [Package On NPM](https://www.npmjs.com/package/@arnavk-09/flawed)

# 🔑 Features

- Support Dynamic Components
- Full Access To Routes
- Simple AF (Fast)
- Automatically Beatuifies Code
- Handler All Things Yourself
- Logs Everything
- Classes Based
- Compatible With ECM & CJS
- Out Of The Box Head Component
- Supports Static Files
- Automatic Favicon Picking

# Simple Examples

### Javascript
```js
// Imports 
const { FlawedClient, FlawedScreen, FlawedComponent, UseComponent } = require('@arnavk-09/flawed');

// Init Flawed App 
const app = new FlawedClient({
    port: 3000
});

// Nav Bar Component 
class Navbar extends FlawedComponent {
    // Giving Name To Component
    constructor() {
        super({
            name: 'Navbar';
        });
    };

    // Component Content 
    view() {
        return (
          `
            <a href='/'> Navbar </a>
            <br>
          `
        );
    };
};

// Creating Main Screen 
class MainScreen extends FlawedScreen {
    // Giving ID To Screen
    constructor() {
        super({
            route: 'main'; // use 'main' for index route
        });
    };

    // Screen Content  
    render() {
        return {
            page: `
                ${UseComponent('Navbar', app)}
                Hellow Flawed!
            `;
        };
    };
};

// Adding Screens To App 
app.setScreens([new MainScreen()]);

// Register Components 
app.registerComponents([new Navbar()]);

// Setup 404 Page 
app.set404Content(`404 Page!`);

// Starting Flawed App 
app.start();
```

### Typescript
```ts
// Imports 
import { FlawedClient, FlawedScreen, FlawedComponent, UseComponent } from ('@arnavk-09/flawed');

// Init Flawed App 
const app = new FlawedClient({
    port: 3000
});

// Nav Bar Component 
class Navbar extends FlawedComponent {
    // Giving Name To Component
    constructor() {
        super({
            name: 'Navbar';
        });
    };

    // Component Content 
    view() {
        return (
          `
            <a href='/'> Navbar </a>
            <br>
          `
        );
    };
};

// Creating Main Screen 
class MainScreen extends FlawedScreen {
    // Giving ID To Screen
    constructor() {
        super({
            route: 'main' // use 'main' for index route
        });
    };

    // Screen Content  
    render() {
        return {
            page: `
                ${UseComponent('Navbar', app)}
                Hellow Flawed!
            `
        };
    };
};

// Adding Screens To App 
app.setScreens([new MainScreen()]);

// Register Components 
app.registerComponents([new Navbar()]);

// Setup 404 Page 
app.set404Content(`404 Page!`);

// Starting Flawed App 
app.start();
```

#### Checkout More Flawed Templates [Here...](https://github.com/ArnavK-09)


# 🚔 Need help?

- [Chat With Me On Discord](https://discord.gg/V3WBURuh4N)
- [Check Documentation - TODO](https://github.com/ArnavK-09/flawed)

# 🎒 Packages

Here are some packages from Flawed

| Package                                                                        | Description                                                  |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| [`@arnavk-09/create-flawed`](https://www.npmjs.com/package/@arnavk-09/flawed)                    | TODO                        |
| [`@arnavk-09/flawed`](https://www.npmjs.com/package/@arnavk-09/flawed)                           | Useless JS/TS & Html Framework         |

# 💪 Classes

There is a system that allows you to create your site with Flawed

- [`FlawedClient`](https://github.com/ArnavK-09/flawed/blob/main/src/FlawedClient.ts)
- [`FlawedComponent`](https://github.com/ArnavK-09/flawed/blob/main/src/classes/FlawedComponent.ts)
- [`FlawedScreen`](https://github.com/ArnavK-09/flawed/blob/main/src/classes/FlawedScreen.ts)
- [`FlawedHead`](https://github.com/ArnavK-09/flawed/blob/main/src/classes/FlawedHead.ts)

# 📚 Documentation

> _TODO_

# 💝 Thank you

You can support **[@arnavk-09/flawed](https://www.npmjs.com/package/@arnavk-09/flawed)** by giving it a **[GitHub](https://github.com/ArnavK-09/flawed)** star.