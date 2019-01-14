			var itemBuy = document.querySelector(".item-buy");
            var catalogList = document.querySelector(".catalog-list");
            var CartSuccess = document.querySelector(".product-cart");
            var goButton = document.querySelector(".go-button");
            var CartSuccessClose = document.querySelector(".close-modal-cart");

            catalogList.addEventListener("click", function (evt) {
                
                var target= evt.target;
                if(target.classList.contains("item-buy")) {
                    evt.preventDefault();
                    CartSuccess.classList.add("modal-show");
                }
            });
			CartSuccessClose.addEventListener("click", function (evt) {
				evt.preventDefault();
				CartSuccess.classList.remove("modal-show");
			});
            
			goButton.addEventListener("click", function (evt) {
				evt.preventDefault();
				CartSuccess.classList.remove("modal-show");
			});