/* =====================================================
   Jagtar Singh Portfolio
   script.js
===================================================== */

// -------------------------
// Wait for page to load
// -------------------------

document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();
    initStickyHeader();
    initRevealAnimation();
    initTypingAnimation();
    initActiveNavigation();
    initBackToTop();
    initParallax();

});


// =====================================
// Smooth Scroll
// =====================================

function initSmoothScroll() {

    const links = document.querySelectorAll('nav a');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}



// =====================================
// Sticky Header
// =====================================

function initStickyHeader(){

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            header.style.background="rgba(8,11,22,.95)";
            header.style.boxShadow="0 5px 25px rgba(0,0,0,.4)";

        }

        else{

            header.style.background="rgba(0,0,0,.25)";
            header.style.boxShadow="none";

        }

    });

}



// =====================================
// Reveal Animation
// =====================================

function initRevealAnimation(){

    const revealItems = document.querySelectorAll(

        ".card,.project,.timeline-item,#about p,.hero-left,.hero-right"

    );

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    revealItems.forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

}



// =====================================
// Typing Animation
// =====================================

function initTypingAnimation(){

    const element = document.querySelector(".hero-left h2");

    if(!element) return;

    const titles=[

        "Senior Azure Data Engineer",

        "Databricks Expert",

        "PySpark Developer",

        "Azure Data Factory Engineer",

        "Power BI Developer"

    ];

    let titleIndex=0;

    let charIndex=0;

    let deleting=false;

    function type(){

        const current=titles[titleIndex];

        if(!deleting){

            element.textContent=current.substring(0,charIndex++);

            if(charIndex>current.length){

                deleting=true;

                setTimeout(type,1500);

                return;

            }

        }else{

            element.textContent=current.substring(0,charIndex--);

            if(charIndex===0){

                deleting=false;

                titleIndex=(titleIndex+1)%titles.length;

            }

        }

        setTimeout(type,deleting?40:90);

    }

    type();

}



// =====================================
// Active Navigation
// =====================================

function initActiveNavigation(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}



// =====================================
// Back To Top Button
// =====================================

function initBackToTop(){

    const button=document.createElement("button");

    button.innerHTML="↑";

    button.id="topButton";

    document.body.appendChild(button);

    Object.assign(button.style,{

        position:"fixed",

        bottom:"30px",

        right:"30px",

        width:"50px",

        height:"50px",

        borderRadius:"50%",

        border:"none",

        background:"#0072ff",

        color:"#fff",

        fontSize:"22px",

        cursor:"pointer",

        display:"none",

        zIndex:"9999",

        transition:"0.3s"

    });

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.1)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

    button.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.style.display="block";

        }

        else{

            button.style.display="none";

        }

    });

}



// =====================================
// Hero Parallax
// =====================================

function initParallax(){

    const image=document.querySelector(".hero-right img");

    if(!image) return;

    window.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.pageX)/40;

        const y=(window.innerHeight/2-e.pageY)/40;

        image.style.transform=

            `translate(${x}px,${y}px)`;

    });

}



// =====================================
// Console Greeting
// =====================================

console.log(

"%cWelcome to Jagtar Singh's Portfolio",

"color:#00c6ff;font-size:20px;font-weight:bold;"

);