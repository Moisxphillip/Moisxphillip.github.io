/*
  JAVASCRIPT LEARNING NOTES
  -------------------------
  HTML = structure, CSS = appearance, JavaScript = behavior.
  This project only needs two behaviors: the current year and mobile navigation.
*/

/* Wait until the browser has parsed the HTML before touching its elements. */
document.addEventListener("DOMContentLoaded", () => 
{

    /* Find the footer element with id="year". */
    const year = document.getElementById("year");

    /* Insert the current calendar year so the footer never needs manual updating. */
    if (year)
    {
        year.textContent = new Date().getFullYear();
    }

    /* Find the mobile hamburger button and the navigation container. */
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    /* Check that both elements exist before attaching events. */
    if (toggle && links)
    {

        /* Run this function whenever the hamburger is clicked. */
        toggle.addEventListener("click", () =>
        {
            /* toggle() adds "open" if absent and removes it if present. */
            const open = links.classList.toggle("open");

            /* Keep the accessibility state synchronized with the visual state. */
            toggle.setAttribute("aria-expanded", String(open));
        });

        /* Close the mobile menu after any navigation link is selected. */
        links.querySelectorAll("a").forEach(link =>
        {
            link.addEventListener("click", () =>
            {
                links.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }
});
