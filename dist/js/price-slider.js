for(var priceSection=document.querySelector(".price"),priceRadioButtons=document.querySelectorAll(".slider__input-radio[type='radio'][name='price']"),priceVaries=["price--left","price--center","price--right"],activeVariety="price--center",i=0;i<priceRadioButtons.length;i++)priceRadioButtons[i].addEventListener("click",function(){priceSection.classList.remove(activeVariety),activeVariety=priceVaries[this.value-1],priceSection.classList.add(activeVariety)});