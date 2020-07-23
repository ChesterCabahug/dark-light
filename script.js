const toggleSwitch = document.querySelector("input[type = 'checkbox']")
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')


// helper func for dark mode
whatMode = (navBgInRGB, textBoxBgInRGB, modeName, removeClass, addClass, img1Src, img2Src, img3Src) => {
    nav.style.backgroundColor = `${navBgInRGB}`
    textBox.style.backgroundColor = `${textBoxBgInRGB}`
    toggleIcon.children[0].textContent = `${modeName}`
    toggleIcon.children[1].classList.remove(`${removeClass}`)
    toggleIcon.children[1].classList.add(`${addClass}`)
    image1.src = `${img1Src}`
    image2.src = `${img2Src}`
    image3.src = `${img3Src}`
}

// dark mode
darkMode = () => {
    whatMode(
        `rgb(0 0 0 / 50%)`, 
        `rgb(255 255 255 / 50%)`,
        `Dark Mode`,
        `fa-sun`,
        `fa-moon`,
        `img/undraw_proud_coder_dark.svg`,
        `img/undraw_feeling_proud_dark.svg`,
        `img/undraw_conceptual_idea_dark.svg`

    )
}
lightMode = () => {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)"
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)"
    toggleIcon.children[0].textContent = "Light Mode"
    toggleIcon.children[1].classList.remove("fa-moon")
    toggleIcon.children[1].classList.add("fa-sun")
    image1.src = "img/undraw_proud_coder_light.svg"
    image2.src = "img/undraw_feeling_proud_light.svg"
    image3.src = "img/undraw_conceptual_idea_light.svg"
}


switchTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
        darkMode()
    } else {
        document.documentElement.setAttribute("data-theme", "light")
        lightMode()
    }
}

// event listener
toggleSwitch.addEventListener("change", switchTheme)