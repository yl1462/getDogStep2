'use strict';

function watchForm() {
  $('form').submit(function(event) {
    event.preventDefault();
    console.log("submit");
    let number = $('.dogNum').val();
    console.log(number);
    getDogImg(number);
  })
}

function getDogImg(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
  .then(res => res.json())
  .then(imgResult => { 
    displayImg(imgResult)
  })
  .catch(error => console.log(error))
}


//app No.2 adding display image function
function displayImg(imgResult) {
  console.log(imgResult.message)
  let html = '';
  imgResult = imgResult.message;
  for (let i = 0; i < imgResult.length; i++) {
    console.log(imgResult[i])
    html+=`<img src="${imgResult[i]}">`
  }
  $("section").html(html)
}

$(
  watchForm()
)