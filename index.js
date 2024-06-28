const querySelectAll = (tagName) => document.querySelectorAll(tagName);
const querySelectOne = (tagName) => document.querySelector(tagName);

// humberger menu ==============================================================
const humberger_menu = querySelectOne(".hambergerMenu");
const nav_container = querySelectOne(".navigationContainer");

humberger_menu.addEventListener("click", () => {
  let hasToogleClass = nav_container.classList.contains("nav-toogle");
  hasToogleClass
    ? nav_container.classList.remove("nav-toogle")
    : nav_container.classList.add("nav-toogle");
});

// CV downlaod ========================================================================

const download_CV = querySelectAll(".downLoadCv");

download_CV.forEach(dl_button => {
  dl_button.addEventListener("click", () => {
    let createdaTag = document.createElement("a");
    createdaTag.href = "sample.jpg";
    createdaTag.download = "sampleCv.png";
    createdaTag.click();
  });

})

// a atag actvive link ===============================================================

let aTags = querySelectAll("a");

aTags.forEach((a) => {
  a.addEventListener("click", () => {
    querySelectOne(".active")?.classList.remove("active");
    a.classList.add("active");
  });
});

// current page ===============================================================

const scrollPage = (attrName, elementName, className) => {
  const current_page_navLinks = Array.from(elementName).find(
    (as) => as.getAttribute("name") === attrName
  );
  
  if (current_page_navLinks) {
    querySelectOne("." + className)?.classList.remove(className);
    current_page_navLinks.classList.add(className);
  }
  
};

window.addEventListener("scroll", () => {
  let phoneHeight_Half = window.innerHeight / 2;
  let scrollFromTop = document.documentElement.scrollTop;
  
  const scrollCalc = (currentPage, nextPage) =>
    scrollFromTop >= phoneHeight_Half * currentPage &&
    scrollFromTop < phoneHeight_Half * nextPage;

  switch (true) {
    case scrollCalc(1, 3):
      scrollPage("About", aTags, "active");
      break;
    case scrollCalc(3, 5):
      scrollPage("Portfolio", aTags, "active");
      break;
    case scrollCalc(5, 7):
      scrollPage("Services", aTags, "active");
      break;
    case scrollCalc(7, 9):
      scrollPage("Contacts", aTags, "active");
      break;
    default:
      scrollPage("Home", aTags, "active");
  }

  console.log("scrollFromTop", scrollFromTop);
});
