var itemBuy=document.querySelector(".item-buy"),catalogList=document.querySelector(".catalog-list"),CartSuccess=document.querySelector(".product-cart"),goButton=document.querySelector(".go-button"),CartSuccessClose=document.querySelector(".close-modal-cart"),mail=document.querySelector(".mail-button"),CloseFeedback=document.querySelector(".feedback-close"),feedback=document.querySelector(".feedback-modal"),minimap=document.querySelector(".mini-map"),bigmap=document.querySelector(".big-map"),mapclose=document.querySelector(".map-close"),focusName=document.querySelector(".input-name"),next=document.querySelector(".slider-arrow-right"),previous=document.querySelector(".slider-arrow-left"),sliders=document.querySelectorAll(".sliders .slide"),pagination=document.querySelectorAll(".pagination-buttons .pagination-button"),currentSlide=0,paginationCurrent=0,slideInterval=setInterval(nextSlide,4e3),pause=document.querySelector(".slider-div");function nextSlide(){goToSlide(currentSlide+1)}function previousSlide(){goToSlide(currentSlide-1)}function goToSlide(e){sliders[currentSlide].className="slide",pagination[paginationCurrent].className="pagination-button",currentSlide=(e+sliders.length)%sliders.length,paginationCurrent=currentSlide,sliders[currentSlide].className="slide slide-show",pagination[paginationCurrent].className="pagination-button pagination-button-current"}next.onclick=function(){nextSlide()},previous.onclick=function(){previousSlide()},pause.addEventListener("mouseover",function(){clearInterval(slideInterval)}),pause.addEventListener("mouseout",function(){slideInterval=setInterval(nextSlide,4e3)}),mail.addEventListener("click",function(e){e.preventDefault(),feedback.classList.add("modal-show"),focusName.focus()}),CloseFeedback.addEventListener("click",function(e){e.preventDefault(),feedback.classList.remove("modal-show")}),minimap.addEventListener("click",function(e){e.preventDefault(),bigmap.classList.add("modal-show")}),mapclose.addEventListener("click",function(e){e.preventDefault(),bigmap.classList.remove("modal-show")}),catalogList.addEventListener("click",function(e){e.target.classList.contains("item-buy")&&(e.preventDefault(),CartSuccess.classList.add("modal-show"))}),CartSuccessClose.addEventListener("click",function(e){e.preventDefault(),CartSuccess.classList.remove("modal-show")}),goButton.addEventListener("click",function(e){e.preventDefault(),CartSuccess.classList.remove("modal-show")});