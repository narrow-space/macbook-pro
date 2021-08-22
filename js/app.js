
const button8gb=document.getElementById('8gb-btn');
const button16gb=document.getElementById('16gb-btn');
const buttonssd256=document.getElementById('ssd-256');
const buttonssd512=document.getElementById('ssd-512');
const buttonssd1tb=document.getElementById('ssd-1tb');
const latedelevery=document.getElementById('late-delevery');
const fastdelevery=document.getElementById('fast-delevery');
const total=document.getElementById('total-price');
const bestprice=document.getElementById('best-price');
const extramemoryprice=document.getElementById('memory-cost');
const extrastorageprice=document.getElementById('storage-cost');
const deleverycost=document.getElementById('delevery-cost');
// 8 gbbtn
button8gb.addEventListener('click',function(){
   extramemoryprice.innerText=0;
   updatetotal()
})
//  16Gbbutton
button16gb.addEventListener('click',function(){
  
    extramemoryprice.innerText=180;
    updatetotal()
})
//  ssd 256
buttonssd256.addEventListener('click',function(){
    extrastorageprice.innerText=0;
    updatetotal()
})
    
// ssd 512
buttonssd512.addEventListener('click',function(){
    extrastorageprice.innerText=100;
    updatetotal()
})
// ssd 1Tb
buttonssd1tb.addEventListener('click',function(){
    extrastorageprice.innerText=180;
    updatetotal()
})
// late delevery
latedelevery.addEventListener('click',function(){
    deleverycost.innerText=0;
    updatetotal()
})
// fast delevery
fastdelevery.addEventListener('click',function(){
    deleverycost.innerText=20;
    updatetotal()

})

// caculate Total by function

function updatetotal(){
    
    const memoryfiled=Number(extramemoryprice.innerText);
    const bestpricefield=Number(bestprice.innerText);
    const storagefield=Number(extrastorageprice.innerText);
    const deleveryfield=Number(deleverycost.innerText);

    const Total=memoryfiled+bestpricefield+storagefield+deleveryfield;
     total.innerText=Total
   
    
}

   