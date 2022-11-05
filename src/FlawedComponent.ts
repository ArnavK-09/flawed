type FlawedComponentOptions = {
    name?: string
}

export class FlawedComponent {
    public component_name: string;
    constructor(options?: FlawedComponentOptions) {
        this.component_name = options?.name || 'Flawed Component Not Found';
    }

    view() {
        return `
        Component
        `
    }
}