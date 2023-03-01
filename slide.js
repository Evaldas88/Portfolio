
//Slide SHOW
// FIRST SLIDES

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

// SECOND SLIDES

showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
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
// THIRD SLIDES

showSlides3(slideIndex);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("dot3");
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

// FOURTH SLIDES

showSlides4(slideIndex);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex = n);
}

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  let dots = document.getElementsByClassName("dot4");
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
 
// FIFTH SLIDES

showSlides5(slideIndex);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slideIndex = n);
}

function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides5");
  let dots = document.getElementsByClassName("dot5");
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


// Smooth slide

let projects = document.getElementsByClassName("btn-projects");
for (let i = 0, length = projects.length; i < length; i++) {
  projects[i].addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.getElementById("projects");
    target.scrollIntoView({   behavior: "smooth" });
  });
}


// More button function

const button = document.getElementById('more-btn');

button.addEventListener('click', function() {
  const moreProjects = document.getElementById('more');
  const btnText = document.getElementById("more-btn");
  if(moreProjects.style.display === "block"){
    moreProjects.style.display = "block";
    btnText.innerHTML = "Read more"; 
    moreProjects.style.display = "none";
         moreProjects.scrollIntoView({ behavior: "smooth" });
  }else {
    moreProjects.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreProjects.style.display = "block";
    moreProjects.scrollIntoView({ behavior: "smooth" });
  }
 
});

 