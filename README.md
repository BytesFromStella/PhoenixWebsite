# PhoenixWebsite
For our group project week 5-7 in 2025

# Discussion
Desktop view would have a static menu navigation, along with the following chronologic order from top to bottom: Head, nav, main+facebook feed, footer
See file "readme-resources\home page.png" for an example

# Delegation (current)
- Joakim: ``homePageView.js`` id: main
- Kamila: Started working on boilerplate (general structure) of HTML.
- Kristoffer: Working on styling, animations, aestethic and design
- Therese: Writing the ``about.html`` content
- Stella: Audit progress and help out wherever needed. Write ``partners`` content

## Structure and construction
The tags like ``<main>`` contain the following:

- A header with the logo and the wave animation. 
- A nav bar with static link boxes (not <button>).
The header and the NAV-bar is attached as a static element on the top of the page.
- Main will contain the contents of the website. It is where we replace content when the user clicks on a link and the new "page" loads. Use the following syntax to point to the main HTML tag and HTML content: ```document.getElementsByTagName("main").innerHTML = "value"```
- Aside tag with the facebook feed. This will move above/below main when viewing the website on a mobile phone.
- Footer will contain certain links, copyright, and a "seperate" section above it with the newsletter signup.

## Responsive design and layout
How the webpage is displayed on each device.

### Desktop
This is our starting point. Some might argue you should design the website from the smallest device first, but this works for us. 
- General layout: 
The layout is displayed as a document with spacing on each side. 
- Header and nav-bar: 
Staticly attached to the top of the page. It will display all the links as seperate buttons. The buttons should have a distinct light-up animation when hovered over.
- Main, article and aside:
Displayed on the middle of the page. The main tag will contain the view currently being displayed (main, about us, resources etc.). The article would be displayed alongside main if it's currently present.
Aside would be in the spacing on either side, or on the bottom of the website (either in footer or on a view like "about us").
- Footer: 
Displayed on the bottom of the website. It would contain a short "about us" text, a few important links, location and address for the organization, phone number, email and buttons for social media.
The bottom would also have a copyright. 

## Aestethic and styling
- A background animation with slow water waves. 
We are following a provided color pallette for this assignment, and restyle all of these using ``:root`` in the core CSS-file

### Main color pallette
Blue: PMS 7461C (R10 G151 B217)
Marineblue: PMS 294C (R25 G72 B106)
Light blue: PMS 638C (R38 G189 B226)
### Secondary color pallette 
Lys grå: PMS Cool Gray 1C (R241 G241 B241)
Svart: R0 G0 B0

## MVC and folder structure
We are using the model view controller style for this project so subsequent versions of the website can easily expand and deploy. You just add another view to the project and you have another functioning page using the core CSS without modifications.

Index: acts as our boilerplate (template) for the page. All views will be displayed inside the main tag.

Folders:
- JS: contains all the javascript code with ALL the views and functionality
- JS/pages: contains the HTML for each view(page) for the project. HomePage view is the default.
- Styles: Contains the water wave animation and general layout of the page
