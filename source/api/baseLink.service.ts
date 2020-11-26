/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V1.1.0
 * Contact: avishaybennatan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';

import { FilteringInformationHolder } from '../model/filteringInformationHolder';
import { NewUserUserClass } from '../model/newUserUserClass';
import { RunningUser } from '../model/runningUser';
import { UserClass } from '../model/userClass';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { FlexiCoreDecycle } from './api';
import { UserProfileRequest } from '../model/userProfileRequest';
import { UserProfile } from '../model/userProfile';
import { UserCreate, UserUpdate, UserFiltering, PaginationResponse, ImpersonateRequest, ImpersonateResponse, Baselink, Baseclass } from '../model/models';
import { BaselinkFilter } from '../model/baselinkFilter';
import { GetConnected } from '../model/getConnected';
import { GetDisconnected } from '../model/getDisconnected';
import { BaselinkUpdate } from '../model/baselinkUpdate';
import {  BaselinkMassCreate } from '../model/baselinkMassCreate';
import { BaselinkCreate } from '../model/baselinkCreate';


@Injectable()
export class BaseLinkService {

    protected basePath = 'https://192.168.14.71:8180/FlexiCore/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    public getAllBaselinks(authenticationkey?: string, body?: BaselinkFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Baselink>>;
    public getAllBaselinks(authenticationkey?: string, body?: BaselinkFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Baselink>>>;
    public getAllBaselinks(authenticationkey?: string, body?: BaselinkFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Baselink>>>;
    public getAllBaselinks(authenticationkey?: string, body?: BaselinkFilter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
       
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<Baselink>>(`${this.basePath}/baselinks/getAllBaselinks`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }


    public getDisconnected(authenticationkey?: string, body?: GetDisconnected, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Baseclass>>;
    public getDisconnected(authenticationkey?: string, body?: GetDisconnected, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Baseclass>>>;
    public getDisconnected(authenticationkey?: string, body?: GetDisconnected, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Baseclass>>>;
    public getDisconnected(authenticationkey?: string, body?: GetDisconnected, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
       
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<Baseclass>>(`${this.basePath}/baseclass/getDisconnected`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }


    public getConnected(authenticationkey?: string, body?: GetConnected, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Baseclass>>;
    public getConnected(authenticationkey?: string, body?: GetConnected, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Baseclass>>>;
    public getConnected(authenticationkey?: string, body?: GetConnected, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Baseclass>>>;
    public getConnected(authenticationkey?: string, body?: GetConnected, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
       
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<Baseclass>>(`${this.basePath}/baseclass/getConnected`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }

    public massCreateBaselink(authenticationkey?: string, body?: BaselinkMassCreate, observe?: 'body', reportProgress?: boolean): Observable<Array<Baselink>>;
    public massCreateBaselink(authenticationkey?: string, body?: BaselinkMassCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Baselink>>>;
    public massCreateBaselink(authenticationkey?: string, body?: BaselinkMassCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Baselink>>>;
    public massCreateBaselink(authenticationkey?: string, body?: BaselinkMassCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
       
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<Baselink>>(`${this.basePath}/baselinks/massCreateBaselink`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }


    public createBaselink(authenticationkey?: string, body?: BaselinkCreate, observe?: 'body', reportProgress?: boolean): Observable<Baselink>;
    public createBaselink(authenticationkey?: string, body?: BaselinkCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Baselink>>;
    public createBaselink(authenticationkey?: string, body?: BaselinkCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Baselink>>;
    public createBaselink(authenticationkey?: string, body?: BaselinkCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
       
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Baselink>(`${this.basePath}/baselinks/createBaselink`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }


    public updateBaselink(authenticationkey?: string, body?: BaselinkUpdate, observe?: 'body', reportProgress?: boolean): Observable<Baselink>;
    public updateBaselink(authenticationkey?: string, body?: BaselinkUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Baselink>>;
    public updateBaselink(authenticationkey?: string, body?: BaselinkUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Baselink>>;
    public updateBaselink(authenticationkey?: string, body?: BaselinkUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
       
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Baselink>(`${this.basePath}/baselinks/updateBaselink`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }




    

}
