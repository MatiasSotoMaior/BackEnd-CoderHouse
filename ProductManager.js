const fs = require('fs');

class ProductManager {
    constructor() {
        this.products = [];
        this.path = './productos.json';
        this.loadProducts();
    }

    loadProducts() {
        try {
            const data = fs.readFileSync(this.path);
            this.products = JSON.parse(data);
        } catch (error) {
            console.error(`Error al cargar los productos: ${error}`);
        }
    }

    saveProducts() {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        } catch (error) {
            console.error(`Error al guardar los productos: ${error}`);
        }
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error('Todos los campos son obligatorios');
            return;
        }

        if (this.products.some(p => p.code === product.code)) {
            console.error('Ya existe un producto con ese código');
            return;
        }

        const newProduct = { ...product, id: this.products.length + 1 };
        this.products.push(newProduct);
        this.saveProducts();
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error('Producto no encontrado');
        }
        return product;
    }

    async updateProduct(id, updatedProduct) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error('Producto no encontrado');
            return;
        }
        const newProduct = { ...updatedProduct, id };
        this.products[index] = newProduct;
        await this.saveProducts();
    }

    async deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error('Producto no encontrado');
            return;
        }
        this.products.splice(index, 1);
        await this.saveProducts();
    }
}

const pm = new ProductManager();

pm.addProduct({
    title: 'Camisa',
    description: 'Camisa de manga larga',
    price: 1000,
    thumbnail: 'https://example.com/camisa.jpg',
    code: 'C001',
    stock: 10
});

pm.addProduct({
    title: 'Pantalón',
    description: 'Pantalón de tela',
    price: 1500,
    thumbnail: 'https://example.com/pantalon.jpg',
    code: 'P001',
    stock: 5
});

console.log(pm.getProducts());
module.exports = ProductManager;