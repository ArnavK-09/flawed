// imports 
import { FlawedClient } from "./FlawedClient";
import { FlawedComponent } from "./FlawedComponent";

// function 
export function UseComponent(name: string, app: FlawedClient) {
    // components list 
    let componentsList: FlawedComponent[] = app.components;

    // find component 
    let componentFound = componentsList.filter((compo: FlawedComponent) => compo.component_name.toLowerCase() == name.toLowerCase());

    if(componentFound.length == 1) {
        // component found 
        return componentFound[0].view()
    } else {
        // if no component found 
        return new FlawedComponent().view()
    }
}