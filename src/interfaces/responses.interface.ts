import { StatusCode } from "../enums"

export interface IOperationResponse {
    statusCode: StatusCode,
    message: string,
    data?: any;
}