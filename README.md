# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge Description

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### Steps I followed

- Build the UI using HTML & CSS
- to hide / show answers, I played with the max-height CSS property
- Start working with JavaScript as follows:

  1. storing the HTML elements that will be worked on in variables
  2. creating a flag called isOpened that carries the current state of the question
  3. storing the active question in a variable, so this question will be changed as the user use the keyboard navigation
  4. making the 1st question focused & opened by default
  5. looping over the questions, so I can apply the click & keyup events
  6. in the click event,

     1. I stored the current status of the question by checking if it had the opened class or not
     2. the question index is stored, to be used in the keyboard navigation, so if the user clicks on any question, he can show / hide its content using the keyboard
     3. then I used the forEach method to loop over the questions and close them except the clicked one will stay opened

  7. in the keyup event,
     1. the focused question is styled differenetly by applying border
     2. I used the enter key to show / hide the question's content. this is done by checking the value of the isOpened flag which checks if the opened class is present or not
     3. the user can navigate between questions using the arrowUp / arrowDown. this is done by changing the value of the qestion index.
