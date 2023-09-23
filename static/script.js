document.addEventListener("DOMContentLoaded", function () {
    const textElement1 = document.getElementById("fadeInHeading");
    const textElement2 = document.getElementById("fadeInText");
    const textElement3 = document.getElementById("fadeInLinks");
    var element1 = document.getElementById("element");
    
    element1.style.marginLeft = "0"; // Slide in by setting margin-left to 0
  
    // Function to fade in an element
    const fadeIn = (element) => {
      let opacity = 0;
      const interval = setInterval(function () {
        if (opacity < 1) {
          opacity += 0.1;
          element.style.opacity = opacity;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust the time interval for smoother or faster fading
    };
  
    // Fade in the first element
    fadeIn(textElement1);
  
    // Wait for 1 second and then fade in the second element
    setTimeout(function () {
      fadeIn(textElement2);
    }, 250); // 1000 milliseconds = 1 second

    setTimeout(function () {
        fadeIn(textElement3);
      }, 250); // 1000 milliseconds = 1 second
  });
  




