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
export interface PluginUpdate {
    namesAndHash?: {
        [key: string]: string;
    };
    uuid?: string;
    type?: PluginUpdate.TypeEnum;
    shouldSend?: boolean;
    senderLocalPath?: string;
}
export declare namespace PluginUpdate {
    enum TypeEnum {
        Service,
        Model,
        Core
    }
}