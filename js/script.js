const btnMenu = document.getElementById("js-menu-mobile")
const menuMobile = document.querySelector(".menu-mobile")
const overlay = document.querySelector(".overlay")
const aside = document.querySelector(".menu-mobile aside")

function openMenuMobile() {
  menuMobile.classList.toggle("active")
}

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("active")
})

aside.addEventListener("mouseleave", () => {
  menuMobile.classList.remove("active")
})

btnMenu.addEventListener("click", openMenuMobile)

const linkSection = document.querySelectorAll(".js-nav li a")

function scrollToSection(event) {
  event.preventDefault()

  const href = event.currentTarget.getAttribute("href")

  const section = document.querySelector(href)

  const initPosition = section.offsetTop

  window.scrollTo({
    top: initPosition - 80,
    behavior: "smooth",
  })
}

linkSection.forEach((link) => {
  link.addEventListener("click", scrollToSection)
})
