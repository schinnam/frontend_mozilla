var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World'

/*
Everything in between is a comment.
*/

// This is a comment

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/React.png'){
        myImage.setAttribute('src','images/Everest.jpg');
    } else if(mySrc === 'images/Everest.jpg'){
        myImage.setAttribute = ('src','images/React.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }