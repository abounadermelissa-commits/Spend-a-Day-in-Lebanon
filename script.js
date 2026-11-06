let child=document.getElementById("child")

document.getElementById("start-btn").addEventListener("click", function(){
    document.getElementById("start").style.display="none"
    document.getElementById("entering").style.display="block"
})
document.getElementById("entering").addEventListener("animationend",function(){
     document.getElementById("entering").style.display="none";
     document.getElementById("beirut").style.display="block";
     document.getElementById("music").play()
})
let plays = 0;
document.getElementById("kaakSound").addEventListener("ended", function () {
  plays++;
  if (plays < 2) {
      document.getElementById("kaakSound").play();
  }
  else {
    document.getElementById("girl-sound").play();
  }
});
let girlplays=0
document.getElementById("girl-sound").addEventListener("ended",function(){
  if (girlplays>=1){
    document.getElementById("girl-sound").pause()
  }
   else {
     document.getElementById("girl-sound").src="Man_d93ed213-a765-491c-90c2-e460358f763d.mp3"
    document.getElementById("girl-sound").play();
   girlplays++}
})
played=null
document.getElementById("next1").addEventListener("click", function () {
  document.getElementById("beirut").style.display = "none";
  document.getElementById("music").pause(); 
  document.getElementById("tripoly").style.display="block";
  document.getElementById("kaakSound").play();
  setTimeout(function(){
  document.getElementById("kaak-seller").src="ka3ak_plate.gif"
}, 21000);
 setTimeout(function(){
  document.getElementById("kaak-seller").src="ka3ak_plate.gif"
}, 21000);
setTimeout(function(){
  document.getElementById("tripoly-girl").src="girl_talking_v3.gif";
},13000);

setTimeout(function(){
 document.getElementById("tripoly-girl").src="girl_standing_looking_right.png"
}, 18000);

setTimeout(function(){
 document.getElementById("tripoly-girl").src="girl_walking_left_with_kaak.gif";
 document.getElementById("kaak-seller").src="kaak-seller.gif";
}, 32000);

setTimeout(function(){
 document.getElementById("tripoly-girl").style.opacity="0%"
},32500);
played=setTimeout(function(){
  document.getElementById("background-song").play();
},22000);
})

document.getElementById("next2").addEventListener("click", function () {
  document.getElementById("tripoly").style.display = "none";
   document.getElementById("background-song").pause()
   clearTimeout(played);
  document.getElementById("kaakSound").pause();
  document.getElementById("girl-sound").pause();
  document.getElementById("baalbek").style.display="block";
  document.getElementById("houwara").play();
setTimeout(function() {
  child.src="baalbek-child-sad2x.png";
  child.style.transform="translateX(300px)"
}, "24000");

setTimeout(function(){
  document.getElementById("angry-mum").src="baalbek-mom-dance-loop.gif";
  document.getElementById("angry-mum").style.height="45vh";
  document.getElementById("angry-mum").style.top="50vh";
  child.style.opacity="0%";
}, "27000")

})

let girl=document.getElementById("girl")
let man=document.getElementById("man")

girl.addEventListener("animationend", function(){
  girl.src="baalbek-wife-dance.png";
})
man.addEventListener("animationend", function(){
  man.src="baalbek-husband-dance.png";
})

document.getElementById("next3").addEventListener("click",function(){
  document.getElementById("baalbek").style.display="none";
  document.getElementById("houwara").pause();
  document.getElementById("jounieh").style.display="block";
  document.getElementById("fairuz").play();
  setTimeout(function() {
  document.getElementById("waiter").src="seller-talking-left.gif"
}, 29000);
    fairuz=document.getElementById("fairuz-img")
   setTimeout(function(){
   fairuz.style.opacity="100%"
   },29000)

  setTimeout(function(){
   document.getElementById("press").style.opacity="100%"
   }, 32000)
})
document.getElementById("fam-walk").addEventListener("animationend",function(){
  document.getElementById("fam-walk").src="family-looking-right.gif";
})



document.getElementById("next4").addEventListener("click",function(){
  document.getElementById("jounieh").style.display="none";
  document.getElementById("fairuz").pause();
  document.getElementById("ending").style.display="block";
})

  document.getElementById("endBtn").addEventListener("click", function(){
    location.reload()
  })
