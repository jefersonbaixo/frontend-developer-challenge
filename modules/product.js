
/**
 * 
 * @param {object} product 
 * @function this Function receives an object(product) from API and render it at DOM.
 */
function createProduct(product) {

    const id = product.id; // 
    const name = document.createTextNode(product.name);
    const oldPrice = document.createTextNode(`R$${product.oldPrice.toFixed(2).toString().replace(".", ",")}`);
    const price = document.createTextNode(`R$${product.price.toFixed(2).toString().replace(".", ",")}`);
    const description = document.createTextNode(product.description);
    const installments = document.createTextNode(`ou ${product.installments.count}x de R$${product.installments.value.toFixed(2).toString().replace(".", ",")}`);
    const buy = document.createTextNode('Comprar');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('alt', `Produto: ${product.id}`)

    const productName = document.createElement('h5');
    productName.setAttribute('class', 'productName');
    productName.appendChild(name);

    const productDescription = document.createElement('p');
    productDescription.setAttribute('class', 'product-description');
    productDescription.appendChild(description);

    const productOldPrice = document.createElement('p');
    productOldPrice.setAttribute('class', 'product-old-price');
    productOldPrice.appendChild(oldPrice);

    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'product-price');
    productPrice.appendChild(price);

    const productInstallments = document.createElement('p');
    productInstallments.setAttribute('class', 'installments');
    productInstallments.appendChild(installments);

    const buyButton = document.createElement('button');
    buyButton.setAttribute('class', 'btn btn-outline-secondary')
    buyButton.appendChild(buy);

    const newProduct = document.createElement('div');
    newProduct.setAttribute('class', 'product');

    let elementsArr = new Array();
    elementsArr.push(productImg, productName, productDescription, productOldPrice, productPrice, productInstallments, buyButton);

    elementsArr.forEach(value => {
        newProduct.appendChild(value);
    })

    return newProduct;

}

export { createProduct };