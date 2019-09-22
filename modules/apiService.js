
/**
 * 
 * @param {URL} page 
 *@function this function receive a URL and send a GET request to it. 
 */
function getProducts(page) {
    
    return fetch(page)
        .then(resp => resp.json())
        .then(json => json);

}

export {getProducts};




