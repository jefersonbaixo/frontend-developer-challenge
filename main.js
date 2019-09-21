import { getProductsAndNextPage }  from "./modules/apiService.js";
import { createProduct } from "./modules/product.js";


let nextPageLink = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';

const store = document.querySelector('.row');


getProductsAndNextPage(nextPageLink).then(
    resp => {
        nextPageLink = resp.nextPage;
        resp.products.forEach(value => {
            store.appendChild(createProduct(value))
        })
    }
)
