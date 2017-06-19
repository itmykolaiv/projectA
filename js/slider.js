var slide_count = 3;
var active_slide = 1;
setInterval(function(){
	
  //console.log(active_slide);
	
  if(active_slide > slide_count ) {
  	active_slide = 1;
  }
  document.querySelector('#slider .container').style.marginLeft =  -1* (active_slide-1) * 100 + "%";
  ++active_slide;
  console.log(document.querySelector('#slider .container').style.marginLeft);
}, 3000);