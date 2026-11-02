let cart = JSON.parse(localStorage.getItem('bouyzCart')) || '[]');

function addToCart(name, price) {
cart.push({name: name, price: price});
localStorage.setItem('bouyzCart', JSON.stringify(cart));
updateCartCount();
alert(name + " added - R" + price);
}

function updateCartCount() {
let el = document.getElementById('cart-count');
if (el) el.innerText = cart.length;
}

const products = [
{name: 'Diesel Tee - black', price: 299},
{name: 'Diesel Pants - Black', price: 499},
{name: 'Diesel Hoodie - Black', price: 599},
{name: 'Diesel Jacket', price: 699}
];

function loadProducts(list) {
if (!list) list = products;
let container = document.getElementById('dynamic-products');
if (!container) return;
container.innerHTML = '';
list.forEach(function(p) {
let html = '<div style="background:white; color:black; padding:15px; border-radius:12px; text-align:center;">';
html += '<h3>' + p.name + '</h3>';
html += '<p style="color:red; font-weight:bold;">R' + p.price + '</p>';
html += '<button onclick="addToCart('' + p.name + '',' + p.price + ')" style="background:black; color:white; padding:10px 20px; border:none; border-radius:20px; cursor:pointer;">Add to Cart</button>';
html += '</div>';
container.innerHTML += html;
});
}

function filterProducts() {
let input = document.getElementById('searchInput');
if (!input) return;
let q = input.value.toLowerCase();
let filtered = products.filter(function(p) {
return p.name.toLowerCase().includes(q) || String(p.price).includes(q);
});
loadProducts(filtered);
}

document.addEventListener('DOMContentLoaded', function() {
updateCartCount();
loadProducts();
});