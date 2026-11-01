# Sunrise Bakery Website

## Student Information
- Name: Buthelezi Cebolenkosi
- Student number: ST10478338
- Module: Web Development (Introduction), WEDE5020
- Institution: Rosebank College / The Independent Institute of Education (IIE)

## Links
- GitHub repository: https://github.com/Cebolenkosi325/Buthelezi_ST10478338_WEDE5020_POE
- Live website: [paste your live link here]

## Project Overview
Sunrise Bakery is a fictional family bakery in Centurion, Gauteng. I built this website for the WEDE5020 Portfolio of Evidence in three parts. Part 1 is the HTML structure, Part 2 is the CSS styling and responsive design, and Part 3 adds JavaScript, SEO and deployment.

## Website Goals and Objectives
- Increase local brand awareness and attract new customers.
- Generate online enquiries and orders for custom cakes and catering.
- Showcase the daily menu and seasonal specials.

## Key Features
- Home page with a hero picture, three product cards and a short About section.
- About page with the mission and vision, and a picture gallery that opens in a lightbox.
- Products page where the product list is loaded with JavaScript. Visitors can search, filter by category and sort by name or price.
- Enquiry page with a validated form. After a correct submission the page shows an estimated cost and whether the date can be met. The page also has a FAQ accordion.
- Contact page with a validated form that puts the message into an email for the bakery, and a map with three locations.

## Sitemap
```
Home (index.html)
- About (about.html)
- Products (product.html)
- Enquiry (enquiry.html)
- Contact (contact.html)
```

## File Structure
```
index.html
about.html
product.html
enquiry.html
contact.html
robots.txt
sitemap.xml
README.md
css/style.css
js/gallery.js
js/accordion.js
js/products.js
js/enquiry.js
js/contact.js
js/map.js
js/script.js
images/ (five pictures)
screenshots/ (desktop, tablet and mobile)
```

## Tools Used
Visual Studio Code, Git and GitHub, the Leaflet 1.9.4 map library and OpenStreetMap map tiles.

## How to Run
Open index.html in a web browser, or use the live link above. The map on the Contact page needs an internet connection.

## SEO
Every page has its own title tag, meta description and meta keywords. The pictures have descriptive file names and alt text, and the pictures below the top of the page use lazy loading. The site has a robots.txt file and a sitemap.xml file. The titles and descriptions mention Centurion for local search.

## Security
The forms are checked with JavaScript before anything is processed. Text that a visitor types is shown on the page as plain text and never as HTML, so it cannot run as code. The map library loads over https. The website does not store any visitor data. The JavaScript checks improve the visitor's experience, but a real website would also check the data on a server.

## Responsive Design and Testing
The CSS has breakpoints for tablets (1024px), mobile phones (768px) and small phones (480px). I tested the pages in [write the browsers you really used] and with the browser developer tools at different screen sizes.

![Desktop view](screenshots/desktop.png)
![Tablet view](screenshots/tablet.png)
![Mobile view](screenshots/mobile.png)


## Changelog

### Part 1 (HTML)
- Created the five pages (index, about, product, enquiry and contact) with a header, navigation, main section and footer on every page.
- Set up the css, js and images folders and pushed the project to GitHub.
- Wrote the first README with the sitemap and the project goals.

### Part 2 (CSS)
- Created the external stylesheet css/style.css and linked it to all five pages.
- Added the base styles: a reset, the font, the colours and the line height.
- Styled the header, navigation, hero section, product cards, About section, forms and footer, using flexbox for the layouts.
- Added hover effects on the menu links and buttons.
- Added a mobile breakpoint (768px) for the header, menu, cards and forms.

### Changes from Part 2 feedback [add the date you made these edits]
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
  - Added a grey colour for the placeholder text in form fields.
- Pseudo-classes (used but insufficiently): added :focus on the menu links, buttons and form fields, :active on the menu links and buttons, :hover on the cards, :first-child on the first heading of a section and the first footer line, :last-child on the last footer line, and ::placeholder for the form hints.
- Media queries: added a tablet breakpoint (1024px) and a small phone breakpoint (480px) next to the mobile breakpoint (768px).
- Responsive layout: on mobile and small phones the cards stack in one column, the forms use more of the width with less padding, and the buttons become full width on small phones.
- Responsive typography: the heading and paragraph sizes now change at the tablet, mobile and small phone sizes.
- Responsive navigation: on mobile the menu links wrap onto more lines and show as buttons with padding and a light background. On small phones they sit two in a row.
- Responsive images: all images now have max-width 100%. The hero picture height changes at each breakpoint (320px, 250px and 200px), and the card pictures keep object-fit: cover.
- Fixed the hero picture on the home page. Its path used a backslash (images\picture 1 xitm.jpg), so it did not load on the live Part 2 site. It now uses a forward slash and the new file name.
- GitHub commits: the work is saved in several separate commits, and each message says what was changed.
- README: rewrote the README with links, tools, SEO, security, responsive testing with screenshots, this changelog and a full reference list.
- Changelog: this changelog now lists every file that was changed.
- References: rewrote the reference list in Harvard style with the web address and the date each page was opened, and added the class slides, Leaflet and OpenStreetMap.

### Part 3 (JavaScript, SEO and deployment) [add the date you made these edits]

Forms
- enquiry.html: rebuilt the form with ids on every field and a message area under each one. The form now has full name, email, phone number, enquiry type, number of people, date needed, a preferred contact method (radio buttons), a message and a consent checkbox. Added novalidate so the JavaScript shows the error messages.
- js/enquiry.js (new): checks every field when the form is sent. The name needs at least 3 characters. The email is checked with checkValidity. The phone number must be 10 digits starting with 0. Number of people (1 to 500, whole number) and date (not in the past) are only needed for cakes and catering. The message needs 10 to 500 characters and the checkbox must be ticked. A wrong field gets a red border and a message, and the message disappears when the visitor starts typing in that field.
- js/enquiry.js: when the form is correct, the page shows a response. A general enquiry gets a reply within one working day. A custom cake (R40 per person, 3 days notice) or catering order (R85 per person, 7 days notice) gets the availability for the chosen date and the estimated cost, or a message that more notice is needed.
- contact.html: rebuilt the form with full name, email, optional phone number, type of message (general question, feedback, compliment or complaint) and message, with a message area under each field.
- js/contact.js (new): checks the fields in the same way. When the form is correct it puts the details into an email with a subject and body, shows the email on the page, and opens the visitor's email app addressed to info@sunrisebakery.co.za. A button on the page opens the email again.
- The text that visitors type is added to the page as plain text, so it is never run as HTML.

Interactive features
- about.html and js/gallery.js (new): added a gallery of five pictures. Clicking a picture opens it larger in a lightbox with the description under it. The next and previous buttons go through the pictures and start again at the end. The lightbox closes with the X button or with a click on the dark area.
- enquiry.html and js/accordion.js (new): added a FAQ accordion with four questions about notice, cost, allergies and opening hours. Clicking a question opens its answer and closes the one that was open. Clicking an open question closes it. The answers fade in, and each question has a plus or minus sign made with CSS.
- contact.html and js/map.js (new): added an interactive map using Leaflet 1.9.4 and OpenStreetMap. It has three locations (the main shop in Centurion, the Irene shop and a Saturday market stall), each with a marker and a popup. Three buttons under the map move the map to a location and open its popup.

Dynamic content and search
- product.html and js/products.js (new): the three typed cards were replaced by a product list that JavaScript builds from an array of 12 products. Each card shows a picture, category, name, description, price and an Enquire link. Added a search box (it looks in the name, category and description and ignores capital letters), a category filter, and a sort option (name, price low to high, price high to low). The page shows how many products were found, and a message when nothing matches. Added a message for visitors with JavaScript turned off.

SEO
- Added a title tag, a meta description and meta keywords to all five pages. The titles and descriptions are different on every page and mention Centurion.
- Renamed the five pictures to descriptive names without spaces and wrote a new alt text for each: picture 1 xitm.jpg is now bread-basket-baguettes.jpg, picture 2 xitm.jpg is chocolate-birthday-cake.jpg, picture 3 xitm.jpg is assorted-pastries-box.jpg, picture 4 xitm.jpg is baker-fresh-bread-oven.jpg and picture 5 xitm.jpg is bread-loaves-oven-peel.jpg. Updated every page and script that uses them.
- Added loading="lazy" to the pictures that are below the top of the page.
- Added robots.txt and sitemap.xml in the main folder.

CSS (css/style.css)
- Added styles for the form errors, the red border on a wrong field, the radio buttons, the checkbox and the response box.
- Added styles for the gallery and the lightbox, the product search tools and cards, the FAQ accordion and the map with its buttons, including smaller layouts for phones.

Rewrite of the scripts
- I rewrote js/gallery.js, js/accordion.js, js/products.js, js/enquiry.js and js/contact.js in a simpler style that is closer to the examples from class (getElementById, if statements, for loops and innerHTML). The first versions used a regular expression for the phone check, createElement and the filter method. The features work in the same way, except that the lightbox no longer closes with the Esc key or moves with the arrow keys.

Deployment
- Deployed the website at [your live link] using [GitHub Pages or Netlify].


## References
- The Independent Institute of Education (The IIE) (2026) WEDE5020 Module Manual. Internal student material.
- The Independent Institute of Education (The IIE) (2026) WEDE5020 JavaScript Form Validation. Class slides. Rosebank International.
- The Independent Institute of Education (The IIE) (2026) WEDE5020 JavaScript Conditional Statements, Arrays and Functions. Class slides. Rosebank International.
- W3Schools (n.d.) CSS Reference. Available at: https://www.w3schools.com/cssref/index.php (Accessed: 30 October 2026).
- W3Schools (n.d.) CSS Colors. Available at: https://www.w3schools.com/colors/default.asp (Accessed: 30 October 2026).
- W3Schools (n.d.) CSS Flexbox. Available at: https://www.w3schools.com/css/css3_flexbox.asp (Accessed: 30 October 2026).
- W3Schools (n.d.) CSS Media Queries. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp (Accessed: 30 October 2026).
- W3Schools (n.d.) JavaScript HTML DOM EventListener. Available at: https://www.w3schools.com/js/js_htmldom_eventlistener.asp (Accessed: 30 October 2026).
- W3Schools (n.d.) JavaScript Array Sort. Available at: https://www.w3schools.com/js/js_array_sort.asp (Accessed: 30 October 2026).
- W3Schools (n.d.) How TO - Accordion. Available at: https://www.w3schools.com/howto/howto_js_accordion.asp (Accessed: 30 October 2026).
- W3Schools (n.d.) How TO - Lightbox. Available at: https://www.w3schools.com/howto/howto_js_lightbox.asp (Accessed: 30 October 2026).
- Leaflet (n.d.) Leaflet Quick Start Guide. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 30 October 2026).
- OpenStreetMap contributors (n.d.) Copyright and License. Available at: https://www.openstreetmap.org/copyright (Accessed: 30 October 2026).
- Images: [where you got the five photos from: the website name, the address and the date you opened it]
