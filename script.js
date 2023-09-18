
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
 
    function myFunction1() {
      var x = document.getElementById("myDIV");
      var y = document.getElementById("myDIV1122");
      x.style.display = "block";
      y.style.display = "none"
    }
    function myFunction2() {
      var x = document.getElementById("myDIV");
      var y = document.getElementById("myDIV1122");
      y.style.display = "block";
      x.style.display = "none"
    }
  
    function myFunctionnn() {
      var x = document.getElementById("myDIV1");
      var y = document.getElementById("myDIV2");
      var z = document.getElementById("myDIV3");
      x.style.display = "block";
      y.style.display = "none"
      z.style.display = "none";



      // if (x.style.display === "none") {
      //   x.style.display = "block";
      // } else {
      //   x.style.display = "none";
      // }

      // var x = document.getElementById("myDIV2");
      // x.style.display = "none"

      // var x = document.getElementById("myDIV3");
      // x.style.display = "none"
    }
  
    function myFunctionnnn() {


      var x = document.getElementById("myDIV1");
      var y = document.getElementById("myDIV2");
      var z = document.getElementById("myDIV3");
      x.style.display = "none";
      y.style.display = "block"
      z.style.display = "none";



      // var x = document.getElementById("myDIV2");
      // if (x.style.display === "none") {
      //   x.style.display = "block";
      // } else {
      //   x.style.display = "none";
      // }

      // var x = document.getElementById("myDIV3");
      // x.style.display = "none"

      // var x = document.getElementById("myDIV1");
      // x.style.display = "none"
    }
  
    function myFunctionnnnn() {

      var x = document.getElementById("myDIV1");
      var y = document.getElementById("myDIV2");
      var z = document.getElementById("myDIV3");
      x.style.display = "none";
      y.style.display = "none"
      z.style.display = "block";




      // var x = document.getElementById("myDIV3");
      // if (x.style.display === "none") {
      //   x.style.display = "block";
      // } else {
      //   x.style.display = "none";
      // }

      // var x = document.getElementById("myDIV2");
      // x.style.display = "none"

      // var x = document.getElementById("myDIV1");
      // x.style.display = "none"
    }
  
    function myFunctiono(x) {
      x.classList.toggle("fa-rotate-180");
    }
 
    $(document).ready(function () {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    });

    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 

    // JavaScript to handle button click events
    $(document).ready(function() {
      $("#button3").click(function() {
          $("#button3").addClass("active-button");
          $("#button2").removeClass("active-button");
      });

      $("#button2").click(function() {
          $("#button2").addClass("active-button");
          $("#button3").removeClass("active-button");
      });
  });