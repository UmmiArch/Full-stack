// mouse circle
// const mouseCircle = document.querySelector(".mouse-circle");
// const mouseDot = document.querySelector(".mouse-dot")



// const mouseCircleFn = (x, y) => {
//     mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
//     mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;

// };
// // End of Mouse Circle


// // Animated Circles

// const circles = document.querySelector(".circle");
// const mainImg = document.querySelector(".main-circle img");

// let mX = 0;
// let mY = 0;

// const animateCircles = (e, x, y) => {
//        if (x < mX) {
//         circles.forEach((circle) => {
//             circle.style.left = `100px`;
//         });
//         mainImg.style.left = `100px`;
//     }

    
//     else if (x > mX) {
//         circles.forEach((circle) => {
//             circle.style.left = `-100px`;
//         });
//         mainImg.style.left = `-100px`;
//     }
//     if (y < mY) {
//         circles.forEach((circle) => {
//             circle.style.top = `100px`;
//         });
//         mainImg.style.top = `100px`;
//     }

   
//     else if (y > mY) {
//         circles.forEach((circle) => {
//             circle.style.top = `-100px`;
//         });
//         mainImg.style.top = `-100px`;
//     }
    
//     mX = e.clientX;
//     mY = e.clientY;
// };

// // End of the Animated Cicles 
// document.body.addEventListener("mousemove", (e) => {
//     let x = e.clientX;
//     let y = e.clientY;

//     mouseCircleFn(x, y);
//     animateCircles(e, x, y);
// });

// document.body.addEventListener("mouseleave", () => {
//     mouseCircle.style.opacity = "0";
//     mouseDot.style.opacity = "0";

// })



// mouse circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot")

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};
// End of Mouse Circle

// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
let z = 100;
const animateCircles = (e, x, y) => {
    if (x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if (x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }
    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }
    mX = e.clientX;
    mY = e.clientY;
};

// End of the Animated Cicles 
document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x, y);
    animateCircles(e, x, y);
});

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});


// Main Button

const mainBtns = document.querySelectorAll('.main-btn');

mainBtns.forEach(btn=>{

    let ripple;

btn.addEventListener('mouseenter', (e) => {
    // console.log(e.target.getBoundingClientRect());

const left = e.clientX - e.target.getBoundingClientRect().left;

const top = e.clientY - e.target.getBoundingClientRect().top;

ripple = document.createElement('div');
ripple.classList.add("ripple");
ripple.style.text = `${left}px`;
ripple.style.text = `${top}px`;
btn.prepend(ripple);

});

btn.addEventListener("mouseleave", () => {
    btn .removeChild(ripple);
});

})



// End Main Button


// About me Text

const aboutMeText=document.querySelector('.about-me-text')
const aboutMeTextContent = "I am designer & I create awards winning website with the best user experiance & I do not Talt much, just contact me :)";

(Array.from(aboutMeTextContent)).forEach(char =>{
   const span=document.createElement('span');
   span.textContent = char;
   aboutMeText.appendChild(span);

   span.addEventListener('mouseenter', (e) =>{
    e.target.style.animation = "aboutMeTextAnim 10s Infinite"
   })
});
// End About me Text


// Projects
  
 const projects =document.querySelectorAll('.project')

 projects.forEach(project =>{
    project.addEventListener('mouseenter', () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.
            offsetHeight-project.offsetHeight + 20}px`;

    });

 project.addEventListener('mouseleave', () => {
    project.firstElementChild.style.top = "2rem";
 });
 });

// End of Project


