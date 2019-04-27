function onReady() {
     const addToDoForm = document.getElementById('addToDoForm');
     const newToDoText = document.getElementById('newToDoText');
     const toDoList = document.getElementById('toDoList');
     const deleteButton = document.getElementById("deleteButton");
     addToDoForm.addEventListener('submit', () => {
event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
   toDoList.appendChild(newLi);

   //empty the input
   newToDoText.value = '';
       });
     }

     window.onload = function() {
        onReady();
      }



deleteButton.addEventListener("click", event => {
  // START EVENT HANDLER

           /*
            * create an array of references to all checked checkboxes on the page and set it variablee named `chxItems`
              * CSS selector for all checked checkedboxes is input[type=checkbox]:checked (i.e. all HTML elements of the following syntax pattern: <input type="checkbox"> with their `checked` atribute set to true... <input type="checkbox" checked="true">)
           */
          const chxItems = document.querySelectorAll(
            "input[type=checkbox]:checked"
          );
            // so now chxItems is an array of HTML elements (specifically checked checkboxes) that you can do 'stuff' to via javascript
              // in this case, for each checked checkbox, we're going to hide it's parent <li> element

          /*
            use for loop to loop through all checked checkboxes on page (at time of 'all done' button click event) and for each one:
              1. select the checkbox's parent <li> element and temporarily set it to the variable named thisChxItem
              2. set the LI's CSS property, 'dispaly' to 'none' (which will hide it on the HTML page in the browser)
          */
          for (let i = 0; i < chxItems.length; i++) {
            let thisChxItem = chxItems[i].parentNode; // parentNode property select's an object's immediate parent object - in this case chxItems[i] references the current checked checkbox, thus chxItems[i].parentNode represents the <input type="checkbox">'s parent, which is the <li>
            thisChxItem.style.display = "none";
          }
          // END EVENT HANDLER
        });
