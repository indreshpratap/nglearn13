import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

export interface ApiResponse {
    status:boolean;
    data:any;
    message:string;
}
@Injectable()
export class ApiClient {

    constructor(private httpClient: HttpClient) {

    }

    get(path:string) {
        return this.httpClient.get<ApiResponse>(this.getUrl(path));
    }
    post(path:string,payload) {
        return this.httpClient.post<ApiResponse>(this.getUrl(path), payload);
    }
    
    put(path:string,payload) {
        return this.httpClient.put<ApiResponse>(this.getUrl(path), payload);
    }

    private getUrl(path:string) {
        return environment.apiPath + path;
    }
}