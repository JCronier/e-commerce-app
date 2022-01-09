const Query = {
  products: (parent, args, context) => {
    let filteredProducts = context.products;

    if (args.filter) {
      if(args.filter.onSale === true) {
        filteredProducts = filteredProducts.filter(product => product.onSale);
      }
    }
    return filteredProducts;
  },
  product: (parent, args, context) => {
    return context.products.find(product => product.id = args.id);
  },
  categories: (parent, args, context) => {
    return context.categories;
  },
  category: (parent, args, context) => {
    return context.categories.find(product => product.id === args.id);
  }
};

module.exports = {
  Query
}