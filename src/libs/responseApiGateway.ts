import { HttpStatus } from "src/common/http-status";

export class Response {

    public body: any = null;
    public statusCode: HttpStatus = HttpStatus.OK;

    constructor(body: any, statusCode: HttpStatus) {
        this.body = JSON.stringify(body);
        this.statusCode = statusCode;
    }
}