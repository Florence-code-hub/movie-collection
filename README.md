# Movies Collection

A simple static movie collection site that renders movie cards from `data/movies.json` and displays them with a clean, responsive UI.



**Table of Contents**
- **Project Setup**
- **CLI Commands**
- **Git Workflow**
- **Feature List & Implementation Details**
- **Team Contributions**
- **Lessons Learned**


  
**Project Setup**
- Prerequisites: a modern browser (Chrome, Firefox, Edge) and Git.
- Clone the repository and open it locally.



Commands:
```bash
git clone https://github.com/Florence-code-hub/movie-collection.git
cd movie-collection
code .
```


- To view the site: open `index.html` in your browser (double-click or in a code editor like VScode, right click index.html file, and click on open with live server).

**CLI Commands (common workflow examples)**
```bash
# clone the repo
git clone <repo-url>
# change directory
cd movie-collection
# open in VS Code
code .
# create a new feature branch
git checkout -b feature/<name of feeature>
# fetch remote changes
git fetch
# pull latest changes
git pull
# push branch to remote
git push -u origin <name of branch>
# reset local changes (use with caution)
git reset --hard origin/main
# to add all files
git add .
#to commit files and commit message
git commit -m ""
```



**Git Workflow (how this project was developed)**
- Florence created the GitHub repository and pushed the initial structure.
- She initialized the project and added the basic files: `index.html`, `js/app.js`, `css/style.css`, and `data/movies.json`.
- Nanji, the repo collabrator worked on  `feature/card-styling`,`feature/responsive` and `feature/documentation`
  
- Feature work was done on branches (e.g., `feature/card-data`, `feature/card-rendering`, `feature/card-styling` `feature/responsive`, `feature/documentation` ) initially merged in development branch after each branch was approved and merged back to the main branch after review.




**Feature List & Implementation Details**
- Movie card rendering
  - Implemented in `js/app.js`: fetches `data/movies.json` and appends card markup into the DOM.
  - Each card includes an image, title, year, genre, description, and a "Watch Online" button.
- Responsive styling
  - Implemented in `css/style.css` using flexible layout, media queries, and modern techniques (`clamp()` for fluid typography and clamped image heights).
  - Header, footer, card headers (`h2`), and paragraph text scale across viewport sizes.
- Accessibility
  - Images include `alt` text (`Movie Poster`) for screen readers and fallback handling.




**Team Contributions**
- Florence
  - Created and populated `data/movies.json`.
  - Implemented the card rendering logic in `js/app.js`.
- Nanji
  - Implemented the visual design in `css/style.css`.
  - Added responsiveness and fluid typography improvements.
  - Created project documentation (this README).




**Lessons Learned from Collaboration**
- Clear Communication is key
- Work in small, focused branches to keep reviews simple and reduce merge conflicts.
- Agree on responsive units early (use `rem`, `clamp()`, and CSS variables for consistency).
- Keep data and rendering logic separate: JSON for data, JS for DOM rendering, CSS for presentation.
- Test across viewport widths early to catch layout regressions.
- Document workflows and common Git commands to help onboard contributors quickly.

