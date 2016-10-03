var app;
(function (app) {
    var common;
    (function (common) {
        'use strict';
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            //inject should be property of the class
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
