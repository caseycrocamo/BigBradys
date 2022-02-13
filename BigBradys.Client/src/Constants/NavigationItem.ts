export default class navigationItem{
    constructor(name: string, route: string, jsx:any) {
        this.name = name;   
        this.route = route;
        this.jsx = jsx;
    }
    name: string;
    route: string;
    jsx:any;
}
