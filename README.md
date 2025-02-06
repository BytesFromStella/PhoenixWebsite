# HUB Phønix Website

HUB Phønix is a competence center for sustainability and circular economy in Fredrikstad, Norway. Established in June 2024, the organization aims to serve as a hub for innovation, collaboration, and knowledge-sharing among local businesses, educational institutions, governmental bodies, and individuals.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Setup Instructions](#setup-instructions)
4. [File Structure](#file-structure)
5. [Navigation and Routing](#navigation-and-routing)
6. [Design and Styling](#design-and-styling)
7. [Security Considerations](#security-considerations)
8. [Development Process](#development-process)
9. [Task Overview and Requirements](#task-overview-and-requirements)
10. [Contributors](#contributors)

---

## Project Overview

This website serves as an interactive platform for HUB Phønix, providing information about sustainability initiatives, booking services, educational content, and community engagement opportunities. The project follows the Model-View-Controller (MVC) pattern for maintainability and scalability.

### Technologies Used:

- HTML5, CSS3, JavaScript (ES6)
- MVC architecture
- Responsive design principles
- JavaScript-based routing

---

## Features

- **Dynamic Routing:** Content updates dynamically without full-page reloads.
- **Booking System:** Integrated scheduling platform for meetings and events.
- **Resource Hub:** Collection of sustainability resources, reports, and case studies.
- **News & Updates:** Section for upcoming events and announcements.
- **Facebook Feed Integration:** Live updates from the HUB Phønix community.
- **Partner Carousel:** Showcase of strategic collaborations.

---

## Setup Instructions

### 1. Clone/download the Repository
The repository site can be found here: https://github.com/BytesFromStella/PhoenixWebsite
Click on the green ``<> Code`` button and select ``Download zip`` to download the entire folder
**OR**
```sh
git clone https://github.com/BytesFromStella/PhoenixWebsite
cd HUB-Phonix
```

### 2. Install Dependencies

Ensure you have a local web server running, such as Live Server for VS Code.

### 3. Run the Project

To run the website locally, open `index.html` in your browser or use a simple HTTP server:

```sh
npx serve .
```

---

## File Structure

```
HUB-Phonix/
├── index.html          # Main entry point
├── styles/             # CSS stylesheets
│   ├── wave.css
│   ├── styles.css
│   ├── hjem.css
│   ├── extras.css
│   ├── carousel.css
├── js/                 # JavaScript logic
│   ├── Main/
│   │   ├── controller.js
│   │   ├── router.js
│   ├── Pages/
│   │   ├── homePageView.js
│   │   ├── aboutPageView.js
│   │   ├── servicesPageView.js
│   │   ├── bookingPageView.js
│   │   ├── resourcePageView.js
├── assets/             # Images, logos, and multimedia
│   ├── logo-blue.png
│   ├── partners/
│   │   ├── partner1.png
│   │   ├── partner2.png
│   │   ├── ...
├── README.md           # Documentation
```

---

## Navigation and Routing

- Routing is handled dynamically in `router.js`.
- The `<main>` tag serves as the primary content container for loading different views.
- Pages are structured as modular JavaScript files (`homePageView.js`, `aboutPageView.js`, etc.).

---

## Design and Styling

The website adheres to a **blue and white sustainability-focused palette**:

### Primary Colors:

- **Blue:** `#0A97D9` (PMS 7461C)
- **Marine Blue:** `#19486A` (PMS 294C)
- **Light Blue:** `#26BDE2` (PMS 638C)

### Secondary Colors:

- **Light Gray:** `#F1F1F1` (PMS Cool Gray 1C)
- **Black:** `#000000`

### Effects:

- **Wave Animation:** Creates a smooth water motion background (`wave.css`).
- **Hover Effects:** Interactive buttons with subtle lighting animations.

---

## Security Considerations

- **Input Validation:** Sanitization of all user inputs.
- **Cross-Origin Resource Sharing (CORS):** Secure iframe embedding for the booking system.
- **HTTPS Enforcement:** The project is designed for deployment under HTTPS.
- **Minimal External Dependencies:** Reducing security risks by avoiding unnecessary libraries.

---

## Development Process

This is a **private repository** for an internal group project. The development follows an agile methodology with regular meetings, talks and a good flow with communication throughout the production process.

### Workflow and team contribution+strengths

1. Assign tasks based on team strengths
2. Develop features in separate branches when necessary. This was a small project, so using a single branch was an acceptable use of the repository. If we had major features being implemented independently, we would use multiple branches where Stella would commit merging and integration.
3. Conduct code reviews before merging into `main`. 
4. Deploy updates in staging before production release.

---

## Task Overview and Requirements

### **Scope**
- **Frontend only**: The project focuses solely on frontend development.
- **Prototype**: A fully functional prototype should be created.
- **Planning**: Utilize Trello or a similar tool for effective planning.
- **Wireframing**: Sketches should be created to visualize the layout before implementation.

### **Timeframe**
- The project spans at least two weeks, with possible extensions if needed.
- No strict time limitations—work can be done both during the course and at home.

### **Key Considerations**
- **Task Delegation:** Clear assignment of responsibilities among team members.
- **Communication:** Regular updates and team discussions.
- **Proper HTML Usage:** Use correct semantic HTML elements and `ALT` attributes for images.
- **Responsive Design:** The application should function seamlessly across mobile, tablet, and desktop devices.

---

## Contributors

### Work Delegation, team strengths and key contributions:

- Kristoffer is 
- Kamila is good at functional design and external integration (iframes). She contributed with making the  for example.
- Joakim created the general project structure using the MVC-tactic and contributed to the boilerplate construction.
- Therese 

- **Joakim:** 
Worked on `homePageView.js`, responsible for homepage content and functionality. 
Key contribution was pitching ideas for the general project structure, and applying / setting up the MVC development strategy.
- **Kamila:** 
Responsible for contributing to the boilerplate, base HTML structure and external integration. 
Key contributions was the banner wheel and facebook feed
- **Kristoffer:** Styling, animations, and aesthetic adjustments. Has a good sense of pleseant web design. Key contribution was the wave-animation and logo suggestion (was overwritten due to demands from clients).
- **Therese:** 
`aboutPageView.js`, content writing and layout improvements. 
Key contribution
- **Stella:** 
Overall project audit and management, content writing for partnerships, and documentation. 
Key contribution was the README documenting the project and contributing with support whenever issues arised.

---

## Contact

For internal use only. Reach out to team members for project-related discussions. 📍 **Address:** Phønixbrygga 3, 1606 Fredrikstad\
📧 **Email:** [support@hubphonix.no](mailto:kontakt@hubphonix.no)\
🌐 **Website:** [hubphonix.no](https://hubphonix.no)

