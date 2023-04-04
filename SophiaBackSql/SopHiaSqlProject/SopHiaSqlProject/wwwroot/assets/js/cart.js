$(document).ready(function () {
  let elem = $(".currentcy i")

  let usd = $(".euro")

  let euro = $(".usd")

  let firsth1 = $(".currentcy h1")

  let euroClass = $(".currentcy h2")



  $(elem).click(function () {
    $(".valyuta").slideToggle().removeClass("d-none")

  })

  //     <tr>
  //     <td><img src="${product.img}" alt=""></td>
  //     <td><a href="">Salam</a></td>
  //     <td>0</td>
  //     <td>
  //         <button><i class="fa-solid fa-minus"></i></button>
  //         <input type="text" disabled>
  //         <button><i class="fa-solid fa-plus"></i></button>
  //     </td>
  //     <td class="price">0</td>
  //     <td><i class="fa-solid fa-x"></i></td>
  // </tr>





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



});




let imgBtn = document.querySelectorAll("#product33 .buttonadd")

imgBtn.forEach(btn => {

  btn.addEventListener("click", function () {




  })
})


let table = $("tbody")

let products = JSON.parse(localStorage.getItem("basket"))

getBasket()

 function getBasket(){
  for (const product of $(products)) {

  
    let elems = table.html();
  
    elems += `<tr data-id=${product.id}>
    <td>
    <img src="${product.img}" alt=""></img>
    </td>
    <td><a href="">${product.name}</a></td>
    <td><a href="">${product.price} $</a></td>
    <td> 
      <button><i class="fa-solid fa-minus minus"></i></button>
      <input type="text" value="${product.count}">
       <button><i class="fa-solid fa-plus plas"></i></button>
    </td>
    <td class="countd">${product.count*product.price} $</td>
    <td><i class="fa-solid fa-x delete"></i></td>
    
  </tr>`
   
  table.html(elems)
  
    getBasketCount(products)
    
  }

}





getBasketCount(products)
totalPrice(products);
totalPrice2(products);






function totalPrice2(arr){
  
    

  let sum = 0;
  for (const item of arr) {
   sum += parseInt(item.price)*parseInt(item.count);
  }
  
  document.querySelector(".price ").innerText=sum +"$";

  


}

let plus=$("td .fa-plus")

let iconValue=$(this).parent().prev().attr("value")

// function getBasketCount2(arr){

//   let sum=0

//   for (const item of arr) {
//     sum+=item.count
//   }
   
//     document.querySelector(".itemcoun").innerText=arr.length


// }




$(plus).click(function(){

  

  let iconValue=$(this).parent().prev().attr("value")


})

function getBasketCount(arr){

  let sum=0

  for (const item of arr) {
    sum+=item.count
  }
   
    document.querySelector(".count").innerText=arr.length

   


}

function totalPrice(arr){
  

    let sum = 0;
    for (const item of arr) {
     sum += parseInt(item.price)*parseInt(item.count);
    }
    
    document.querySelector(".grandprice").innerText=sum;

   


}





function deleteIcon(id){

  products=products.filter(m=>m.id!=id)


}


function plas(){
  let plas=document.querySelectorAll(".plas")


for (const item of plas) {
  item.addEventListener("click",function(){
    
  
    for (const product of products) {

      if(product.id==item.parentNode.parentNode.parentNode.getAttribute("data-id")){


        item.parentNode.previousElementSibling.value ++;

        product.count++;

        item.parentNode.parentNode.nextElementSibling.innerText="$" + product.price*product.count;

      }
      
    }

    localStorage.setItem("basket",JSON.stringify(products))

    totalPrice();
    getBasketCount(products)
  })

}
}
plas();




function minus(){
  let minus=document.querySelectorAll(".minus")


for (const item of minus) {

  item.addEventListener("click",function(){
    
    for (const prod of products) {

      if(prod.id==item.parentNode.parentNode.parentNode.getAttribute("data-id")){
        item.parentNode.nextElementSibling.value --;

        prod.count--;

        item.parentNode.parentNode.nextElementSibling.innerText="$" + item.price*item.count;

      }
      
     }
     localStorage.setItem("basket",JSON.stringify(products))

     totalPrice();
     getBasketCount(products)

     
  } )

}

}

minus();


 

function deleteProduct(id){

  products=products.filter(m=>m.id!=id)

 localStorage.setItem("basket",JSON.stringify(products))

}

let deleteIcon2=document.querySelectorAll(".delete")



deleteIcon2.forEach(icon => {
  icon.addEventListener("click",function(){
    let id=parseInt(this.parentNode.parentNode.getAttribute("data-id"))
    

    deleteProduct(id)
    

    window.location.reload()
  })
});



// function totalPrice3(arr){
  

//   let sum = 0;
//   for (const item of arr) {
//    sum += parseInt(item.price)*parseInt(item.count);
   
//   }

//   document.querySelector(".countd").innerText=sum;

// }

// totalPrice3()


// function totalPrice3(arr){
  

//   let sum = 0;
//   for (const item of products) {
//    sum += parseInt(item.price)*parseInt(item.count);
   
//   }

//   document.querySelector(".countd").innerText=sum;

// }


