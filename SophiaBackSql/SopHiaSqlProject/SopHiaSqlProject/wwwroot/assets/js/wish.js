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

   let clear=$(".clear")

   let table=$("tbody")

   let alert=$(".alertvish")
   console.log(alert);

  
  
   $(clear).click(function(){

    table.remove()

    $(alert).removeClass("d-none")



    localStorage.setItem("heart",products2)
    
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
 })


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
  

 
 
 


})


let table = $("tbody")



 let products2 = JSON.parse(localStorage.getItem("heart"))



 getBasket();
 
 function getBasket(){
  for (const product of $(products2)) {

  
    let elems = table.html();
  
    elems += `<tr data-id=${product.id}>
    <td>
    <img src="${product.img}" alt=""></img>
    </td>
    <td><a href="">${product.name}</a></td>
    <td class="price">${product.price}</td>
    <td><i class="fa-solid fa-x delete"></i></td>
    
  </tr>`
    
  
  table.html(elems)
  
}}


 




function deleteProduct(id){

  products=products2.filter(m=>m.id!=id)

 localStorage.setItem("heart",JSON.stringify(products))

}

let deletem=document.querySelectorAll(".delete")



deletem.forEach(icon => {
  
  icon.addEventListener("click",function(){
    let id=parseInt(this.parentNode.parentNode.getAttribute("data-id"))
    

    deleteProduct(id)
    
    window.location.reload()
  })
});                       