

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


// 
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click',() =>{
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
   });
   
   options.forEach(Option => {
     Option.addEventListener('click', () => {
       selected.innerText = Option.innerText;
       select.classList.remove('select-clicked');
       caret.classList.remove('caret-rotate');
       menu.classList.remove('menu-open');
       Option.forEach(option => {
          option.classList.remove('active');
       });
       Option.classList.add('active');
     });
   });
});






//

let shoppingCart = document.querySelector('.shopping-cart');

 document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{body.classList.add('active');})
closeShopping.addEventListener('click', ()=>{body.classList.remove('active');})
let products=[
    {
        id:1,
        name:'PRODUCT NAME 1',
        image: 'tomato',
        price: 10
    },
    {
        id:2,
        name:'PRODUCT NAME 2',
        image: 'tomato',
        price: 10 
    },
    {
        id:3,
        name:'PRODUCT NAME 3',
        image: 'tomato',
        price: 10
    },
    {
        id:4,
        name:'PRODUCT NAME 4',
        image: 'tomato',
        price: 10
    },
    {
        id:5,
        name:'PRODUCT NAME 5',
        image: 'tomato',
        price: 10
    },
    {
        id:6,
        name:'PRODUCT NAME 6',
        image: 'tomato',
        price: 10
    },
    {
        id:7,
        name:'PRODUCT NAME 7',
        image: 'tomato',
        price: 10
    },
    {
        id:8,
        name:'PRODUCT NAME 8',
        image: 'tomato',
        price: 10
    },
    {
        id:9,
        name:'PRODUCT NAME 9',
        image: 'tomato',
        price: 10
    },
    {
        id:10,
        name:'PRODUCT NAME 10',
        image: 'tomato',
        price: 10
    },
    {
        id:11,
        name:'PRODUCT NAME 11',
        image: 'tomato',
        price: 10
    },
    {
        id:12,
        name:'PRODUCT NAME 12',
        image: 'tomato',
        price: 10
    },
    {
        id:13,
        name:'PRODUCT NAME 13',
        image: 'tomato',
        price: 10
    },
    {
        id:14,
        name:'PRODUCT NAME 14',
        image: 'tomato',
        price: 10
    },
    
];
let listCarts = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class= "title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCart[key] == null){
        listCart[key]= products[key];
        listCart[key].quantity = 1;

    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;
    listCart.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value !=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML =`
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity +1})">-</button>

            </div>
            `;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCart[key];
    }
    else{
        listCart[key].quantity = quantity;
        listCart[key].price = quantity * products[key].price;
    }
    reloadCart();
}
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active'); 
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#men-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active'); 
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
    centeredSlides: true,
    breakpoints: {
        
      0: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});