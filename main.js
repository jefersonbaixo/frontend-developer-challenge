import { getProducts, getMoreProducts } from "./modules/apiService.js";
import { createProduct } from "./modules/product.js";


let nextPage;

const store = document.querySelector('.store > div:nth-child(2)');

getProducts().then(
    resp => {
        nextPage = `https://${resp.nextPage}`;
        resp.products.forEach(value => {
            store.appendChild(createProduct(value));
        })
    }
).catch(resp => alert(resp));

function moreProducts() {
    getMoreProducts(nextPage).then(
        resp => {
            nextPage = `https://${resp.nextPage}`;
            resp.products.forEach(value => {
                store.appendChild(createProduct(value));
            })
        }
    )
}


document.getElementById('nextPage').onclick = () => moreProducts();

