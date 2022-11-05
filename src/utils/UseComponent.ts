// imports 
import { FlawedClient } from "../FlawedClient";
import { FlawedComponent } from "../classes/FlawedComponent";

// UseComponent 
export function UseComponent(name: string, app: FlawedClient) {
    // all components list 
    let componentsList: FlawedComponent[] = app.components;
    // find component with name 
    let componentFound = componentsList.filter((compo: FlawedComponent) => compo.component_name.toLowerCase() == name.toLowerCase());

    // checking if valid component 
    if (componentFound.length == 1) {
        // component found 
        return componentFound[0].view()
    } else {
        // if no component found 
        return new FlawedComponent().view()
    }
};