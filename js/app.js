const navbarList = document.getElementById("navbar__list");
const sections= document.getElementsByClassName("landing__container");
const list= document.querySelector("ul");
const fragment= document.createDocumentFragment();
//for loop to set list
for (let i=1; i<= sections.length; i++) {
  const newLi = document.createElement('li');
  const linking = document.createElement('a');
  linking.textContent= (`section ${i} `);
  const allSections = document.querySelectorAll('section');
  //set link to all sections in the list
  linking.href = ("#section" + i);
  let anchor = linking.href;
// event listenetr move to section by clicking
  linking.addEventListener('click', function(event) {
    allSections.scrollIntoView({behavior:'smooth', block: 'center'});
    event.preventDefault();
}

);
//add list to fragment
fragment.appendChild(newLi);
//add link to list's item
newLi.appendChild(linking);
//add fragment to ul
list.appendChild(fragment);
};




/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
