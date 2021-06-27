export default class Ingredient {
    constructor(id:number, name: string, description:string, iconPath:string, clamped:boolean = true) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.iconPath = iconPath;
        this.clamped = clamped;
    }
    id:number;
    name: string;
    description: string;
    iconPath:string;
    clamped:boolean;
}