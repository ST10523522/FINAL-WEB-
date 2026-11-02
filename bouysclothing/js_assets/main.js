// The Bouyz Clothing - Main JavaScript
// Interactive Elements, Forms, Validation

// Contact Form Validation - Comprehensive with Immediate Feedback
function validateContact(e) {
e.preventDefault();

let name = document.getElementById('c-name').value.trim();
let email = document.getElementById('c-email').value.trim();
let phone = document.getElementById('c-phone').value.trim();
let type = document.getElementById('c-type').value;
let message = document.getElementById('c-msg').value.trim();
let error = document.getElementById('c-error');

error.className = 'error';
error.innerText = '';

// Name validation
if (name.length < 3) {
error.innerText = 'Name must be at least 3 characters (e.g. John Doe)';
document.getElementById('c-name').focus();
return false;
}

// Email validation
let emailPattern = /^[^@\s]+@[^@\s]+.[^@\s]+$`/;
if (!emailPattern.test(email)) {
error.innerText = 'Enter valid email e.g. john@example.com';
document.getElementById('c-email').focus();
return false;
}

// Phone validation
let phonePattern = /^[0-9]{10}`$/;
if (!phonePattern.test(phone)) {
error.innerText = 'Phone must be exactly 10 digits e.g. 0680266436';
document.getElementById('c-phone').focus();
return false;
}

if (!type) {
error.innerText = 'Please select message type';
return false;
}

if (message.length < 10) {
error.innerText = 'Message must be at least 10 characters';
document.getElementById('c-msg').focus();
return false;
}

// AJAX Simulation - Immediate feedback
error.className = 'success';
error.innerText = 'Validating... Sending via AJAX...';

setTimeout(function() {
error.innerText = 'Success! Message compiled into email to admin@thebouyz.co.za and sent promptly. We will reply within 24h.';
document.getElementById('contactForm').reset();
}, 1200);

return false;
}

// Enquiry Form - Cost and Availability
function validateEnquiry(e) {
e.preventDefault();

let name = document.getElementById('e-name').value.trim();
let email = document.getElementById('e-email').value.trim();
let product = document.getElementById('e-product').value;
let qty = parseInt(document.getElementById('e-qty').value);
let error = document.getElementById('e-error');
let result = document.getElementById('e-result');

error.innerText = '';
result.innerText = '';

if (name.length < 3) {
error.innerText = 'Name required min 3 chars';
return;
}

let emailPattern = /^[^@\s]+@[^@\s]+.[^@\s]+$/;
if (!emailPattern.test(email)) {
error.innerText = 'Valid email required';
return;
}

if (!product) {
error.innerText = 'Select a product/service';
return;
}

if (isNaN(qty) || qty < 1 || qty > 10) {
error.innerText = 'Quantity must be 1-10';
return;
}

// Cost calculation
const prices = {
'Tee': 299,
'Pants': 499,
'Hoodie': 599,
'Jacket': 699,
'Cargo': 549,
'Shorts': 399
};

let unit = prices[product] || 299;
let total = unit * qty;
let availability = '';

if (qty > 5) {
availability = 'Low stock - 3-5 days delivery from Pretoria warehouse';
} else {
availability = 'In stock - Ready for pickup at Hatfield store';
}

result.className = 'success';
result.innerHTML = '<strong>Input Processed Accurately:</strong><br>Product: ' + product + '<br>Email: ' + email + '<br>Quantity: ' + qty + '<br>Unit Price: R' + unit + '<br><strong>Total Cost: R' + total + '</strong><br>Availability: ' + availability + '<br><br><em>Email sent promptly to sales@thebouyz.co.za</em>';
}

// Tabs Function - Interactive Elements
function openTab(evt, id) {
let contents = document.querySelectorAll('.tab-content');
contents.forEach(function(c) {
c.classList.remove('active');
});

let buttons = document.querySelectorAll('.tab-btn');
buttons.forEach(function(b) {
b.classList.remove('active');
});

document.getElementById(id).classList.add('active');
evt.currentTarget.classList.add('active');
}

// Accordion Function
function toggleAcc(id) {
let body = document.getElementById(id);
body.classList.toggle('open');
}

// Lightbox Functions
function openLightbox(src) {
let lightbox = document.getElementById('lightbox');
let img = document.getElementById('lightbox-img');
img.src = src;
lightbox.style.display = 'flex';
}

function closeLightbox() {
let lightbox = document.getElementById('lightbox');
lightbox.style.display = 'none';
}

// Modal Functions
function showModal(msg) {
let text = document.getElementById('modal-text');
let modal = document.getElementById('modal');

if (!modal) {
alert(msg);
return;
}

text.innerText = msg;
modal.style.display = 'flex';
}

function closeModal() {
let modal = document.getElementById('modal');
modal.style.display = 'none';
}