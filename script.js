const linkList = {
   1: "contacts",
   2: "about",
   3: "skills",
   4: "samples",
   5: "languages",
   6: "education",
   7: "job"
}

let sectionNum = 1;

const sectionsList = document.getElementsByClassName("slide");
const buttonsList = document.getElementsByClassName("nav__item");

for (let i = 0; i < buttonsList.length; i++) {
   buttonsList[i].addEventListener("click", () => {
      sectionNum = Number(buttonsList[i].getAttribute("accesskey"));
      showSlide(sectionNum);
      // console.log(buttonsList[i].getAttribute("accesskey"));
   }, false);
}

function showSlide(sectionNum) {
   for (let key in linkList) {
      sectionsList[key - 1].style.display = "none";
      buttonsList[key - 1].classList.remove("active");
      if (sectionNum === Number(key)) {
         sectionsList[key - 1].style.display = "flex";
         buttonsList[key - 1].classList.add("active");
      };
   }
   // console.log(sectionNum, ' ', sectionsList[sectionNum - 1].style.display);
}

let timer = setInterval(function () {
   sectionNum++;
   if (sectionNum > sectionsList.length) {
      sectionNum = 1;
   }
   // console.log(sectionNum);
   showSlide(sectionNum);

}, 10000);

//console.log(buttonsList[2].getAttribute("value"));
//console.log(sectionsList);