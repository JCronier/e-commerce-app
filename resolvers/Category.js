const Category = {
  products: (parent, args, context) => {
    let categoryProducts = context.products.filter(product => product.categoryId === parent.id);

    if (args.filter) {
      if(args.filter.onSale === true) {
        categoryProducts = categoryProducts.filter(product => product.onSale);
      }
    }
    return categoryProducts;
  }
};

module.exports = {
  Category
}