
const productsQuantity = Array.from(document.querySelectorAll('.product__quantity-control'));

const productsAdd = Array.from(document.querySelectorAll('.product__add'));

//Подсчет наименований

productsQuantity.forEach(function(item) {

    item.addEventListener('click', e => {  

  	let quantity = e.target.parentNode.querySelector('.product__quantity-value');

    let count = parseInt(quantity.innerText);

    if (e.target.className.includes('product__quantity-control_inc')) {

        count += 1;

        quantity.innerText = count;

    } else {

        count > 1 ? (count -= 1,
        quantity.innerText = count) : (quantity.innerText = 1);

    }
  })
})

//добавление в корзину

productsAdd.forEach(function(item) {
    item.addEventListener('click', e => {

    const cart = document.querySelector('.cart__products');
    console.log(cart.children)
    //проверка

    const product = e.target.closest('.product');

    const id = product.dataset.id;

    const quantityOfProduct = parseInt(e.target.parentNode.querySelector('.product__quantity-value').innerText);

    //почемуто не работает

    // cart.children.forEach(function(i){
    // 	 if (i.dataset.id === id) {

    //             let productCount = i.querySelector('.cart__product-count');

    //             let total = parseInt(productCount.innerText);

    //             productCount.innerText =  quantityOfProduct + totalCount;

    // return false;
    // }

    // })

    for (let i of cart.children) {

        if (i.dataset.id === id) {

            let productCount = i.querySelector('.cart__product-count');

            let totalCount = parseInt(productCount.innerText);

            productCount.innerText = quantityOfProduct + totalCount;

            return false;

        }

    }

    const count = product.querySelector('.product__quantity-value').innerText;
    const productSrc = product.querySelector('.product__image').src;

    const addToCart = `<div class="cart__product" data-id="${id}">

                                <img class="cart__product-image" src="${productSrc}">

                                <div class="cart__product-count">${count}</div>

                            </div>`;

    cart.insertAdjacentHTML('beforeend', addToCart);

});
})


