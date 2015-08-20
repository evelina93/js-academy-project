
var Product = (function () {
    function Product(id, price, weight, name, tva, description, image) {
        this.price = price;
        this.weight = weight;
        this.id = id;
        this.name = name;
        this.tva = tva || 0.24;
        this.description = description;
        this.image = image;
    }

    Product.prototype = {
        constructor: Product,

        getTransportPrice: function () {
            return this.weight * 10;
        },
        getFullPrice: function () {
            return this.price + (this.tva * this.price) + this.getTransportPrice();
        },
        getPrice: function () {
            return this.price;
        },
        render: function () {
            return new EJS({
                url: this.template
            }).render(this);
        },
        toCartObject: function () {
            return true;
        },
    };
    return Product;
})();

export default Product;
