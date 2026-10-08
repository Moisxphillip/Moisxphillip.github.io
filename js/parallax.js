const stars = document.querySelector(".stars");
const moon = document.querySelector(".moon");
// const trees = document.querySelector(".trees");

window.addEventListener("scroll", () =>
{

    const scroll = window.scrollY;

    stars.style.transform = `translateY(${scroll * 0.7}px)`;
    moon.style.transform = `translate(${scroll * 0.05}px, ${scroll * 0.5}px)`;
    // trees.style.transform = `translateY(${scroll * 0.8}px)`;
});