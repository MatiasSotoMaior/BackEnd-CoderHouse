// class ProductManager {
//     constructor() {
//         this.products = [];
//         this.nextId = 1;
//     }

//     addProduct(product) {
        
//         if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
//             console.log("Todos los campos son obligatorios.");
//         }

//         if (this.products.some(p => p.code === product.code)) {
//             console.log(`El producto con código ${product.code} ya existe.`);
//         }

//         this.products.push({
//             id: this.nextId++,
//             title: product.title,
//             description: product.description,
//             price: product.price,
//             thumbnail: product.thumbnail,
//             code: product.code,
//             stock: product.stock
//         });

//         console.log('Producto agregado correctamente');
//     }

//     getProducts() {
//         return this.products;
//     }

//     getProductById(id) {
//         const product = this.products.find(p => p.id === id);

//         if (product) {
//             return product;
//         } else {
//             console.log("Producto no encontrado.");
//             return null;
//         }
//     }
// }

// const manager = new ProductManager();

// manager.addProduct({
//     title: "queso",
//     description: "quesito mardelplata",
//     price: 200,
//     thumbnail: "https://www.bing.com/images/search?q=Foto%20Queso%20Mar%20del%20Plata&FORM=IQFRBA&id=6DB8A81EE883252144A912B18187CB93338A2CA9",
//     code: "P1",
//     stock: 10
// },
// {
//     title: "quesito",
//     description: "quesito mardelplata",
//     price: 200,
//     thumbnail: "https://www.bing.com/images/search?q=Foto%20Queso%20Mar%20del%20Plata&FORM=IQFRBA&id=6DB8A81EE883252144A912B18187CB93338A2CA9",
//     code: "P1",
//     stock: 10
// });

// const findProd = manager.getProductById(1)
// console.log(findProd);

// let products = manager.getProducts()

// module.exports = {products}