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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { FlexiCoreDecycle } from './api';
let OperationService = class OperationService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://169.254.121.191:8080/FlexiCore/rest';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getAllOperations(authenticationKey, body, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/operations/getAllOperations`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }
    setOperationAuditable(authenticationKey, id, auditable, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        if (auditable !== undefined && auditable !== null) {
            headers = headers.set('auditable', String(auditable));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/operations/setOperationAuditable/${id}`, null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }
};
OperationService = __decorate([
    Injectable(),
    __param(1, Optional()),
    __param(1, Inject(BASE_PATH)),
    __param(2, Optional())
], OperationService);
export { OperationService };
//# sourceMappingURL=operation.service.js.map