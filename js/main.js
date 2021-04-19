const sidebarCollapse = document.querySelector("#sidebarCollapse");
const sidebar = document.querySelector("#sidebar");
const main = document.querySelector("main");
const frame = document.querySelector("iframe");
const linkStart = "file:///C:/Users/JISOO/Desktop/personal/study/JS0224.github.io/view/";

const ACTIVE_CL = 'active';
let selectedMenu = null;

function addEventSideBarBtn() {
  sidebarCollapse.addEventListener("click", function(e){
    sidebar.classList.toggle(ACTIVE_CL);
    main.classList.toggle(ACTIVE_CL);
    sidebarCollapse.classList.toggle(ACTIVE_CL);
  });
}

function addEventSideBarMenu() {
  let menus = sidebar.querySelector('ul').querySelectorAll('li');
  selectedMenu = menus[0];
  menus.forEach(function(menu){
    let link = menu.querySelector('div');
    link.addEventListener("click",function(e){
      let parent = e.target.parentElement;
      if (parent === selectedMenu) {
        return;
      }
      else {
        selectedMenu.classList.remove(ACTIVE_CL);
        parent.classList.add(ACTIVE_CL);
        selectedMenu = parent;
        let page = link.getAttribute('data-link');
        frame.src = linkStart+`${page}.html`;
      }
    });
  });
}

function init() {
  addEventSideBarBtn();
  addEventSideBarMenu();
}

init();
