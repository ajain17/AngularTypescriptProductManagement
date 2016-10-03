module app.common{
     'use strict';
    interface IDataAccessService{
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }

    interface IProductResource 
    extends ng.resource.IResource<app.domain.IProduct>{
        
    }

    export class DataAccessService implements IDataAccessService{
    
        //inject should be property of the class
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService){

        }
    
        getProductResource(): ng.resource.IResourceClass<IProductResource>{
            return this.$resource("/api/products/:productId");  
        }

    }

angular
.module("common.services")
.service("dataAccessService", DataAccessService);
}