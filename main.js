import { getProducts } from "./modules/apiService.js";
import { createProduct } from "./modules/product.js";

let nextPage = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';

const store = document.querySelector('.store > div:nth-child(2)');

/**
 * 
 * @param {URL} page 
 * @function This function get products from API and render it at DOM
 */
function showProducts(page) {
    getProducts(page).then(
        resp => {
            nextPage = `https://${resp.nextPage}`;
            resp.products.forEach(value => {
                store.appendChild(createProduct(value));
            })
        }
    ).catch(resp => alert(resp));
}

/**
 * @function This function verify the friend inputs and send email to him.
 */
function sendEmail(){
    event.preventDefault();
    const emailRegex = /^\w+@\w+\.\w{2,3}\.{0,1}[\w{2,3}]*$/i;
    const friendName = document.getElementById('friend-name');
    const friendEmail = document.getElementById('friend-email');
    if(friendEmail.value.match(emailRegex) && friendName.value){
        console.log(
            `Enviando e-mail para o amigo: "${friendName.value}" e-mail: "${friendEmail.value}"`
            );
    } else {
        console.log('Preencha os campos corretamente.')
    }
}

showProducts(nextPage);
document.getElementById('nextPage').onclick = () => showProducts(nextPage);
document.querySelector('button.btn:nth-child(1)').onclick= () => sendEmail();



