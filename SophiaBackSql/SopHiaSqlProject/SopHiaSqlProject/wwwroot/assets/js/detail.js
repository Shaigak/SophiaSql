$(document).ready(function () {
    let elem = $(".currentcy i")
  
    let usd = $(".euro")
  
    let euro = $(".usd")
  
    let firsth1 = $(".currentcy h1")
  
    let euroClass = $(".currentcy h2")
  
  
  
    $(elem).click(function () {
      $(".valyuta").slideToggle().removeClass("d-none")
  
    })
  
  
    let valyuta = $(".valyuta .euro ");
  
    let valyutaUsd = $(".valyuta .dollar ");
  
    let changeMe = $(".valyuta .changeMe")
  
    let changeMeFirst = $(".valyuta .changeMeFirst")
  
   let eyesIcon=$(" .item2 .likeme  .fa-eye ")
  
   let eyesIcon2=$(".item5 .likeme .fa-eye")
  
   let eyesIcon3=$(".item6 .likeme .fa-eye")
  
   let eyesIcon4=$(".item7 .likeme .fa-eye")
  
   let eyesIcon5=$(".item8 .likeme .fa-eye")
  
   let eyesIcon6=$(".item9 .likeme .fa-eye")
  
   let eyesIcon7=$(".item10 .likeme .fa-eye")
  
   
  
  
  
  
  
  
  
  
   let box12=$(".box12")
  
   let box13=$(".box13")
  
   let box14=$(".box14")
   
   let box15=$(".box15")
  
   let box16=$(".box16")
  
   let box17=$(".box17")
  
   let box18=$(".box18")
  
   
  
  
   $(eyesIcon).click(function(){
    $(box12).removeClass("d-none")
   })
  
   $(eyesIcon2).click(function(){
    $(box13).removeClass("d-none")
   })
  
  
   $(eyesIcon3).click(function(){
    $(box14).removeClass("d-none")
   })
  
  
   $(eyesIcon4).click(function(){
    $(box15).removeClass("d-none")
   })
  
  
   $(eyesIcon5).click(function(){
    $(box16).removeClass("d-none")
   })
  
   $(eyesIcon6).click(function(){
    $(box17).removeClass("d-none")
   })
  
   $(eyesIcon7).click(function(){
    $(box18).removeClass("d-none")
   })
   
   
   
   
   let prodCount=$(".contact .icon2")
  
   let divCount=$(".contact .basketCount")
  
   let german=$(".german")

   let french=$(".french")

   let russia=$(".russian")

   let turkish=$(".turkish")

   let english=$(".english")



   let mainImg=$(".glag")
   let mainEng=$(".mainEng")

   let mainImg2=$(".glag2")
   let mainEng2=$(".mainEng2")

   let mainImg3=$(".glag3")
   let mainEng3=$(".mainEng3")

   let mainImg4=$(".glag4")
   let mainEng4=$(".mainEng4")

   let mainImg5=$(".glag5")
   let mainEng5=$(".mainEng5")

   let mainImg6=$(".glag6")
   let mainEng6=$(".mainEng6")

   let mainGerman=$(".german")

   $(english).click(function(){
       $(mainImg6).removeClass("d-none")
       $(mainEng6).removeClass("d-none")

       $(mainImg).addClass("d-none")
       $(mainEng).addClass("d-none")

       $(mainImg3).addClass("d-none")
       $(mainEng3).addClass("d-none")

       $(mainImg4).addClass("d-none")
       $(mainEng4).addClass("d-none")

       $(mainImg2).addClass("d-none")
       $(mainEng2).addClass("d-none")

       $(mainImg5).addClass("d-none")
       $(mainEng5).addClass("d-none")


   })

   
   
 


   

   $(german).click(function(){

       $(mainImg).addClass("d-none")
       $(mainEng).addClass("d-none")

       $(mainImg3).addClass("d-none")
       $(mainEng3).addClass("d-none")

       $(mainImg4).addClass("d-none")
       $(mainEng4).addClass("d-none")

       $(mainImg2).removeClass("d-none")
       $(mainEng2).removeClass("d-none")

       $(mainImg5).addClass("d-none")
       $(mainEng5).addClass("d-none")



   })

   $(french).click(function(){
       $(mainImg).addClass("d-none")
       $(mainEng).addClass("d-none")

       
       $(mainImg4).addClass("d-none")
       $(mainEng4).addClass("d-none")

       $(mainImg2).addClass("d-none")
       $(mainEng2).addClass("d-none")

       $(mainImg5).addClass("d-none")
       $(mainEng5).addClass("d-none")

       $(mainImg3).removeClass("d-none")
       $(mainEng3).removeClass("d-none")


       
   })

   $(russia).click(function(){
       $(mainImg).addClass("d-none")
       $(mainEng).addClass("d-none")


       $(mainImg3).addClass("d-none")
       $(mainEng3).addClass("d-none")

       $(mainImg2).addClass("d-none")
       $(mainEng2).addClass("d-none")

       $(mainImg5).addClass("d-none")
       $(mainEng5).addClass("d-none")




       $(mainImg4).removeClass("d-none")
       $(mainEng4).removeClass("d-none")
   })


   $(turkish).click(function(){
       $(mainImg).addClass("d-none")
       $(mainEng).addClass("d-none")

       $(mainImg3).addClass("d-none")
       $(mainEng3).addClass("d-none")

       $(mainImg4).addClass("d-none")
       $(mainEng4).addClass("d-none")

       $(mainImg2).addClass("d-none")
       $(mainEng2).addClass("d-none")

       $(mainImg5).removeClass("d-none")
       $(mainEng5).removeClass("d-none")
   })

   
  
    
  
  
   
    
  
  
   $(document).on("mouseover",".item .single-team-member",function(){

    $(this).children().eq(1).children().eq(0).addClass("hide-social")
    $(this).children().eq(1).children().eq(1).addClass("background")
    $(this).children().eq(0).css("opacity", "0.5")








    $(document).on("mouseout",".item .single-team-member",function(){

        $(this).children().eq(1).children().eq(0).removeClass("hide-social")
        $(this).children().eq(1).children().eq(1).removeClass("background")
        $(this).children().eq(0).css("opacity", "1")
    })
      
      
      
      
      
       
      
       
       $(prodCount).click(function(){
        $(divCount).removeClass("d-none")
      
       })
      
      
      
      
        $(valyuta).click(function () {
      
          $(changeMe).addClass("d-none")
          $(changeMeFirst).removeClass("d-none")
      
        })
      
      
        $(valyutaUsd).click(function () {
          $(changeMe).removeClass("d-none")
          $(changeMeFirst).addClass("d-none")
      
        })
      
        var menuHeader = document.querySelector('.menu-header');
    var menuContainer = document.querySelector('.menu-container');
    
    menuHeader.addEventListener('click', function() {
      menuContainer.classList.toggle('active');
    });
    
    // Flickity Init
    var flkty = new Flickity('.main-carousel', {
      draggable: false,
      prevNextButtons: false,
      pageDots: false,
      adaptiveHeight: true
    });
    
    })
    
    let inputs = document.querySelectorAll("form .inputs input");
    
    inputs.forEach(input => {
        input.addEventListener("blur", function () {
            if (this.value == "") {
                this.style.borderBottom = "1px solid red";
                this.nextElementSibling.nextElementSibling.style.color = "red";
                this.parentNode.lastElementChild.style.opacity = "1";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
                
            }
        })
    
    
        body.addEventListener("click", function(){
            inputs.value = "";
        })
    
        input.addEventListener("keyup", function () {
            if (this.value == "") {
                this.style.borderBottom = "1px solid red";
                this.parentNode.lastElementChild.style.opacity = "1";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
            }
    
            else {
                this.style.borderBottom = "1px solid #949494";
                this.parentNode.lastElementChild.style.opacity = "0";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "#ef6c00");
            }
        })
    
        input.addEventListener("focus", function () {
            this.nextElementSibling.nextElementSibling.style.color = "#ef6c00";
        })
    })
    
    let textarea = document.querySelector(" form .textarea textarea");
    
    textarea.addEventListener("blur", function () {
        if (this.value == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.nextElementSibling.style.color = "red";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
        }
    })
    
    textarea.addEventListener("keyup", function () {
        if (this.value == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
        }
    
        else {
            this.style.borderBottom = "1px solid #949494";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "#ef6c00");
        }
    })
    
    textarea.addEventListener("focus", function () {
        this.nextElementSibling.nextElementSibling.style.color = "#ef6c00";
    })
    
    let submit = document.querySelector("form button");
    
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        
        let checkValidation = false;
        let countOfEmpty = 0;
    
        for (const input of inputs) {
            if (input.value == "") {
                input.style.borderBottom = "1px solid red";
                input.nextElementSibling.nextElementSibling.style.color = "red";
                input.parentNode.lastElementChild.style.opacity = "1";
                input.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
    
                textarea.style.borderBottom = "1px solid red";
                textarea.nextElementSibling.nextElementSibling.style.color = "red";
                textarea.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
    
                countOfEmpty++;
            }
        }
    
        if (countOfEmpty == 0) {
            checkValidation = true;
        }
    
        if (!checkValidation) {
            return;
        }
    
        window.location.reload();
    })
    
   



})

const sliders = [...document.querySelectorAll(".slider__container")];
const sliderControlPrev = [...document.querySelectorAll(".slider__control.prev")];
const sliderControlNext = [...document.querySelectorAll(".slider__control.next")];

sliders.forEach((slider, i) => {
  let isDragStart = false,
      isDragging = false,
      isSlide = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;

  const sliderItem = slider.querySelector(".slider__item");
  var isMultislide = (slider.dataset.multislide === 'true');

  sliderControlPrev[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    slider.scrollLeft += -slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  sliderControlNext[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth ;
    slider.scrollLeft += slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  function autoSlide() {
    if(slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    let valDifference = slideWidth - positionDiff;
    if(slider.scrollLeft > prevScrollLeft) {
        return slider.scrollLeft += positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
    }
    slider.scrollLeft -= positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
  }

  function dragStart(e) {
    if (isSlide) return;
    isSlide = true;
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
    setTimeout(function(){ isSlide = false; }, 700);
  }

  function dragging(e) {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
  }

  function dragStop() {
    isDragStart = false;
    slider.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
  }

  addEventListener("resize", autoSlide);
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("touchstart", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("touchmove", dragging);
  slider.addEventListener("mouseup", dragStop);
  slider.addEventListener("touchend", dragStop);
  slider.addEventListener("mouseleave", dragStop);
});


// ------------------------------------------------

// ----count-plus-minis----
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
