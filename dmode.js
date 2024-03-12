document.getElementsByClassName("linking")[0].style.color = "black";
document.getElementsByClassName("linking")[1].style.color = "black";




let but = document.querySelector(".dmodecont");


// VARIABLE PROGRAMMING LIST
// START

let a1 = document.querySelector(".dmodecont");
let a2 = document.querySelector(".contMain");
let a3 = document.querySelector(".layer");
let a4 = document.querySelector(".bgs");
let a5 = document.querySelector(".remove");
let a6 = document.querySelector(".snb");
let a7 = document.querySelector(".contMain2");
let a8 = document.querySelector(".contMain3");
let a9 = document.querySelector(".contMain4");
let a10 = document.querySelector(".contMain5");
let a11 = document.querySelector(".heading1");
let a12 = document.getElementsByClassName("sbss1");
let a13 = document.getElementsByClassName("sbss2");
let a14 = document.getElementsByClassName("sbss3");

let b1 = document.getElementsByClassName("ide1");
let b2 = document.getElementsByClassName("ide2");
let b3 = document.getElementsByClassName("ide3");
let b4 = document.getElementsByClassName("ide4");

let a15 = document.getElementsByClassName("sbss4");
let a16 = document.getElementsByClassName("sbss5");
let a17 = document.querySelector(".des2");
let a18 = document.getElementsByClassName("sdes2");
let a19 = document.getElementsByClassName("numcode");

// END OF VARIABLE PROGRAMMING



// CONDITIONALS PROGRAMMING
// START

but.addEventListener("click", () => {

    if (a1.style.backgroundColor == "var(--dmb2)") {
        a1.style.backgroundColor = "var(--dmb)";
        a1.style.color = "var(--dmb2)";

        let z = document.querySelector(".backvid");
        console.log(z.src);

        document.querySelector(".light").style.display = "none";
        document.querySelector(".dark").style.display = "inline";

        document.querySelector(".s1").style.display = "none";
        document.querySelector(".s2").style.display = "none";

        document.getElementsByClassName("linking")[0].style.color = "white";
        document.getElementsByClassName("linking")[1].style.color = "white";

    }
    else {
        a1.style.backgroundColor = "var(--dmb2)";
        a1.style.color = "var(--dmb)";

        document.querySelector(".light").style.display = "inline";
        document.querySelector(".dark").style.display = "none";

        document.querySelector(".s1").style.display = "inline";
        document.querySelector(".s2").style.display = "inline";

        document.getElementsByClassName("linking")[0].style.color = "black";
        document.getElementsByClassName("linking")[1].style.color = "black";
    }
})

but.addEventListener("click", () => {
    if (a2.style.background == "var(--b1)") {
        a2.style.background = "var(--db1)";

        a2.style.color = "rgb(215, 215, 215)";
    }
    else {
        a2.style.background = "var(--b1)";

        a2.style.color = "black";
    }
})

but.addEventListener("click", () => {
    if (a3.style.backgroundColor == "var(--layer)") {
        a3.style.background = "transparent";

        document.querySelector(".backvid").style.display = "none";

        document.querySelector(".backvid2").style.display = "inline-block";

        document.body.style.color = "black";
    }
    else {
        a3.style.backgroundColor = "var(--layer)";

        document.querySelector(".backvid2").style.display = "none";

        document.querySelector(".backvid").style.display = "inline-block";

        document.body.style.color = "black";
    }
})

but.addEventListener("click", () => {
    if (a4.style.backgroundColor == "aquamarine") {
        a4.style.backgroundColor = "black";
    }
    else {
        a4.style.backgroundColor = "aquamarine";
    }
})

but.addEventListener("click", () => {
    if (a5.style.backgroundColor == "var(--black)") {
        a5.style.backgroundColor = "rgb(210 210 210)";
    }
    else {
        a5.style.background = "transparent";
    }
})

but.addEventListener("click", () => {
    if (a6.style.backgroundColor == "var(--b3)") {
        a6.style.backgroundColor = "var(--db3)";

        document.querySelector(".nb1").style.background = "transparent";

    }
    else {
        a6.style.backgroundColor = "var(--b3)";

        document.querySelector(".nb1").style.background = "transparent";
    }
})

but.addEventListener("click", () => {
    if (a7.style.background == "var(--b21)") {
        a7.style.background = "var(--db21)";
    }
    else {
        a7.style.background = "var(--b21)";
    }
})

but.addEventListener("click", () => {
    if (a8.style.background == "var(--b4)") {
        a8.style.background = "var(--db4)";
    }
    else {
        a8.style.background = "var(--b4)";
    }
})

but.addEventListener("click", () => {
    if (a9.style.background == "var(--b22)") {
        a9.style.background = "var(--db22)";
    }
    else {
        a9.style.background = "var(--b22)";
    }
})

but.addEventListener("click", () => {
    if (a10.style.background == "var(--b23)") {
        a10.style.background = "var(--db23)";

        a10.style.color = "white";
    }
    else {
        a10.style.background = "var(--b23)";

        a10.style.color = "black";
    }
})

but.addEventListener("click", () => {
    if (a11.style.background == "var(--b24)") {
        a11.style.background = "var(--db24)";
    }
    else {
        a11.style.background = "var(--b24)";
    }
})

but.addEventListener("click", () => {
    if (a12[0].style.backgroundColor == "var(--box1)") {
        a12[0].style.backgroundColor = "var(--dbox1)";
        a12[1].style.backgroundColor = "var(--dbox1)";
    }
    else {
        a12[0].style.backgroundColor = "var(--box1)";
        a12[1].style.backgroundColor = "var(--box1)";
    }
})

but.addEventListener("click", () => {
    if (a13[0].style.backgroundColor == "var(--box2)") {
        a13[0].style.backgroundColor = "var(--dbox2)";
        a13[1].style.backgroundColor = "var(--dbox2)";
    }
    else {
        a13[0].style.backgroundColor = "var(--box2)";
        a13[1].style.backgroundColor = "var(--box2)";
    }
})

but.addEventListener("click", () => {
    if (a14[0].style.backgroundColor == "var(--box3)") {
        a14[0].style.backgroundColor = "var(--dbox3)";
        a14[1].style.backgroundColor = "var(--dbox3)";
    }
    else {
        a14[0].style.backgroundColor = "var(--box3)";
        a14[1].style.backgroundColor = "var(--box3)";
    }
})

but.addEventListener("click", () => {
    if (a15[0].style.backgroundColor == "var(--box4)") {
        a15[0].style.backgroundColor = "var(--dbox4)";
        a15[1].style.backgroundColor = "var(--dbox4)";
    }
    else {
        a15[0].style.backgroundColor = "var(--box4)";
        a15[1].style.backgroundColor = "var(--box4)";
    }
})

but.addEventListener("click", () => {
    if (a16[0].style.backgroundColor == "var(--box5)") {
        a16[0].style.backgroundColor = "var(--dbox5)";
        a16[1].style.backgroundColor = "var(--dbox5)";
    }
    else {
        a16[0].style.backgroundColor = "var(--box5)";
        a16[1].style.backgroundColor = "var(--box5)";
    }
})

but.addEventListener("click", () => {
    if (a17.style.backgroundColor == "var(--des2)") {
        a17.style.backgroundColor = "var(--ddes2)";
    }
    else {
        a17.style.backgroundColor = "var(--des2)";
    }
})

but.addEventListener("click", () => {
    if (a18[0].style.background == "var(--sdes2)") {
        a18[0].style.background = "var(--dsdes2)";
        a18[1].style.background = "var(--dsdes2)";

        a18[0].style.color = "white";
        a18[1].style.color = "white";
    }
    else {
        a18[0].style.background = "var(--sdes2)";
        a18[1].style.background = "var(--sdes2)";

        a18[0].style.color = "black";
        a18[1].style.color = "black";
    }
})

but.addEventListener("click", () => {
    if (a19[0].style.backgroundColor == "var(--num)") {
        a19[0].style.backgroundColor = "var(--dnum)";
        a19[1].style.backgroundColor = "var(--dnum)";
    }
    else {
        a19[0].style.backgroundColor = "var(--num)";
        a19[1].style.backgroundColor = "var(--num)";
    }
})

but.addEventListener("click", () => {
    if (b1[0].style.backgroundColor == "var(--box1)") {
        b1[0].style.backgroundColor = "var(--dbox1)";
        b1[1].style.backgroundColor = "var(--dbox1)";
    }
    else {
        b1[0].style.backgroundColor = "var(--box1)";
        b1[1].style.backgroundColor = "var(--box1)";
    }
})

but.addEventListener("click", () => {
    if (b2[0].style.backgroundColor == "var(--box2)") {
        b2[0].style.backgroundColor = "var(--dbox2)";
        b2[1].style.backgroundColor = "var(--dbox2)";
    }
    else {
        b2[0].style.backgroundColor = "var(--box2)";
        b2[1].style.backgroundColor = "var(--box2)";
    }
})

but.addEventListener("click", () => {
    if (b3[0].style.backgroundColor == "var(--box3)") {
        b3[0].style.backgroundColor = "var(--dbox3)";
        b3[1].style.backgroundColor = "var(--dbox3)";
    }
    else {
        b3[0].style.backgroundColor = "var(--box3)";
        b3[1].style.backgroundColor = "var(--box3)";
    }
})

but.addEventListener("click", () => {
    if (b4[0].style.backgroundColor == "var(--box4)") {
        b4[0].style.backgroundColor = "var(--dbox4)";
        b4[1].style.backgroundColor = "var(--dbox4)";
    }
    else {
        b4[0].style.backgroundColor = "var(--box4)";
        b4[1].style.backgroundColor = "var(--box4)";
    }
})

let c = document.querySelector(".heading1");

but.addEventListener("click", () => {
    if (c.style.backgroundColor == "var(--num)") {
        c.style.backgroundColor = "var(--dnum)";
    }
    else {
        c.style.backgroundColor = "var(--num)";
    }
})