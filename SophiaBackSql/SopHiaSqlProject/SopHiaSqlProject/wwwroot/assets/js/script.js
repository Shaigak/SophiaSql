$(document).ready(function () {
    let elem = $(".currentcy i")

    let usd = $(".euro")

    let euro = $(".usd")

    let firsth1 = $(".currentcy h1")

    let euroClass = $(".currentcy h2")

    let iconCart=$(".contact .icon2")

    let backIcon=$("#box .deleteIcon")

   $(backIcon).click(function(){

    $(box12).addClass("d-none")
    $(box13).addClass("d-none")
    $(box14).addClass("d-none")
    $(box15).addClass("d-none")
    $(box16).addClass("d-none")
    $(box17).addClass("d-none")
    $(box18).addClass("d-none")
    
       })
    



    $(iconCart).click(function(){
        
        $(".basketUp").removeClass("d-none")
    })





    $(elem).click(function () {
        $(".valyuta").slideToggle().removeClass("d-none")

    })

      





    let btnButton2 = $(".buttonadd")

    let products = [];

    let prodUp=[];

    if (JSON.parse(localStorage.getItem("basket")) != null) {
        products = JSON.parse(localStorage.getItem("basket"));
    }



    $(btnButton2).click(function () {

        let productPicture = $(this).parent().parent().children().eq(0).attr("src")

        let productPrice = $(this).parent().prev().prev().text()

        

        let productName = $(this).parent().parent().children().eq(2).text()

        let productId = $(this).parent().parent().parent().attr("data-id")

        let existProduct = products.find(m => m.id == productId)

        if (existProduct != undefined) {
            existProduct.count += 1;
            existProduct.price*=existProduct.count
        }else{
            products.push({
                id: productId,
                name: productName,
                price: productPrice,
                img: productPicture,
                count: 1

            })
    

        }


        
        localStorage.setItem("basket", JSON.stringify(products))
        getBasketCount(products)
        
        totalPrice(products)
        getBasketCount2(products)


        let productUp=$(".basketUp")

        productUp.push({
            name:productName,
            img:productPicture,
            price:productPrice
        })

        localStorage.setItem("upDown",JSON.stringify(productUp))

        let prodCount=$(".addProd")

        if(existProduct!=null){
        $(prodCount).addClass("d-none")

        }else{
            $(prodCount).removeClass("d-none")
        }

        
    });

    let heartProduct=[]
    let heartIcon =$("#product33 .fa-heart")

    $(heartIcon).click(function(){
        
     let heartImg=$(this).parent().parent().children().eq(0).attr("src")
     let heartName=$(this).parent().parent().children().eq(1).text()
     let heartPrice=$(this).parent().next().next().next().next().next().next().text()
     let heartId=$(this).parent().parent().parent().attr("data-id")
     

     heartProduct.push({
        id:heartId,
        img:heartImg,
        name:heartName,
        price:heartPrice

     })
     
     
     localStorage.setItem("heart", JSON.stringify(heartProduct))
     
    })


    
    
    
    function getBasketCount(arr){
        let sum=0
        
        for (const item of arr) {
          sum+=item.count
        }
         
          document.querySelector(".count").innerText=arr.length
      
      }
      getBasketCount(products)
      totalPrice(products)
      getBasketCount2(products)

      
      
      function getBasketCount2(arr){

        let sum=0
      
        for (const item of arr) {
          sum+=item.count
        }
         
          document.querySelector(".itemcoun").innerText=arr.length
      
      
      }



    let valyuta = $(".valyuta .euro ");

    let valyutaUsd = $(".valyuta .dollar ");

    let changeMe = $(".valyuta .changeMe")

    let changeMeFirst = $(".valyuta .changeMeFirst")

    let eyesIcon = $(" .item2 .likeme  .fa-eye ")

    let eyesIcon2 = $(".item5 .likeme .fa-eye")

    let eyesIcon3 = $(".item6 .likeme .fa-eye")

    let eyesIcon4 = $(".item7 .likeme .fa-eye")

    let eyesIcon5 = $(".item8 .likeme .fa-eye")

    let eyesIcon6 = $(".item9 .likeme .fa-eye")

    let eyesIcon7 = $(".item10 .likeme .fa-eye")


    let box12 = $(".box12")

    let box13 = $(".box13")

    let box14 = $(".box14")

    let box15 = $(".box15")

    let box16 = $(".box16")

    let box17 = $(".box17")

    let box18 = $(".box18")


    let btnButton = $(".buttonadd")



    $(eyesIcon).click(function () {
        $(box12).removeClass("d-none")
    })

    $(eyesIcon2).click(function () {
        $(box13).removeClass("d-none")
    })


    $(eyesIcon3).click(function () {
        $(box14).removeClass("d-none")
    })


    $(eyesIcon4).click(function () {
        $(box15).removeClass("d-none")
    })


    $(eyesIcon5).click(function () {
        $(box16).removeClass("d-none")
    })

    $(eyesIcon6).click(function () {
        $(box17).removeClass("d-none")
    })

    $(eyesIcon7).click(function () {
        $(box18).removeClass("d-none")
    })




    let prodCount = $(".contact .icon2")

    let divCount = $(".contact .basketCount")


    $(prodCount).click(function () {
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


    $("#slideshow > div:gt(0)").hide();

    var buttons = "<button class=\"slidebtn prev\"><i class=\"fa fa-chevron-circle-left\"></i></button><button class=\"slidebtn next\"><i class=\"fa fa-chevron-circle-right\"></i></button\>";

    var slidesl = $('.slideitem').length
    var d = "<li class=\"dot active-dot\">&bull;</li>";
    for (var i = 1; i < slidesl; i++) {
        d = d + "<li class=\"dot\">&bull;</li>";
    }
    var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";

    $("#slideshow").append(dots).append(buttons);
    var interval = setInterval(slide, 3000);

    function intslide(func) {
        if (func == 'start') {
            interval = setInterval(slide, 3000);
        } else {
            clearInterval(interval);
        }
    }

    function slide() {
        sact('next', 0, 1200);
    }

    function sact(a, ix, it) {
        var currentSlide = $('.current');
        var nextSlide = currentSlide.next('.slideitem');
        var prevSlide = currentSlide.prev('.slideitem');
        var reqSlide = $('.slideitem').eq(ix);

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        var prevDot = currentDot.prev();
        var reqDot = $('.dot').eq(ix);

        if (nextSlide.length == 0) {
            nextDot = $('.dot').first();
            nextSlide = $('.slideitem').first();
        }

        if (prevSlide.length == 0) {
            prevDot = $('.dot').last();
            prevSlide = $('.slideitem').last();
        }

        if (a == 'next') {
            var Slide = nextSlide;
            var Dot = nextDot;
        }
        else if (a == 'prev') {
            var Slide = prevSlide;
            var Dot = prevDot;
        }
        else {
            var Slide = reqSlide;
            var Dot = reqDot;
        }

        currentSlide.fadeOut(it).removeClass('current');
        Slide.fadeIn(it).addClass('current');

        currentDot.removeClass('active-dot');
        Dot.addClass('active-dot');
    }

    $('.next').on('click', function () {
        intslide('stop');
        sact('next', 0, 400);
        intslide('start');
    });//next

    $('.prev').on('click', function () {
        intslide('stop');
        sact('prev', 0, 400);
        intslide('start');
    });//prev

    $('.dot').on('click', function () {
        intslide('stop');
        var index = $(this).index();
        sact('dot', index, 400);
        intslide('start');
    });//prev



    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    var owl = $("#owl-demo"),
        status = $("#owlStatus");

    owl.owlCarousel({
        navigation: true,
        afterAction: afterAction
    });

    function updateResult(pos, value) {
        status.find(pos).find(".result").text(value);
    }

    function afterAction() {
        updateResult(".owlItems", this.owl.owlItems.length);
        updateResult(".currentItem", this.owl.currentItem);
        updateResult(".prevItem", this.prevItem);
        updateResult(".visibleItems", this.owl.visibleItems);
        updateResult(".dragDirection", this.owl.dragDirection);
    }

    $('.owl-carousel').owlCarousel({

        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }




    })

    "use strict"

    const tabLink = document.querySelectorAll(".tab-menu-link");
    const tabContent = document.querySelectorAll(".tab-bar-content");

    tabLink.forEach((item) => {
        item.addEventListener("click", activeTab);
    });

    function activeTab(item) {
        const btnTarget = item.currentTarget;
        const content = btnTarget.dataset.content;

        tabContent.forEach((item) => {
            item.classList.remove("is-active");
        });

        tabLink.forEach((item) => {
            item.classList.remove("is-active");
        });

        document.querySelector("#" + content).classList.add("is-active");
        btnTarget.classList.add("is-active");
    }

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


    let addButton=$(".buttonadd")

    let table=$("tbody")
   
    let products2=JSON.parse(localStorage.getItem("basket"))
    

    for (const prod of $(products2)) {

        let elems=table.html();

        elems+= `<tr>
                                       
        <td ><a  class="hastag" href=""><b>${prod.count +"x" }  </b></a></td>
        <td><td>  <a class="hastag" href=""><b>${prod.name}</b></a></td></td>
        <td><td>  <a class="hastag" href=""><b>${prod.price}</b></a></td></td>
      
        
        
        <td></td>
        
    

    </tr>`
    
    table.html(elems)
    
        
    }
    

});


let imgBtn = document.querySelectorAll("#product33 .buttonadd")

imgBtn.forEach(btn => {

    btn.addEventListener("click", function () {



    })
})



let inputs = document.querySelectorAll("main #content .form .right form .inputs input");

inputs.forEach(input => {
    input.addEventListener("blur", function () {
        if (this.value == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.nextElementSibling.style.color = "red";
            this.parentNode.lastElementChild.style.opacity = "1";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
        }
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

let textarea = document.querySelector("main #content .form .right form .textarea textarea");

function totalPrice(arr){
  
    

    let sum = 0;
    for (const item of arr) {
     sum += parseInt(item.price)*parseInt(item.count);
    }
    
    document.querySelector(".price ").innerText=sum +"$";


}

//  let plusbox=document.querySelector(".box12 .plus")


//  plusbox.addEventListener("click",function(){
    
//     plusbox.previousElementSibling.previousElementSibling.value++;

//     if(plusbox.previousElementSibling.previousElementSibling.value==0){
//         return;
//     }
//  })


//  let minusbox=document.querySelector(".box12 .minus")


//  minusbox.addEventListener("click",function(){
//     if(minusbox.previousElementSibling.value==0){
//         return;
//     }
    
//     minusbox.previousElementSibling.value--;
   
//  })


let plusBox=document.querySelectorAll("#box .plus")

plusBox.forEach(elem => {

    elem.addEventListener("click",function(){
        
        elem.previousElementSibling.previousElementSibling.value ++;
    })
    
});


let minusBox=document.querySelectorAll("#box .minus")

minusBox.forEach(elem => {

    elem.addEventListener("click",function(){
        if(elem.previousElementSibling.value==0){
            return;
            }
        
        elem.previousElementSibling.value --;
    })
    
});