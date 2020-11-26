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
import { ResetUserPasswordRequest } from '../model/resetUserPasswordRequest';
import { RunningUser } from '../model/runningUser';
import { UserClass } from '../model/userClass';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { FlexiCoreDecycle } from './api';
import { UserProfileRequest } from '../model/userProfileRequest';
import { UserProfile } from '../model/userProfile';
import { UserCreate, UserUpdate, UserFiltering, PaginationResponse, ImpersonateRequest, ImpersonateResponse, ResetPasswordFinishResponse } from '../model/models';


@Injectable()
export class UsersService {

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


    /**
     * 
     * 
     * @param roleId 
     * @param userId 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addUserToRole(roleId: string, userId: string, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public addUserToRole(roleId: string, userId: string, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public addUserToRole(roleId: string, userId: string, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public addUserToRole(roleId: string, userId: string, authenticationkey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling addUserToRole.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addUserToRole.');
        }

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
        ];

        return this.httpClient.put<boolean>(`${this.basePath}/users/addToRole/${encodeURIComponent(String(roleId))}/${encodeURIComponent(String(userId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public attachTenant(authenticationkey?: string, body?: string, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public attachTenant(authenticationkey?: string, body?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public attachTenant(authenticationkey?: string, body?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public attachTenant(authenticationkey?: string, body?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<boolean>(`${this.basePath}/users/attachTennat`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public connectToTenant(authenticationkey?: string, body?: string, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public connectToTenant(authenticationkey?: string, body?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public connectToTenant(authenticationkey?: string, body?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public connectToTenant(authenticationkey?: string, body?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<boolean>(`${this.basePath}/users/connectToTenant`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param loginuponsuccess 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUser(authenticationkey?: string, loginuponsuccess?: boolean, body?: NewUserUserClass, observe?: 'body', reportProgress?: boolean): Observable<RunningUser>;
    public createUser(authenticationkey?: string, loginuponsuccess?: boolean, body?: NewUserUserClass, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RunningUser>>;
    public createUser(authenticationkey?: string, loginuponsuccess?: boolean, body?: NewUserUserClass, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RunningUser>>;
    public createUser(authenticationkey?: string, loginuponsuccess?: boolean, body?: NewUserUserClass, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        if (loginuponsuccess !== undefined && loginuponsuccess !== null) {
            headers = headers.set('loginuponsuccess', String(loginuponsuccess));
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

        return this.httpClient.post<RunningUser>(`${this.basePath}/users/new`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param loginuponsuccess 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserProfile(authenticationkey?: string, body?: UserProfileRequest, observe?: 'body', reportProgress?: boolean): Observable<UserProfile>;
    public getUserProfile(authenticationkey?: string, body?: UserProfileRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserProfile>>;
    public getUserProfile(authenticationkey?: string, body?: UserProfileRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserProfile>>;
    public getUserProfile(authenticationkey?: string, body?: UserProfileRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<UserProfile>(`${this.basePath}/users/getUserProfile`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param loginuponsuccess 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public impersonate(authenticationkey?: string, body?: ImpersonateRequest, observe?: 'body', reportProgress?: boolean): Observable<ImpersonateResponse>;
    public impersonate(authenticationkey?: string, body?: ImpersonateRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ImpersonateResponse>>;
    public impersonate(authenticationkey?: string, body?: ImpersonateRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ImpersonateResponse>>;
    public impersonate(authenticationkey?: string, body?: ImpersonateRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<ImpersonateResponse>(`${this.basePath}/users/impersonate`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listAllUsers(authenticationkey?: string, pagesize?: number, currentpage?: number, body?: FilteringInformationHolder, observe?: 'body', reportProgress?: boolean): Observable<Array<UserClass>>;
    public listAllUsers(authenticationkey?: string, pagesize?: number, currentpage?: number, body?: FilteringInformationHolder, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UserClass>>>;
    public listAllUsers(authenticationkey?: string, pagesize?: number, currentpage?: number, body?: FilteringInformationHolder, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UserClass>>>;
    public listAllUsers(authenticationkey?: string, pagesize?: number, currentpage?: number, body?: FilteringInformationHolder, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        if (pagesize !== undefined && pagesize !== null) {
            headers = headers.set('pagesize', String(pagesize));
        }
        if (currentpage !== undefined && currentpage !== null) {
            headers = headers.set('currentpage', String(currentpage));
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

        return this.httpClient.post<Array<UserClass>>(`${this.basePath}/users`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsers(authenticationkey?: string, body?: UserFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<UserClass>>;
    public getAllUsers(authenticationkey?: string, body?: UserFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<UserClass>>>;
    public getAllUsers(authenticationkey?: string, body?: UserFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<UserClass>>>;
    public getAllUsers(authenticationkey?: string, body?: UserFiltering, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<PaginationResponse<UserClass>>(`${this.basePath}/users/getAllUsers`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUser(authenticationkey?: string,body?: UserUpdate, observe?: 'body', reportProgress?: boolean): Observable<UserClass>;
    public updateUser(authenticationkey?: string,body?: UserUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserClass>>;
    public updateUser(authenticationkey?: string,body?: UserUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserClass>>;
    public updateUser(authenticationkey?: string,body?: UserUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.put<UserClass>(`${this.basePath}/users/updateUser`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUserNew(authenticationkey?: string,body?: UserCreate, observe?: 'body', reportProgress?: boolean): Observable<UserClass>;
    public createUserNew(authenticationkey?: string,body?: UserCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserClass>>;
    public createUserNew(authenticationkey?: string,body?: UserCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserClass>>;
    public createUserNew(authenticationkey?: string,body?: UserCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<UserClass>(`${this.basePath}/users/createUser`,
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
     * 
     * 
     * @param email 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public lookupUserByEmail(email: string, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<UserClass>;
    public lookupUserByEmail(email: string, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserClass>>;
    public lookupUserByEmail(email: string, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserClass>>;
    public lookupUserByEmail(email: string, authenticationkey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling lookupUserByEmail.');
        }

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
        ];

        return this.httpClient.get<UserClass>(`${this.basePath}/users/byEmail/${encodeURIComponent(String(email))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }

    /**
     * 
     * 
     * @param id 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public lookupUserById(id: string, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<UserClass>;
    public lookupUserById(id: string, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserClass>>;
    public lookupUserById(id: string, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserClass>>;
    public lookupUserById(id: string, authenticationkey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lookupUserById.');
        }

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
        ];

        return this.httpClient.get<UserClass>(`${this.basePath}/users/byId/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));
    }

    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param number 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public multipleCreate(authenticationkey?: string, number?: number, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public multipleCreate(authenticationkey?: string, number?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public multipleCreate(authenticationkey?: string, number?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public multipleCreate(authenticationkey?: string, number?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        if (number !== undefined && number !== null) {
            headers = headers.set('number', String(number));
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

        return this.httpClient.post<number>(`${this.basePath}/users/batchCreate`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        )
    }

   

    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public resetUserPassword(authenticationkey?: string, body?: ResetUserPasswordRequest, observe?: 'body', reportProgress?: boolean): Observable<ResetPasswordFinishResponse>;
    public resetUserPassword(authenticationkey?: string, body?: ResetUserPasswordRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResetPasswordFinishResponse>>;
    public resetUserPassword(authenticationkey?: string, body?: ResetUserPasswordRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResetPasswordFinishResponse>>;
    public resetUserPassword(authenticationkey?: string, body?: ResetUserPasswordRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<ResetPasswordFinishResponse>(`${this.basePath}/users/resetUserPassword`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
