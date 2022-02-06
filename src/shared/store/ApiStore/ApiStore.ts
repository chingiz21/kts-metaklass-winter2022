import { ApiResponse, IApiStore, RequestParams } from './types';
import qs from 'qs';

export default class ApiStore implements IApiStore {
    readonly baseUrl: string = 'https://api.github.com/';
    
    constructor(baseUrl: string) {
        baseUrl = this.baseUrl;
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {

        let url = `${this.baseUrl}${params.endpoint}${qs.stringify(params.data)}`;
        let body = {};

        const response = await fetch(url, {
            method: params.method,
            headers: params.headers,
        })

        if (!response.ok) {
            const ApiReply: ApiResponse<SuccessT, ErrorT> = {
                success: false,
                data: await <ErrorT><unknown>response.json(),
                status: response.status
            }
            return ApiReply;
        }
        
        const ApiReply: ApiResponse<SuccessT, ErrorT> = {
            success: true,
            data: await <SuccessT><unknown>response.json(),
            status: response.status
        }
        return ApiReply;
    }
}