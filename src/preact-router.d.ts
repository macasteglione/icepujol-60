declare module 'preact-router' {
    import { ComponentChildren, FunctionalComponent } from 'preact';

    export interface RouterProps {
        children?: ComponentChildren;
        onChange?: (event: RouterOnChangeArgs) => void;
    }

    export interface RouterOnChangeArgs {
        router: Router;
        url: string;
        previous?: string;
        active: any[];
        current: any;
    }

    export interface Router {
        route(url: string, replace?: boolean): void;
    }

    export function route(url: string, replace?: boolean): void;

    const Router: FunctionalComponent<RouterProps>;
    export default Router;
}
