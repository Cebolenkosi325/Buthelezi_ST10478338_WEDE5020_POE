// products.js
// Shows the product list from an array, with search, category filter and sort

// one picture and one description of the picture for each category
const breadImage = "images/bread-loaves-oven-peel.jpg";
const breadAlt = "Fresh bread loaves coming out of a hot oven";
const cakeImage = "images/chocolate-birthday-cake.jpg";
const cakeAlt = "Chocolate birthday cake with chocolate drip and piped icing";
const pastryImage = "images/assorted-pastries-box.jpg";
const pastryAlt = "Box of assorted fresh pastries";

// the products (the prices are made up for this project)
const products = [
    { name: "White Bread Loaf", category: "Bread", price: 18, description: "Soft white bread, baked fresh every morning.", image: breadImage, alt: breadAlt },
    { name: "Brown Bread Loaf", category: "Bread", price: 20, description: "Wholewheat loaf with a nutty taste.", image: breadImage, alt: breadAlt },
    { name: "Seed Loaf", category: "Bread", price: 32, description: "Brown bread packed with sunflower, pumpkin and sesame seeds.", image: breadImage, alt: breadAlt },
    { name: "Bread Rolls (6)", category: "Bread", price: 24, description: "Soft rolls, perfect for lunch boxes and braais.", image: breadImage, alt: breadAlt },

    { name: "Chocolate Birthday Cake", category: "Cakes", price: 350, description: "Chocolate sponge with chocolate icing and a message of your choice.", image: cakeImage, alt: cakeAlt },
    { name: "Vanilla Sponge Cake", category: "Cakes", price: 280, description: "Light vanilla sponge filled with jam and cream.", image: cakeImage, alt: cakeAlt },
    { name: "Red Velvet Cake", category: "Cakes", price: 380, description: "Red velvet layers with cream cheese icing.", image: cakeImage, alt: cakeAlt },
    { name: "Cupcakes (6)", category: "Cakes", price: 90, description: "Six cupcakes with vanilla or chocolate icing.", image: cakeImage, alt: cakeAlt },

    { name: "Butter Croissant", category: "Pastries", price: 22, description: "Flaky croissant baked fresh every morning.", image: pastryImage, alt: pastryAlt },
    { name: "Blueberry Muffin", category: "Pastries", price: 25, description: "Moist muffin full of blueberries.", image: pastryImage, alt: pastryAlt },
    { name: "Custard Doughnut", category: "Pastries", price: 20, description: "Soft doughnut filled with vanilla custard.", image: pastryImage, alt: pastryAlt },
    { name: "Fruit Danish", category: "Pastries", price: 28, description: "Flaky pastry with custard and seasonal fruit.", image: pastryImage, alt: pastryAlt }
];

const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const sortBox = document.getElementById("sortBox");
const productList = document.getElementById("productList");
const resultCount = document.getElementById("resultCount");

function showProducts() {
    const searchText = searchBox.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const sortBy = sortBox.value;

    // 1. collect the products that match the category and the search words
    const results = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const allText = (product.name + " " + product.category + " " + product.description).toLowerCase();

        if ((category === "all" || product.category === category) && allText.includes(searchText)) {
            results.push(product);
        }
    }

    // 2. put them in the order the visitor chose
    if (sortBy === "low") {
        results.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sortBy === "high") {
        results.sort(function (a, b) {
            return b.price - a.price;
        });
    } else {
        results.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    // 3. make a card for each product and show them
    let cards = "";
    for (let i = 0; i < results.length; i++) {
        const product = results[i];
        cards = cards +
            '<article class="menu-card">' +
            '<img src="' + product.image + '" alt="' + product.alt + '" loading="lazy">' +
            '<span class="menu-category">' + product.category + '</span>' +
            '<h3>' + product.name + '</h3>' +
            '<p>' + product.description + '</p>' +
            '<p class="menu-price">R' + product.price.toFixed(2) + '</p>' +
            '<a href="enquiry.html" class="menu-button">Enquire</a>' +
            '</article>';
    }
    productList.innerHTML = cards;

    // 4. tell the visitor how many were found
    if (results.length === 0) {
        resultCount.textContent = "No products match your search. Try a different word or choose All products.";
    } else if (results.length === 1) {
        resultCount.textContent = "1 product found";
    } else {
        resultCount.textContent = results.length + " products found";
    }
}

// update the list while the visitor types or changes a choice
searchBox.addEventListener("input", showProducts);
categoryFilter.addEventListener("change", showProducts);
sortBox.addEventListener("change", showProducts);

// show all the products when the page opens
showProducts();