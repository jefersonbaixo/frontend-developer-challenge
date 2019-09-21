
function getProductsAndNextPage(url) {
    
    return fetch(url)
        .then(resp => resp.json())
        .then(json => json);

}

export {getProductsAndNextPage};




