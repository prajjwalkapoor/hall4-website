var nav = document.querySelector('nav');
var menuDiv = document.querySelectorAll('.menuEl');

function stickyNav() {

  window.onscroll = () => {
  
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.background = "#fff";
        nav.style.color = "rgba(0,0,0,0.69)";
        nav.style.height = "12.5vh";
        menuDiv.forEach(el => {
          el.classList.remove("no-scroll");
          el.classList.add("on-scroll");
        });
      }
      
      else {
        nav.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.69), transparent)";
        nav.style.color = "#fff";
        nav.style.height = "17.5vh";
        menuDiv.forEach(el => {
          el.classList.remove("on-scroll");
          el.classList.add("no-scroll");
        });
      }
  
  };

}

export { stickyNav };