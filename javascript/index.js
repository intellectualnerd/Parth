function scrollDetect() {

  var lastScroll = 0;

  window.onscroll = function () {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      var element = document.getElementById("mynav");
      element.classList.add("up");
      element.classList.remove("down");
    } else {
      lastScroll = currentScroll;
      var element = document.getElementById("mynav");
      element.classList.add("down");
      element.classList.remove("up");
    }
  };

}

scrollDetect();

var link="https://intellectualnerd.github.io/marvelopedia/index.html";

function myv1(){

  link="https://intellectualnerd.github.io/marvelopedia/index.html";
  document.getElementById('photo-div1').style.backgroundImage="url('./photos/marvel/marvel-1.png')";
  document.getElementById('photo-div2').style.backgroundImage="url('./photos/marvel/marvel-2.png')";
  document.getElementById('photo-div3').style.backgroundImage="url('./photos/marvel/marvel-3.png')";
  document.getElementById('photo-div4').style.backgroundImage="url('./photos/marvel/marvel-4.png')";
  document.getElementById('photo-div5').style.backgroundImage="url('./photos/marvel/marvel-5.png')";
  var element = document.getElementById("myv1");
  element.classList.add("mypro-opt-active");
  document.getElementById("myv2").classList.remove("mypro-opt-active");
  document.getElementById("myv3").classList.remove("mypro-opt-active");
  document.getElementById("myv4").classList.remove("mypro-opt-active");
  document.getElementById("myv5").classList.remove("mypro-opt-active");
  
}
function myv2(){
  link="https://intellectualnerd.github.io/primegamming/";
  document.getElementById('photo-div1').style.backgroundImage="url('./photos/Amazon/Amazon-1.png')";
  document.getElementById('photo-div2').style.backgroundImage="url('./photos/Amazon/Amazon-2.png')";
  document.getElementById('photo-div3').style.backgroundImage="url('./photos/Amazon/Amazon-4.png')";
  document.getElementById('photo-div4').style.backgroundImage="url('./photos/Amazon/Amazon-3.png')";
  document.getElementById('photo-div5').style.backgroundImage="url('./photos/Amazon/Amazon-5.png')";
  var element = document.getElementById("myv2");
  element.classList.add("mypro-opt-active");
  document.getElementById("myv1").classList.remove("mypro-opt-active");
  document.getElementById("myv3").classList.remove("mypro-opt-active");
  document.getElementById("myv4").classList.remove("mypro-opt-active");
  document.getElementById("myv5").classList.remove("mypro-opt-active");
}
function myv3(){
  link="https://intellectualnerd.github.io/Hackvgec/";
  document.getElementById('photo-div1').style.backgroundImage="url('./photos/HackVGEC/HackVGEC-3.png')";
  document.getElementById('photo-div2').style.backgroundImage="url('./photos/HackVGEC/HackVGEC-2.png')";
  document.getElementById('photo-div3').style.backgroundImage="url('./photos/HackVGEC/HackVGEC-1.png')";
  document.getElementById('photo-div4').style.backgroundImage="url('./photos/HackVGEC/HackVGEC-5.png')";
  document.getElementById('photo-div5').style.backgroundImage="url('./photos/HackVGEC/HackVGEC-4.png')";
  var element = document.getElementById("myv3");
  element.classList.add("mypro-opt-active");
  document.getElementById("myv2").classList.remove("mypro-opt-active");
  document.getElementById("myv1").classList.remove("mypro-opt-active");
  document.getElementById("myv4").classList.remove("mypro-opt-active");
  document.getElementById("myv5").classList.remove("mypro-opt-active");
}
function myv4(){
  link="https://intellectualnerd.github.io/Mario/";
  document.getElementById('photo-div1').style.backgroundImage="url('./photos/mario/mario-1.png')";
  document.getElementById('photo-div2').style.backgroundImage="url('./photos/mario/mario-2.png')";
  document.getElementById('photo-div3').style.backgroundImage="url('./photos/mario/mario-4.png')";
  document.getElementById('photo-div4').style.backgroundImage="url('./photos/mario/mario-3.png')";
  document.getElementById('photo-div5').style.backgroundImage="url('./photos/mario/mario-5.png')";
  var element = document.getElementById("myv4");
  element.classList.add("mypro-opt-active");
  document.getElementById("myv2").classList.remove("mypro-opt-active");
  document.getElementById("myv3").classList.remove("mypro-opt-active");
  document.getElementById("myv1").classList.remove("mypro-opt-active");
  document.getElementById("myv5").classList.remove("mypro-opt-active");
}
window.addEventListener(
  "scroll",
  () => {
      document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
  },
  false
);

function mailMe() {
  window.location = 'mailTo:parmarparth954@gmail.com'
}
