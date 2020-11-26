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
import { BaseclassIdFiltering } from './baseclassIdFiltering';
import { SortParameter } from './sortParameter';
import { ExecutionParametersHolder } from './executionParametersHolder';


export interface FilteringInformationHolder extends ExecutionParametersHolder{ 
    /**
     * Filter out by Categories, optional list of Id values of categories associated with all of the retrieved data membersYou should retrieve a list of categories available for this clazz, see categories.
     */
    categories?: Array<BaseclassIdFiltering>;
    /**
     * provides sorting information for the returned collectionAdd more sort parameters if you need to sort by more than 1 field.  The first sort parameter has higher sort priority
     */
    sort?: Array<SortParameter>;
    /**
     * provide filtering on name, for example: %myname% will retrieve all instances having myname anywhere inside their name 
     */
    nameLike?: string;
    /**
     * Set case sensitivity for name like
     */
    likeCaseSensitive?: boolean;
    /**
     * provide from time filtering, provide epoch time in ISODate Format expecting UTC. leave empty for any instance not limited by ToDate field 
     */
    fromDate?: Date;
    /**
     * provide to time filtering, provide epoch time in ISODate Format expecting UTC. leave empty for any instance not limited by FromDate field 
     */
    toDate?: Date;
    /**
     * define the page size for paged data, set to -1 or dont specify if all records are needed at once, paging by this property is the most efficient method as paging is carried out by the database engine.
     */
    pageSize?: number;
    /**
     * The current page required, starting with 0. 0 is the first page
     */
    currentPage?: number;

    /**
     * used on generic listing - set the expected result type
     */
    resultType?:string;
    /**
     * used on generic listing - set the filter type
     */
    type?:string;
    tenantIds?:BaseclassIdFiltering[];
    fullTextLike?:string;
    excludingIds?:string[]
    onlyIds?:string[];


}
