# Sunrise Bakery Website

## 1. Student Information

- **Name:** Buthelezi Cebolenkosi
- **Student Number:** ST10478338
- **Module:** Web Development (Introduction), WEDE5020
- **Institution:** Rosebank College / The Independent Institute of Education (IIE)

## 2. Project Links

- **GitHub Repository:** https://github.com/Cebolenkosi325/Buthelezi_ST10478338_WEDE5020_POE
- **Live Website:** https://cebolenkosi325.github.io/Buthelezi_ST10478338_WEDE5020_POE/

## 3. Project Overview

Sunrise Bakery is a fictional family-owned bakery based in Centurion, Gauteng. The website was developed as part of the WEDE5020 Web Development Portfolio of Evidence.

The project was completed in three parts:

- **Part 1:** Development of the website structure using HTML.
- **Part 2:** Styling and responsive website design using CSS.
- **Part 3:** JavaScript functionality, search features, form validation, SEO and website deployment.

The website provides information about the bakery, displays bakery products and allows visitors to make enquiries and contact the business.

## 4. Website Goals and Objectives

The main goals and objectives of the Sunrise Bakery website are:

- Increase brand awareness and attract customers in Centurion and surrounding areas.
- Provide visitors with information about bakery products and services.
- Allow customers to submit enquiries about custom cakes and catering.
- Display bakery products, prices and seasonal specials.
- Make it easier for customers to find contact information and business locations.
- Provide a user-friendly website that works on desktop computers, tablets and mobile phones.

## 5. Website Pages and Features

### Home Page (index.html)

- Introduces Sunrise Bakery.
- Displays a welcoming heading and bakery hero image.
- Shows featured bakery products.
- Includes an About section and website navigation.

### About Page (about.html)

- Provides information about Sunrise Bakery.
- Explains the bakery's background, mission and vision.
- Includes a picture gallery.
- Allows visitors to open pictures in a larger lightbox.

### Products Page (product.html)

- Displays bakery products using JavaScript.
- Includes 12 products in the JavaScript product list.
- Allows visitors to search for products.
- Provides category filtering.
- Allows sorting by product name and price.
- Displays product descriptions and prices.

### Enquiry Page (enquiry.html)

- Provides an enquiry form for customers.
- Includes full name, email, telephone number and enquiry details.
- Includes preferred contact method and consent checkbox.
- Uses JavaScript to validate form information.
- Calculates estimated prices for custom cakes and catering.
- Includes a frequently asked questions (FAQ) accordion.

### Contact Page (contact.html)

- Displays bakery contact information.
- Includes a contact form with validation.
- Prepares an email using the visitor's submitted information.
- Includes an interactive map using Leaflet and OpenStreetMap.
- Displays three location markers with information.

## 6. Website Sitemap

The website contains five main HTML pages:

```text
Sunrise Bakery
|
|-- Home (index.html)
|
|-- About (about.html)
|
|-- Products (product.html)
|
|-- Enquiry (enquiry.html)
|
|-- Contact (contact.html)
```

## 7. Project File Structure

The project is organised into HTML, CSS, JavaScript and image files.

```text
Buthelezi_ST10478338_WEDE5020_POE/
|
|-- index.html
|-- about.html
|-- product.html
|-- enquiry.html
|-- contact.html
|
|-- README.md
|-- robots.txt
|-- sitemap.xml
|
|-- css/
|   |-- style.css
|
|-- js/
|   |-- gallery.js
|   |-- accordion.js
|   |-- products.js
|   |-- enquiry.js
|   |-- contact.js
|   |-- map.js
|   |-- script.js
|
|-- images/
    |-- bread-basket-baguettes.jpg
    |-- chocolate-birthday-cake.jpg
    |-- assorted-pastries-box.jpg
    |-- baker-fresh-bread-oven.jpg
    |-- bread-loaves-oven-peel.jpg
```

## 8. Tools and Technologies Used

The following tools and technologies were used during development:

- **HTML5:** Used to create the website structure and content.
- **CSS3:** Used for styling, colours, spacing, layouts and responsive design.
- **JavaScript:** Used to create interactive website features and form validation.
- **Visual Studio Code:** Used to write and edit website code.
- **Git:** Used to track changes to the project.
- **GitHub:** Used to store and manage the project repository.
- **GitHub Pages:** Used to publish the live website.
- **Leaflet 1.9.4:** Used to create the interactive map.
- **OpenStreetMap:** Used to provide map data and map tiles.

## 9. Part 1: HTML Development

During Part 1, the basic website structure was developed.

The following work was completed:

- Created five HTML pages: Home, About, Products, Enquiry and Contact.
- Added headings, paragraphs, navigation links and website sections.
- Added a common header and footer.
- Created separate CSS, JavaScript and images folders.
- Added pictures to the website.
- Created the first README file.
- Uploaded the project to GitHub.

## 10. Part 2: CSS Styling and Responsive Design

During Part 2, an external CSS stylesheet was created and connected to all five HTML pages.

The following improvements were made:

### General Styling

- Added a CSS reset for margins and padding.
- Set the Arial font family.
- Applied consistent website colours.
- Styled the header, navigation, headings and footer.
- Styled buttons, forms and product cards.
- Added hover effects and transitions.

### Layout Improvements

- Corrected spacing between headings and paragraphs.
- Improved alignment of forms and their labels.
- Used Flexbox to organise website sections.
- Improved product card layouts.
- Made the footer stay at the bottom on shorter pages.
- Applied consistent colours and decoration across pages.

### CSS Pseudo-classes

The following pseudo-classes and pseudo-elements were added:

- `:hover` for interactive elements.
- `:focus` for keyboard and form interaction.
- `:active` for buttons and navigation links.
- `:first-child` for selected first elements.
- `:last-child` for selected last elements.
- `::placeholder` for form field hints.

### Responsive Design

Media queries were added for different screen sizes:

- 1024px for tablets.
- 768px for mobile devices.
- 480px for smaller mobile devices.

Additional responsive improvements included:

- Stacking product cards on smaller screens.
- Adjusting navigation links for mobile devices.
- Making form fields fit smaller screens.
- Adjusting heading and paragraph sizes.
- Making images responsive with `max-width: 100%`.
- Adjusting hero image heights at different screen sizes.
- Making buttons wider on smaller mobile screens.

### Part 2 Feedback Improvements

The following changes were made after reviewing the Part 2 feedback:

- Removed the incorrect `section:first-of-type` styling rule.
- Restricted hero styling to the `.hero` class.
- Improved paragraph and heading spacing.
- Corrected form alignment.
- Applied consistent colours to headings and buttons.
- Improved product card backgrounds, shadows and rounded corners.
- Added focus and active states.
- Added tablet and small mobile breakpoints.
- Improved responsive images and navigation.

## 11. Part 3: JavaScript Development

Part 3 introduced JavaScript functionality to make the website more interactive.

### Form Validation

**Enquiry Form (enquiry.html and js/enquiry.js)**

- Added validation for full name, email and phone number.
- Checked that the phone number contains 10 digits and starts with 0.
- Added validation for the number of people.
- Checked that the requested date is not in the past.
- Added message length validation.
- Added a required consent checkbox.
- Displayed error messages when information is incorrect.
- Displayed an estimated price for custom cakes and catering.
- Checked the required notice period for orders.

**Contact Form (contact.html and js/contact.js)**

- Added full name and email fields.
- Added an optional telephone number.
- Added different message categories.
- Validated the visitor's message.
- Prepared an email with the submitted information.
- Added a button to open the prepared email again.

### Interactive Gallery

**Files: about.html and js/gallery.js**

- Added a gallery containing five pictures.
- Added a lightbox to display larger pictures.
- Added next and previous buttons.
- Added a close button.
- Allowed the lightbox to close when visitors click the dark background.

### FAQ Accordion

**Files: enquiry.html and js/accordion.js**

- Added four frequently asked questions.
- Added expandable answers.
- Allowed visitors to open and close questions.
- Used CSS to display plus and minus indicators.
- Added a simple fading effect to answers.

### Interactive Map

**Files: contact.html and js/map.js**

- Added Leaflet 1.9.4.
- Connected the map to OpenStreetMap.
- Added three bakery location markers.
- Added information popups.
- Added buttons to move the map to the different locations.

### Dynamic Product Display

**Files: product.html and js/products.js**

- Created a JavaScript array containing 12 bakery products.
- Displayed products dynamically.
- Added product pictures, names, descriptions and prices.
- Added a search feature.
- Added category filtering.
- Added sorting by name.
- Added sorting by price from low to high.
- Added sorting by price from high to low.
- Displayed the number of matching products.
- Added a message when no products match the search.

### Website JavaScript

**File: js/script.js**

- Added JavaScript to identify the current page.
- Highlighted the active navigation link.
- Added an opening-status message to the footer using the bakery's opening hours.

## 12. Search Engine Optimisation (SEO)

SEO improvements were made to help search engines understand the website.

The following improvements were included:

- Added a unique page title to each HTML page.
- Added meta descriptions.
- Added meta keywords.
- Included Centurion in relevant page titles and descriptions.
- Added descriptive image filenames.
- Added alternative text (alt text) to pictures.
- Used lazy loading for pictures below the top of the page.
- Added a `robots.txt` file.
- Added a `sitemap.xml` file.

## 13. Website Security

The website includes basic security measures:

- JavaScript validation checks visitor information before processing forms.
- Visitor-entered text is displayed as plain text instead of being treated as HTML.
- The map library is loaded using HTTPS.
- The website does not store visitor information in a database.
- Server-side validation would still be necessary for a fully operational commercial website.

## 14. Responsive Design and Testing

The website was checked using Microsoft Edge and its developer tools.

Different screen sizes were considered, including:

- Desktop screens.
- Tablet screens.
- Mobile screens.
- Small mobile screens.

The responsive CSS adjusts navigation, images, product cards, forms and text sizes to improve usability on different devices.

## 15. Website Deployment

The Sunrise Bakery website was published using GitHub Pages.

**Live Website:**

https://cebolenkosi325.github.io/Buthelezi_ST10478338_WEDE5020_POE/

**GitHub Repository:**

https://github.com/Cebolenkosi325/Buthelezi_ST10478338_WEDE5020_POE

The website files are stored in the GitHub repository, and Git is used to upload changes from Visual Studio Code.

## 16. Project Changelog

### Part 1 – HTML

- Created the five main website pages.
- Added website navigation.
- Added the initial website content.
- Created the CSS, JavaScript and images folders.
- Created the first README.
- Uploaded the project to GitHub.

### Part 2 – CSS

- Created and connected `css/style.css`.
- Added the website colour scheme and typography.
- Styled the header, navigation and footer.
- Styled product cards and forms.
- Added hover effects.
- Added a mobile media query.
- Updated the README with project details and references.

### Changes from Part 2 Feedback (27 October to 1 November 2026)

Each point below is a comment from the Part 2 marking, followed by what I changed.

- Layout structure (alignment and spacing problems):
  - Removed the section:first-of-type rule. It gave the first section on every page the home page hero styling. The hero styles now only apply to the .hero class.
  - Added space between paragraphs and headings in the About, Contact and Enquiry sections, because the global margin reset had removed it. The h3 headings now have the same brown colour and spacing as the h2 headings.
  - Made the body a column layout and let the main section grow, so the footer stays at the bottom of the screen on short pages. Removed the gap above the footer.
  - Aligned the form labels and fields to the left inside the centred sections.
- Decoration and colour (not applied consistently):
  - The product page cards now have the same white background, rounded corners and shadow as the home page cards.
  - Every heading uses the same brown and every button the same orange on all pages.
  - Added a hover shadow on the cards and a short transition on the buttons.
- Pseudo-classes (used but insufficiently): added :focus on the menu links, buttons and form fields, :active on the menu links and buttons, :hover on the cards, :first-child and :last-child in the footer, and ::placeholder for the form hints.
- Media queries: added a tablet breakpoint (1024px) and a small phone breakpoint (480px) next to the mobile breakpoint (768px).
- Responsive layout: on mobile and small phones the cards stack in one column, the forms use more of the width, and the buttons become full width on small phones.
- Responsive typography: the heading and paragraph sizes change at the tablet, mobile and small phone sizes.
- Responsive navigation: on mobile the menu links wrap and show as buttons with padding and a light background. On small phones they sit two in a row.
- Responsive images: all images have max-width 100%. The hero picture height changes at each breakpoint (320px, 250px and 200px), and the card pictures keep object-fit: cover.
- GitHub commits: the work is saved in several separate commits, and each message says what was changed.
- README: rewrote the README with links, tools, SEO, security, this changelog and a full reference list.
- References: rewrote the reference list in Harvard style with the web address and the date each page was opened.

### Part 3 – JavaScript, SEO and Deployment (27 October to 1 November 2026)

- enquiry.html and js/enquiry.js (new): the form has full name, email, phone number, enquiry type, number of people, date, a preferred contact method (radio buttons), a message and a consent checkbox. The script checks every field and shows a red border and a message under each wrong field, and the message disappears when the visitor starts typing. When the form is correct, the page shows a response: a general enquiry gets a reply within one working day, and a custom cake (R40 per person, 3 days notice) or catering order (R85 per person, 7 days notice) gets the availability for the date and an estimated cost.
- contact.html and js/contact.js (new): the form has full name, email, an optional phone number, the type of message and the message. The script checks the fields, puts the details into an email addressed to info@sunrisebakery.co.za, shows the email on the page and opens the visitor's email app. A button opens the email again.
- about.html and js/gallery.js (new): added a gallery of five pictures. A click opens a picture in a lightbox with next and previous buttons, and it closes with the X button or a click on the dark area.
- enquiry.html and js/accordion.js (new): added a FAQ accordion with four questions. One answer is open at a time, and the answers fade in.
- contact.html and js/map.js (new): added a Leaflet and OpenStreetMap map with three markers and popups, and three buttons that move the map to each place.
- product.html and js/products.js (new): the product list is built by JavaScript from an array of 12 products. Added a search box, a category filter and a sort option (name, price low to high, price high to low), a result count, and a message when nothing matches.
- js/script.js: this file was empty in Part 1. It now underlines the menu link of the current page and adds a line to the footer that says whether the bakery is open now.
- SEO: added a title tag, meta description and meta keywords to all five pages, renamed the five pictures with descriptive names, wrote alt text for each, added lazy loading to the pictures below the top of the page, and added robots.txt and sitemap.xml.
- css/style.css: added the styles for the form errors, gallery and lightbox, product search and cards, accordion, map, current menu link and open status line, with smaller layouts for phones.
- Rewrote js/gallery.js, js/accordion.js, js/products.js, js/enquiry.js and js/contact.js in a simpler style that is closer to the class examples. The features are the same, except that the lightbox no longer closes with the Esc key or moves with the arrow keys.
- Published the website with GitHub Pages at https://cebolenkosi325.github.io/Buthelezi_ST10478338_WEDE5020_POE/

## 17. References

The following sources were used for learning and development.

### Academic References

- The Independent Institute of Education (The IIE) (2026) *WEDE5020 Module Manual*. Internal student learning material.
- The Independent Institute of Education (The IIE) (2026) *WEDE5020 JavaScript Form Validation*. Class slides.
- The Independent Institute of Education (The IIE) (2026) *WEDE5020 JavaScript Conditional Statements, Arrays and Functions*. Class slides.

### HTML, CSS and JavaScript References

- W3Schools (n.d.) *CSS Reference*. Available at: https://www.w3schools.com/cssref/index.php (Accessed: 1 November 2026).
- W3Schools (n.d.) *CSS Colors*. Available at: https://www.w3schools.com/colors/default.asp (Accessed: 1 November 2026).
- W3Schools (n.d.) *CSS Flexbox*. Available at: https://www.w3schools.com/css/css3_flexbox.asp (Accessed: 1 November 2026).
- W3Schools (n.d.) *CSS Media Queries*. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp (Accessed: 1 November 2026).
- W3Schools (n.d.) *JavaScript HTML DOM EventListener*. Available at: https://www.w3schools.com/js/js_htmldom_eventlistener.asp (Accessed: 1 November 2026).
- W3Schools (n.d.) *JavaScript Array Sort*. Available at: https://www.w3schools.com/js/js_array_sort.asp (Accessed: 1 November 2026).
- W3Schools (n.d.) *How To - Accordion*. Available at: https://www.w3schools.com/howto/howto_js_accordion.asp (Accessed: 1 November 2026).
- W3Schools (n.d.) *How To - Lightbox*. Available at: https://www.w3schools.com/howto/howto_js_lightbox.asp (Accessed: 1 November 2026).

### Map References

- Leaflet (n.d.) *Leaflet Quick Start Guide*. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 1 November 2026).
- OpenStreetMap contributors (n.d.) *Copyright and License*. Available at: https://www.openstreetmap.org/copyright (Accessed: 1 November 2026).

### Image References

- Google Images (n.d.) Photographs of bread, a chocolate birthday cake, pastries and bakers at work (the five pictures in the images folder, downloaded using Google Images). Available at: https://images.google.com (Accessed: 12 August 2026). The pictures are used only for this student project.