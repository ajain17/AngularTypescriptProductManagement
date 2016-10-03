var app;
(function (app) {
    var domain;
    (function (domain) {
        var product = (function () {
            function product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return product;
        }());
        domain.product = product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
