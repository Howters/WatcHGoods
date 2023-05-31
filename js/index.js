document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(slideIndex) {
    let i;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(function() {
      showSlides(slideIndex);
    }, 5000);
    
  }
  
  
}

);
