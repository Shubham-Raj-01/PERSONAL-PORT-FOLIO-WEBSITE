let x = document.querySelector(".nb1");
let y = document.querySelector(".nb2");
let z = document.querySelector(".nb3");
let zz = document.querySelector(".nb4");

x.classList.add("snb");

x.addEventListener("click", () => {
    x.classList.remove("nb");
    x.classList.add("snb");
    y.classList.add("nb");
    y.classList.remove("snb");
    z.classList.add("nb");
    z.classList.remove("snb");
    zz.classList.add("nb");
    zz.classList.remove("snb");
})

y.addEventListener("click", () => {
    y.classList.remove("nb");
    y.classList.add("snb");
    x.classList.add("nb");
    x.classList.remove("snb");
    z.classList.add("nb");
    z.classList.remove("snb");
    zz.classList.add("nb");
    zz.classList.remove("snb");
})

z.addEventListener("click", () => {
    z.classList.remove("nb");
    z.classList.add("snb");
    x.classList.add("nb");
    x.classList.remove("snb");
    y.classList.add("nb");
    y.classList.remove("snb");
    zz.classList.add("nb");
    zz.classList.remove("snb");
})

zz.addEventListener("click", () => {
    zz.classList.remove("nb");
    zz.classList.add("snb");
    x.classList.add("nb");
    x.classList.remove("snb");
    y.classList.add("nb");
    y.classList.remove("snb");
    z.classList.add("nb");
    z.classList.remove("snb");
})

let navcontrol = document.querySelector(".bg");

document.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navcontrol.classList.add("bgs");
    }

    else {
        navcontrol.classList.remove("bgs");
    }
}) // for navigation bar.




// SCROLL FUNCTIONS


document.addEventListener("scroll", () => {
    if (window.scrollY >= 0 && window.scrollY < 633.5) {

        x.classList.remove("nb");
        x.classList.add("snb");
        y.classList.add("nb");
        y.classList.remove("snb");
        z.classList.add("nb");
        z.classList.remove("snb");
        zz.classList.add("nb");
        zz.classList.remove("snb");

    }
})


document.addEventListener("scroll", () => {
    if (window.scrollY > 625.5999755859375 && window.scrollY < 3248.1) {

        y.classList.remove("nb");
        y.classList.add("snb");
        x.classList.add("nb");
        x.classList.remove("snb");
        z.classList.add("nb");
        z.classList.remove("snb");
        zz.classList.add("nb");
        zz.classList.remove("snb");

    }
})

document.addEventListener("scroll", () => {
    if (window.scrollY > 3248.1 && window.scrollY < 3490.800048828125) {

        z.classList.remove("nb");
        z.classList.add("snb");
        x.classList.add("nb");
        x.classList.remove("snb");
        y.classList.add("nb");
        y.classList.remove("snb");
        zz.classList.add("nb");
        zz.classList.remove("snb");

    }
})

document.addEventListener("scroll", () => {
    if (window.scrollY > 3490.800048828125) {

        zz.classList.remove("nb");
        zz.classList.add("snb");
        x.classList.add("nb");
        x.classList.remove("snb");
        y.classList.add("nb");
        y.classList.remove("snb");
        z.classList.add("nb");
        z.classList.remove("snb");

    }
})

console.log(window.scrollY);
