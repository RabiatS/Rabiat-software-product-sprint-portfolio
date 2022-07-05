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
  let i=1;
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

async function showList() {
    const responseFromServer2 = await fetch('/list');
    const myCarList = await responseFromServer2.json();

    const myCarList2 = myCarList[Math.floor(Math.random() * myCarList.length)];

    const listContainer = document.getElementById('list-container');
    listContainer.innerText = myCarList2;
   
    
     
  }
  async function showString() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.text();

   
    const stringContainer = document.getElementById('string-container');
    stringContainer.innerText = textFromResponse;
     //console.log(myCarList);
   
     
  }
  async function showMessages() {
    const responseFromServer2 = await fetch('/Contact-Form');
    const message = await responseFromServer2.json();
    const listContainer = document.getElementById('message-container');
    listContainer.innerText = message;
   
    
     
  }

//   function textToSpeech() {
//     const responseFromServer2 = await fetch('/text-speech');
//     const message = await responseFromServer2.formData();
//     const speechContainer = document.getElementById('speech-container');
//     speechContainer.innerText = message;
    

// }
  // js for translation under projects
  function requestTranslation() {
    const text = document.getElementById('text0').value;
    const languageCode = document.getElementById('languageP').value;

    const resultContainer = document.getElementById('result');
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('text0', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
      method: 'POST',
      body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
      resultContainer.innerText = translatedMessage;
    });
  }
 // speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));
async function textToSpeech() {

     const responseFromServer3 = await fetch('/text-speech');
    const message = await responseFromServer3.mpeg();
    const textss = document.getElementById('textss').value;
    const messageContainer = document.getElementById('speech-container');
    messageContainer.onclick= message
//     const params = new URLSearchParams();
//  params.append('textss', text);
  
 }
  
  
// end of food slide js
/* */


//fetch()
