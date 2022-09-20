// check if localStorage 
let mainColor = localStorage.getItem("color_option")


if (mainColor !== null) {

    document.documentElement.style.setProperty("--main-color", mainColor)

    document.querySelectorAll(".coloreList li").forEach(elemt => {
        elemt.classList.remove("active");

        if (elemt.dataset.color === mainColor) {
            elemt.classList.add("active")
        }
    })
}



//  togolsetting
document.querySelector(".togoSetting  .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin")
    document.querySelector(".settingBox").classList.toggle("open")
}
let ticon = document.querySelector(".settingBox")
// stct landig page elmant 
let landigpage = document.querySelector(".landing-page")
//  get Arry of imgs 

// switch color 

const colorLi = document.querySelectorAll(".coloreList li ")

colorLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        // set color localStorage 
        localStorage.setItem("color_option", e.target.dataset.color)

        // remvoe active class 
        HandleActiv(e)

    })
})



let ArryImge = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]

// change background imga   

setInterval(() => {
    let randomnuber = Math.floor(Math.random() * ArryImge.length)
    landigpage.style.backgroundImage = 'url("phto/' + ArryImge[randomnuber] + '")'
}, 5000);

// Select Skills Selector
let ourSkills = document.querySelector(".skilla");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skillBox .skillProgres span ");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progrees;

        });

    }

};
let Gallary = document.querySelectorAll(".box-imge img")

Gallary.forEach(img => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div")

        overlay.className = "pop-overlay"

        document.body.appendChild(overlay)
        // creat the popup
        let thepopupbox = document.createElement("div")

        // add class to the popups box 
        thepopupbox.className = "pop-box"
        if (img.alt !== null) {
            // creat heading 
            let imgheading = document.createElement("h3");
            // creat texr for heading 
            let imgText = document.createTextNode(img.alt);
            imgheading.appendChild(imgText)

            thepopupbox.appendChild(imgheading)
        }
        // create the img

        let popupsimge = document.createElement("img")

        // set img src 
        popupsimge.src = img.src

        thepopupbox.appendChild(popupsimge)

        document.body.appendChild(thepopupbox)

        // creaat the cloess span 
        let cloesbutton = document.createElement("span")

        let textcloes = document.createTextNode("X")

        cloesbutton.appendChild(textcloes)

        // add class to cloesbutton 
        cloesbutton.className = "cloesButton"

        thepopupbox.appendChild(cloesbutton)

    })
})

document.addEventListener("click", function (e) {
    if (e.target.className == 'cloesButton') {
        e.target.parentNode.remove();
        document.querySelector(".pop-overlay").remove();
    }
})
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'

            });

        });

    });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

//  fuction hundel 
function HandleActiv(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(elemt => {
        elemt.classList.remove("active");
    })
    ev.target.classList.add("active")
}