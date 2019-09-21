
function getProducts() {
    
    return fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
        .then(resp => resp.json())
        .then(json => json);

}

function getMoreProducts(nextPage) {
    return fetch(nextPage)
        .then(resp => resp.json())
        .then(json => json);
    
}

export {getProducts, getMoreProducts};




