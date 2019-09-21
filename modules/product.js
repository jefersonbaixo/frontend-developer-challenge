

function createProduct(product) {

    const id = document.createTextNode(product.id);
    const name = document.createTextNode(product.name);
    const oldPrice = document.createTextNode(product.oldPrice);
    const price = document.createTextNode(product.price);
    const description = document.createTextNode(product.description);
    const installments = document.createTextNode(`ou ${product.installments.count}x de ${product.installments.value}`);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

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

    const newProduct = document.createElement('div');
    newProduct.setAttribute('class', 'product col-3');

    let elementsArr = new Array();
    elementsArr.push(productImg, productName, productDescription, productOldPrice, productPrice, productInstallments);

    elementsArr.forEach(value => {
        newProduct.appendChild(value);
    })

    return newProduct;

}

export { createProduct };