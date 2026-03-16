export default class apiResponse {
    constructor(successful:boolean, data:any) {
        this.successful = successful;
        this.data = data;
    }
    successful:boolean;
    data:any;
}