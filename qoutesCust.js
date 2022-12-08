const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Judy Dench",
    position: "Marketing",
    photo: "./woman2.jfif",
    text: "The spot to go to when needing a vehicle perfectly suited to your needs.",
  },
  {
    name: "June Mayflower",
    position: "Software Engineer",
    photo: "./woman1.jfif",
    text: "Hands down best car dealership in the south-west area!",
  },
  {
    name: "Iida Niskanen",
    position: "Owner of Minning Inc.",
    photo: "./man1.jfif",
    text: "Best customer service of any industry!!",
  },
  {
    name: "James Truglio",
    position: "Professional Busboy",
    photo: "./man2.jfif",
    text: "They go above and beyond to make sure you are getting the best bang for your buck!",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
