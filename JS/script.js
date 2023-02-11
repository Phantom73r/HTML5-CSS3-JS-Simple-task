var btn=document.querySelectorAll(".btn")
var prices=document.querySelector(".prices")
var totalprice=0
var productName=document.querySelectorAll(".ConsoleName")
var selected=document.querySelector(".selected-items")



btn.forEach(function(item){
    item.onclick=function(){
        totalprice+=parseInt(item.getAttribute("price"))
        prices.innerHTML=totalprice
      selected.innerHTML+=item.getAttribute("name")+"|"
       } })
    
    