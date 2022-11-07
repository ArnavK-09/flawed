// Imports 
import type { FlawedComponentOptions } from "../types";

// FlawedComponent 
export class FlawedComponent {
    // component name 
    public component_name: string;

    // init component 
    constructor(options?: FlawedComponentOptions) {
        this.component_name = options?.name || 'Flawed Component';
    }

    // if no view value specified 
    view(props?: any) {
        return `
        Component
        `
    }
}