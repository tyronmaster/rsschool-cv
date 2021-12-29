const linkList = {
   1: "contacts",
   2: "about",
   3: "skills",
   4: "samples",
   5: "languages",
   6: "education",
   7: "job"
}

const sectionsList = document.getElementsByClassName("slide");
const buttonsList = document.getElementsByClassName("nav__item");
for (let i = 0; i < buttonsList.length; i++) {
   buttonsList[i].addEventListener("click", () => {
      var sectionNum = buttonsList[i].getAttribute("value");
      showSlide(sectionNum);
      console.log(i, ' ', sectionNum);
   }, false);
}

function showSlide(number) {
   for (let key in linkList) {
      console.log(key);
      sectionsList[key - 1].style.display = "none";
      if (number === key) {
         sectionsList[key - 1].style.display = "flex";
      };
   }
}

/*console.log(buttonsList[0].getAttribute("value"));*/
console.log(sectionsList);
