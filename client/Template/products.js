Template.products.helpers({
    'products': function () {
        console.log("products called");
        return Products.find().fetch();
    }
});