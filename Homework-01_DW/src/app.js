// Creating and adding main
var main = document.createElement("main");
document.body.appendChild(main);

// Creating section
var section = document.createElement("section");
main.appendChild(section);

// Creating header
var h1 = document.createElement("h1");
h1.textContent = "Homework 01"
section.appendChild(h1);

// Creating the main text paragraph 1
var p1 = document.createElement("p");
p1.textContent = "For this homework, I recreated the HTML page using JavaScript and the DOM API. This means that the HTML has a blank body and a minimal head. Once the page loaded, JavaScript was used to recreate all the elements from the original page."
section.appendChild(p1)

// Creating the second paragraph
var p2 = document.createElement("p");
p2.textContent = "I added the several different types of elements that made this fun, and a little bit tricky. Some elements were simple, like these " 
var code = document.createElement("code")
code.textContent = "<p>"
p2.appendChild(code);

// Making the text after the small code element that gave <p> a change in font:
    // This threw me for a loop for a while, I really couldn't figure out how to get it to work 
    // without using innerHTML, and that was all I found when I googled it.
    // I found .after by just scrolling through the available properties/methods of the p2 attribute, 
    // which didn't work, then tried using it on my code attribute, which did work. 
    // Hooray! That was tricky.
code.after(" tags. Others required extra attributes or mixing text nodes with element nodes.")
section.appendChild(p2);

// Creating the aside section
var aside = document.createElement("aside");
document.body.appendChild(aside)

// Creating the image and setting the source attribute/property
var img = document.createElement('img');
img.setAttribute("src", "assets/mario.png");
aside.appendChild(img);

// Making the blockquote
var blockquote = document.createElement("blockquote");
blockquote.innerText = `Mario says "Wahoo!" to homework`;
aside.appendChild(blockquote);

// Making the audio element, which needed a couple extra attributes.
var audio = document.createElement("audio");
audio.setAttribute("controls", "true");
audio.setAttribute("autoplay", "false");
audio.setAttribute("src", "assets/Super Mario Bros. medley.mp3");
aside.appendChild(audio);

// The End