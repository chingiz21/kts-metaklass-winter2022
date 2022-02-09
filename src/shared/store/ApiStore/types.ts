export enum HTTPMethod {
    Get = 'GET',
    Post = 'POST'
}

// Параметры запроса
export type RequestParams<ReqT> = {
    method: HTTPMethod; 
    endpoint: string; 
    headers: Record<string, string>; 

    data: ReqT;
}

// Перечисление статусов ответа
export enum StatusHTTP {
    ok = 200,
    badRequest = 400,
    unAuthorized = 401,
    forbidden = 403,
    notFound = 404
}

// Ответ API
export type ApiResponse<SuccessT, ErrorT> =
    | {
    success: true;
    data: SuccessT;
    status: StatusHTTP;
}
    | {
    success: false;
    data: ErrorT;
    status: StatusHTTP;
};

export interface IApiStore {
    readonly baseUrl: string;

    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>>
}