"use strict";

const tabsTitle = document.querySelectorAll(".tabs-title"),
  tabsContent = document.querySelectorAll(".tab"),
  tabsList = document.querySelector(".tabs"),
  activeTabClass = "active";

function selectTitle(element, titlesList, className) {
  titlesList.forEach((item) => item.classList.remove(className));
  element.classList.add(className);
}

function selectContent(activeTab, contentList, className) {
  contentList.forEach((item) =>
    item.dataset.category === activeTab
      ? item.classList.add(className)
      : item.classList.remove(className)
  );
}
tabsList.addEventListener("click", (element) => {
  const target = element.target.closest("li");
  selectTitle(target, tabsTitle, activeTabClass);
  selectContent(target.dataset.category, tabsContent, activeTabClass);
});

// second part

const imagesArray = [
  {
    id: 1,
    imgLink: "./img/services/graphic-design1.jpg",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 2,
    imgLink: "./img/all/Layer 24.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 3,
    imgLink: "./img/all/Layer 25.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 4,
    imgLink: "./img/all/Layer 26.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 5,
    imgLink: "./img/all/Layer 27.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 6,
    imgLink: "./img/all/Layer 28.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 7,
    imgLink: "./img/all/Layer 29.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 8,
    imgLink: "./img/all/Layer 30.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 9,
    imgLink: "./img/all/Layer 31.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 10,
    imgLink: ".//img/all/Layer 32.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 11,
    imgLink: "./img/all/Layer 33.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 12,
    imgLink: "./img/all/Layer 34.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 13,
    imgLink: "./img/services/graphic-design1.jpg",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 14,
    imgLink: "./img/all/Layer 24.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 15,
    imgLink: "./img/all/Layer 25.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 16,
    imgLink: "./img/all/Layer 26.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 17,
    imgLink: "./img/all/Layer 27.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 18,
    imgLink: "./img/all/Layer 28.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 19,
    imgLink: "./img/all/Layer 29.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 20,
    imgLink: "./img/all/Layer 30.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 21,
    imgLink: "./img/all/Layer 31.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 22,
    imgLink: ".//img/all/Layer 32.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 23,
    imgLink: "./img/all/Layer 33.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 24,
    imgLink: "./img/all/Layer 34.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 25,
    imgLink: "./img/services/graphic-design1.jpg",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 26,
    imgLink: "./img/all/Layer 24.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 27,
    imgLink: "./img/all/Layer 25.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 28,
    imgLink: "./img/all/Layer 26.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 29,
    imgLink: "./img/all/Layer 27.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 30,
    imgLink: "./img/all/Layer 28.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 31,
    imgLink: "./img/all/Layer 29.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
  {
    id: 32,
    imgLink: "./img/all/Layer 30.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 33,
    imgLink: "./img/all/Layer 31.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "wordpress",
  },
  {
    id: 34,
    imgLink: ".//img/all/Layer 32.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "landing-pages",
  },
  {
    id: 35,
    imgLink: "./img/all/Layer 33.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "web-design",
  },
  {
    id: 36,
    imgLink: "./img/all/Layer 34.png",
    title: "Web Design",
    alt: "Online Marketing",
    category: "graphic-design",
  },
];

const showImg = () => {
  document.querySelector(".load-txt").classList.remove("loading");
  const workCards = document.querySelector(".work-cards");

  let list = imagesArray.map((item, index) => {
    if (index < step && index >= count) {
      const li = document.createElement("li");
      li.classList.add("card");
      li.classList.add("work-active");
      li.dataset.category = item.category;

      const img = new Image(290, 211);
      img.classList.add("img");
      img.src = item.imgLink;
      img.alt = item.alt;

      const infoCard = document.createElement("div");
      infoCard.classList.add("info");

      const infoRef = document.createElement("div");
      infoRef.classList.add("info-ref");
      infoRef.innerHTML =
        "<a href='#'><span class='circle first-circ'>" +
        "<img class='icon-link' alt='link' src='./img/icon/Combined shape 7431.png' width='14' height='14'/>" +
        "</span></a>" +
        "<a href='#'><span class='circle second-circ'>" +
        "<img class='icon-link' alt='square' src='./img/icon/Layer 23.png' width='12' height='12'/>" +
        "</span></a>";

      const infoDescr = document.createElement("div");
      infoDescr.classList.add("info-decri");
      infoDescr.innerHTML = `<h3 class="info-title">creative design</h3><p class="info-paragraph">${item.title}</p>`;

      infoCard.append(infoRef, infoDescr);
      li.append(img, infoCard);

      return li;
    }
    return "";
  });

  workCards.append(...list);

  if (step === imagesArray.length) {
    btnLoad.remove();
  }
};
let step = 12;
let count = 0;
showImg();

const btnLoad = document.querySelector(".btn-load");
btnLoad.addEventListener("click", () => {
  count += 12;
  step += 12;
  if (step <= imagesArray.length && count <= imagesArray.length) {
    document.querySelector(".load-txt").classList.add("loading");
    setTimeout(showImg, 2600);
  } else {
    btnLoad.remove();
  }
});

const workTitles = document.querySelectorAll(".work-tabs-title"),
  workTab = document.querySelector(".work-filter"),
  activeCardClass = "work-active";

workTab.addEventListener("click", (e) => {
  const target = e.target.closest("li");
  const workCards = document.querySelectorAll(".card");
  selectTitle(target, workTitles, activeCardClass);
  if (target.dataset.category !== "all") {
    selectContent(target.dataset.category, workCards, activeCardClass);
  } else {
    workCards.forEach((item) => item.classList.add("work-active"));
  }
});

let counter = 0;
const profileListTab = document.querySelector(".profile-tab");
const profileList = document.querySelectorAll(".profile-tab > li");
const profileListContent = document.querySelectorAll(
  ".wrapper-about__main__img>li"
);
profileListTab.addEventListener("click", ({ target }) => {
  const el = target.closest("li");

  selectTitle(el, profileList, "show");
  selectContent(el.dataset.category, profileListContent, "show");

  profileList.forEach((el, index) => {
    if (el.classList.contains("show")) {
      counter = index;
    }
  });
});

const btnSelect = document.querySelector(".wrapper-about__list__people");
btnSelect.addEventListener("click", ({ target }) => {
  if (target.closest("div#right")) {
    moveRight();
    profileList[counter].click();
  } else if (target.closest("div#left")) {
    moveLeft();
    profileList[counter].click();
  }
});

function moveRight() {
  ++counter;
  if (counter >= profileList.length) {
    counter = 0;
  }
}

function moveLeft() {
  --counter;
  if (counter < 0) {
    counter = profileList.length - 1;
  }
}
