import { products } from "./products.js";

function createProduct(parent, imgUrl, productTitle, textPrice) {
    const product = document.createElement("div");
    product.className = "product";

    createImg(product, imgUrl, productTitle);
    createText(product, productTitle, textPrice);
    parent.appendChild(product);
}

function createImg(parent, imgUrl, productTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = productTitle;

    parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
    const title = document.createElement("h4");
    title.textContent = productTitle;

    const price = document.createElement("p");
    price.textContent = `${textPrice} €`;

    parent.append(title, price);
}


const wrapperProductsOne = document.querySelector(".wrapper__products__one");
const wrapperProductsTwo = document.querySelector(".wrapper__products__two");

const btnOne = document.querySelector(".btn_one")

function renderProducts(parent) {
    products.map((product) => {
        createProduct(parent, product.image, product.title, product.price);
    });

}

// ELEMENTI IN ORDINE ALFABETICO 

// function renderProducts(parent) {
//     const titleTwo = (products.sort((a, b) => a.title.localeCompare(b.title)));
//     titleTwo.map((product) => {
//         createProduct(parent, product.image, product.title, product.price);
//     })
// }

// PROVA 

// btnOne.addEventListener("click", () => {
//     const titleTwo = (products.sort((a, b) => a.title.localeCompare(b.title)));
//     titleTwo.map((product) => {
//         createProduct(parent, product.image, product.title, product.price);
//     });

// })


renderProducts(wrapperProductsOne);
renderProducts(wrapperProductsTwo);