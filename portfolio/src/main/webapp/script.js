// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

//  js for food slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function addRandomGreeting() {
    const greetings =
        ['Rock🪨','Paper📜','Scissors✂️'];
  
    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  
    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
    
  }

//sevlet

async function showString() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.text();

   
    const dateContainer = document.getElementById('string-container');
    dateContainer.innerText = dateContainer;
     //console.log(myCarList);
   
     
  }
async function showList() {
    const responseFromServer2 = await fetch('/list');
    const textFromResponse2 = await responseFromServer2.json();

    const myCarList1 = myCarlist[Math.floor(Math.random() * myCarList.length)];

    const dateContainer2 = document.getElementById('list-container');
    dateContainer2.innerText = myCarList1;
     //console.log(myCarList);
    
     
  }
  
  
    
  
  
// end of food slide js
/* */


//fetch()
