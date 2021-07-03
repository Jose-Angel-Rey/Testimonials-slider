"use strict";

// local testimonials data
const testimonials = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web developer",
    img: "./assets/susan.webp",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web designer",
    img: "./assets/anna.webp",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Pamela Jones",
    job: "Intern",
    img: "./assets/pamela.webp",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Karla anderson",
    job: "The boss",
    img: "./assets/karla.webp",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Testimonial items
const testimonialContent = document.querySelector(".testimonial__content");
const testimonialPhoto = document.querySelector(".testimonial__user-photo");
const testimonialName = document.querySelector(".testimonial__user-name");
const testimonialJob = document.querySelector(".testimonial__user-job");

// Buttons
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
console.log(testimonials.length);
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  nextBtn.addEventListener("click", () => {
    if (currentItem === testimonials.length - 1) {
      currentItem = 0;
      changeInfo(currentItem);
      console.log(currentItem);
    } else {
      currentItem++;
      changeInfo(currentItem);
      console.log(currentItem);
    }
  });
  prevBtn.addEventListener("click", () => {
    if (currentItem === 0) {
      currentItem = testimonials.length - 1;
      changeInfo(currentItem);
      console.log(currentItem);
    } else {
      currentItem--;
      changeInfo(currentItem);
      console.log(currentItem);
    }
  });
});

function changeInfo(item) {
  const testimonialReference = testimonials[item];
  testimonialContent.textContent = testimonialReference.text;
  testimonialPhoto.src = testimonialReference.img;
  testimonialName.textContent = testimonialReference.name;
  testimonialJob.textContent = testimonialReference.job;
}

// console.log(currentItem)
