 const burger =document.getElementById("burger");
 const mobileNav=document.getElementById("mobile-nav");

 function toggle(){
	 if(mobileNav.style.display === "none" ){
		 mobileNav.style.display = "block";
	 }
	 else{mobileNav.style.display = "none";}
 }
 
 burger.addEventListener("click", toggle) 