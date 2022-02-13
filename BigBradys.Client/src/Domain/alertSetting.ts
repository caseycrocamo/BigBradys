import { alertType } from "./enum"
export default class alertSetting{
    constructor(type:alertType, backgroundColor:string) {
        this.backgroundColor = backgroundColor;
        this.type = type;
    }
    type:alertType;
    backgroundColor:string;
}