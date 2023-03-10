//Projects button
let project = document.getElementsByClassName("btn-project");
for (let i = 0, length = project.length; i < length; i++) {
  project[i].addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.getElementById("projects");
    target.scrollIntoView({ behavior: "smooth" });
  });
}

//About button
let about = document.getElementsByClassName("btn-about");
for (let i = 0, length = about.length; i < length; i++) {
  about[i].addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.getElementById("about");
    target.scrollIntoView({ behavior: "smooth" });
  });
}


//Contact button
let contact = document.getElementsByClassName("btn-contacts");
for (let i = 0, length = contact.length; i < length; i++) {
  contact[i].addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.getElementById("contacts");
    target.scrollIntoView({ behavior: "smooth" });
  });
}

//Arrow button slide up

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

//Sticky navbar

const nav = document.querySelector('#top');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);