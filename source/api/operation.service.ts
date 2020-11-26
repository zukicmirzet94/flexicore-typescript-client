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

import { PaginationResponse } from '../model/paginationResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { FlexiCoreDecycle } from './api';

import { OperationFiltering } from '../model/operationFiltering';
import { Operation } from '../model/models';


@Injectable()
export class OperationService {

    protected basePath = 'https://169.254.121.191:8080/FlexiCore/rest';
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



    /**
     * getAllTreeNodes
     * lists all children nodes
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllOperations(authenticationKey?: string, body?: OperationFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Operation>>;
    public getAllOperations(authenticationKey?: string, body?: OperationFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Operation>>>;
    public getAllOperations(authenticationKey?: string, body?: OperationFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Operation>>>;
    public getAllOperations(authenticationKey?: string, body?: OperationFiltering, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
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
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

       return this.httpClient.post<PaginationResponse<Operation>>(`${this.basePath}/operations/getAllOperations`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }

    /**
     * getAllTreeNodes
     * lists all children nodes
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setOperationAuditable(authenticationKey?: string, id?: string,auditable?:boolean, observe?: 'body', reportProgress?: boolean): Observable<Operation>;
    public setOperationAuditable(authenticationKey?: string, id?: string,auditable?:boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Operation>>;
    public setOperationAuditable(authenticationKey?: string, id?: string,auditable?:boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Operation>>;
    public setOperationAuditable(authenticationKey?: string, id?: string,auditable?:boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        if (auditable !== undefined && auditable !== null) {
            headers = headers.set('auditable', String(auditable));
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
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Operation>(`${this.basePath}/operations/setOperationAuditable/${id}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }
}
