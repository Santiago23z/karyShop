export const total = (products) =>{
    return products.reduce((prev, product) => prev + product.price, 0);
}