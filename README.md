The Bouyz Clothing - FINAL-WEB
Student: ST10523522
Module: WED5020 - Web Development POE Part 3 / FINAL-WEB
Location: Hatfield, Pretoria
Live Site: http://keen-khapse-618945.netlify.app

Project Description
The Bouyz Clothing is a local streetwear brand website based in Hatfield, Pretoria. This final submission fixes all issues flagged in Part 2 feedback and meets all Part 3 / FINAL-WEB requirements.

What Was Fixed (From Part 2 Feedback)
1. Add to Cart - Part 3 Requirement: Implemented full e-commerce functionality with js_assets/cart.js using localStorage, not just price display.
2. Home Page Communication: Home page now communicates with user - welcome message, local brand story, CTA buttons.
3. Mobile Responsiveness: Added media queries - Desktop 3 columns, Tablet 2 columns, Mobile 1 column. No squashed products.
4. JavaScript Errors: Fixed cart.js Line 95 template literal errors by using createElement - VS Code shows 0 Problems.
5. Interactive Map: Fixed gray Leaflet map in index.html with L.tileLayer and map.invalidateSize() for Hatfield location.

Features Implemented
• Dynamic product loading in shop.html from JavaScript array
• Search filter for products
• Shopping cart page cart.html - add, remove, clear, calculate total
• Checkout alert with cart summary
• Interactive Leaflet.js map - Find Us Hatfield, Pretoria (-25.7477, 28.2353)
• Lightbox gallery in gallery.html
• Contact form with validation
• SEO: robots.txt and sitemap.xml

Pages
• index.html - Home with welcome + map
• shop.html - Dynamic shop with 4+ products
• cart.html - Cart functionality
• about.html - Brand story
• gallery.html - Lightbox
• contact.html - Contact form

How to Run
1. Download / Clone repo
2. Double-click index.html
3. Click Shop -> Add to Cart -> Check Cart icon total updates
4. For map to show streets, need internet - otherwise shows gray

Screenshots (Include in PDF Submission)
1. Desktop Home page
2. Shop page showing 4 products dynamically
3. Cart with 2 items + total calculation
4. Mobile view in DevTools (iPhone SE - 375px)
5. VS Code 0 Problems
6. Netlify live site

References
• MDN Web Docs - Window.localStorage - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage (Accessed 15 Oct 2026)
• Leaflet.js Documentation - https://leafletjs.com/reference.html (Accessed 16 Oct 2026)
• W3Schools - CSS Media Queries - https://www.w3schools.com/css/css3_mediaqueries.asp (Accessed 14 Oct 2026)
• OpenStreetMap Tile Usage - https://wiki.openstreetmap.org/wiki/Tile_servers (Accessed 16 Oct 2026)
• Product Images - Own photos / Free to use

AI Declaration (Required by Lecturer)
I used Meta AI to help generate the JavaScript cart logic (createElement fix for line 95 errors) and Leaflet map initialization code. I then modified, tested, and debugged the code myself to meet the brief. I understand the code and can explain it.

Git Commits
This repo uses meaningful commits as required:
• feat: create responsive home page with user welcome message
• fix: add mobile responsiveness with media queries
• feat: implement add to cart functionality with localStorage
• feat: complete Part 3 online store with cart page
