document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slider");
  let buttons = document.querySelectorAll(".slider-button");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Hide all slides and show only the current one
    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== index);
    });

    // Update all buttons - set active button to white, others to gray
    buttons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.remove("border-2", "border-white", "bg-transparent");
        btn.classList.add("bg-white");
      } else {
        btn.classList.remove("bg-white");
        btn.classList.add("border-2", "border-white", "bg-transparent");
      }
    });

    currentSlide = index;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function resetSlider(index) {
    clearInterval(slideInterval);
    showSlide(index);
    startSlider();
  }

  // Initialize: set first button as active
  showSlide(0);

  // Add click events to indicator buttons
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => resetSlider(index));
  });

  // Add click events to prev/next buttons
  document.getElementById("prev").addEventListener("click", function () {
    clearInterval(slideInterval);
    prevSlide();
    startSlider();
  });

  document.getElementById("next").addEventListener("click", function () {
    clearInterval(slideInterval);
    nextSlide();
    startSlider();
  });

  // Start automatic slideshow
  startSlider();
});
//# carousl 
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const track = document.getElementById("carousel-track");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const slides = track.children;
  const totalSlides = slides.length;
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === totalSlides - 1 ? "none" : "block";
  }
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  nextBtn.addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
  let shoes_currentIndex = 0;
  const shoes_track = document.getElementById("shoes-carousel-track");
  const shoes_prevBtn = document.getElementById("shoes-prev-btn");
  const shoes_nextBtn = document.getElementById("shoes-next-btn");
  const shoes_slides = shoes_track.children;
  const shoes_totalSlides = shoes_slides.length;
  function updateShoesCarousel() {
    shoes_track.style.transform = `translateX(-${shoes_currentIndex * 100}%)`;
    shoes_prevBtn.style.display = shoes_currentIndex === 0 ? "none" : "block";
    shoes_nextBtn.style.display = shoes_currentIndex === shoes_totalSlides - 1 ? "none" : "block";
  }
  shoes_prevBtn.addEventListener("click", function () {
    if (shoes_currentIndex > 0) {
      shoes_currentIndex--;
      updateShoesCarousel();
    }
  });
  shoes_nextBtn.addEventListener("click", function () {
    if (shoes_currentIndex < shoes_totalSlides - 1) {
      shoes_currentIndex++;
      updateShoesCarousel();
    }
  });



  //best seller carousel
  let bestSeller_currentIndex = 0;
  const bestSeller_track = document.getElementById("bestSeller-carousel-track");
  const bestSeller_prevBtn = document.getElementById("bestSeller-prev-btn");
  const bestSeller_nextBtn = document.getElementById("bestSeller-next-btn");
  const bestSeller_slides = bestSeller_track.children;
  const bestSeller_totalSlides = bestSeller_slides.length;
  function updatebestSellerCarousel() {
    bestSeller_track.style.transform = `translateX(-${bestSeller_currentIndex * 100}%)`;
    bestSeller_prevBtn.style.display = bestSeller_currentIndex === 0 ? "none" : "block";
    bestSeller_nextBtn.style.display = bestSeller_currentIndex === bestSeller_totalSlides - 1 ? "none" : "block";
  }
  bestSeller_prevBtn.addEventListener("click", function () {
    if (bestSeller_currentIndex > 0) {
      bestSeller_currentIndex--;
      updatebestSellerCarousel();
    }
  });
  bestSeller_nextBtn.addEventListener("click", function () {
    if (bestSeller_currentIndex < bestSeller_totalSlides - 1) {
      bestSeller_currentIndex++;
      updatebestSellerCarousel();
    }
  });



  //Fav Prand carousel
  let favPrand_currentIndex = 0;
  const favPrand_track = document.getElementById("favPrand-carousel-track");
  const favPrand_prevBtn = document.getElementById("favPrand-prev-btn");
  const favPrand_nextBtn = document.getElementById("favPrand-next-btn");
  const favPrand_slides = favPrand_track.children;
  const favPrand_totalSlides = favPrand_slides.length;
  function updatefavPrandCarousel() {
    favPrand_track.style.transform = `translateX(-${favPrand_currentIndex * 100}%)`;
    favPrand_prevBtn.style.display = favPrand_currentIndex === 0 ? "none" : "block";
    favPrand_nextBtn.style.display = favPrand_currentIndex === favPrand_totalSlides - 1 ? "none" : "block";
  }
  favPrand_prevBtn.addEventListener("click", function () {
    if (favPrand_currentIndex > 0) {
      favPrand_currentIndex--;
      updatefavPrandCarousel();
    }
  });
  favPrand_nextBtn.addEventListener("click", function () {
    if (favPrand_currentIndex < favPrand_totalSlides - 1) {
      favPrand_currentIndex++;
      updatefavPrandCarousel();
    }
  });
  updateCarousel();
  updateShoesCarousel();
  updatebestSellerCarousel();
  updatefavPrandCarousel();
});


//Toggle Save Icon 
function toggleSave(element) {
  element.classList.toggle('clicked');

  // Change between regular and solid heart
  if (element.classList.contains('clicked')) {
    element.classList.remove('fa-regular');
    element.classList.add('fa-solid');
  } else {
    element.classList.remove('fa-solid');
    element.classList.add('fa-regular');
  }
}

function changeJacketColor() {
  document.getElementById("blueJacket").setAttribute("src", "./src/imgs/jacket-removebg.png")
}

function backToblueJacket() {
  document.getElementById("blueJacket").setAttribute("src", "./src/imgs/jacket.png")
}


function changepantsColor() {
  document.getElementById("greenJacket").setAttribute("src", "./src/imgs/redpants.png")
}


function backToJacketColor() {
  document.getElementById("greenJacket").setAttribute("src", "./src/imgs/pants2.png")
}


function changepolColor() {
  document.getElementById("sleevesPol").setAttribute("src", "./src/imgs/bluepol.png")
}


function backTopolColor() {
  document.getElementById("sleevesPol").setAttribute("src", "./src/imgs/sleeves.png")
}