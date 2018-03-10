
window.onscroll = preventDefault();

// function toNextDiv() {
// 	var ids = ["mainpage", "level0"];
// 	var index = 0;
// 	// if (document.body.scrollTop > 50) {
// 	// 	console.log("scrolling down");
// 	// 	index+= 1;
// 	// 	document.getElementById(ids[index]).scrollIntoView({behavior: "auto"});
// 	// } else if (document.body.scrollTop <= -50) {
// 	// 	console.log("scrolling up, index " + index);
// 	// 	console.log(index);
// 	// 	index-= 1;
// 	// 	document.getElementById(ids[index]).scrollIntoView({behavior: "auto"});
// 	// }
// 	// var doc = document.documentElement;
// 	// var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
// 	// var scrollY = (top || window.pageYOffset) - window.pageYOffset;
// 	var lastScrollTop = 0;

// 	window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
// 	   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
// 	   if (st > lastScrollTop + 100){
// 	       // downscroll code
// 	    if (index >= 0) {
// 	    	index+= 1;
// 		}
// 		document.getElementById(ids[index]).scrollIntoView(true);
// 	   } else if (st < lastScrollTop){
// 	      // upscroll code
// 	    if (index < 2) {
// 	    	index-= 1;
// 		}
// 		document.getElementById(ids[index]).scrollIntoView(true);
// 	   }
// 	   lastScrollTop = st;
// 	}, false);
// 	// console.log(scrollY);
// 	// if (scrollY > 50) {
// 	//     if (index < 2) {
// 	//     	index-= 1;
// 	// 	}
// 	// 	document.getElementById(ids[index]).scrollIntoView({behavior: "auto"});
// 	// } else if (scrollY < -50) {
// 	//     if (index >= 0) {
// 	//     	index+= 1;
// 	// 	}
// 	// 	document.getElementById(ids[index]).scrollIntoView({behavior: "auto"});
// 	// }
// }

