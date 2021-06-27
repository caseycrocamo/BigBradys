import {FunctionComponent} from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

class navigationItem{
    constructor(name: string, route: string, component: FunctionComponent) {
        this.name = name;   
        this.route = route;
        this.component = component;
    }
    name: string;
    route: string;
    component: FunctionComponent;
}
export const navigationItems: navigationItem[] = [
    new navigationItem("Home", "/", Home),
    new navigationItem("Our Food", "/about", About),
    new navigationItem("Contact Us", "/contact", Contact),
]