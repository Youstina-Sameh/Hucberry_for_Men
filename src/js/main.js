document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slider");
  let buttons = document.querySelectorAll(".slider-button");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
    buttons.forEach((btn, i) => {
      btn.classList.toggle("bg-white", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 8000);
  }

  function resetSlider(index) {
    clearInterval(slideInterval);
    showSlide(index);
    startSlider();
  }

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => resetSlider(index));
  });

  showSlide(currentSlide);
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

  updateCarousel();
  updateShoesCarousel();
});




//iiiiiiiiiiiiiiiiiiiiiiiiiiii  
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