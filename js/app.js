// Extra Memory Function
function memoryPrice(isit8gb){
    const memorycost=document.getElementById('memory-cost');
    if(isit8gb == true){
        memorycost.innerText=0

    }
    else{
        memorycost.innerText=180;
    }     
}

document.getElementById('8gb-btn').addEventListener('click',function(){
    memoryPrice(true)    
})

document.getElementById('16gb-btn').addEventListener('click',function(){
    memoryPrice(false)   
})

// Extra Storage Function
function storagePrice(ssd){
    const storagecostfield=document.getElementById('storage-cost');
    if(ssd==true){
        storagecostfield.innerText=0;

    }
    else if(ssd==false){
        storagecostfield.innerText=100;

    }
    else {
        storagecostfield.innerText=180;

    }
   

}

document.getElementById('ssd-256').addEventListener('click',function(){
    storagePrice(true)
})

document.getElementById('ssd-512').addEventListener('click',function(){
   storagePrice(false)
})

document.getElementById('ssd-1tb').addEventListener('click',function(){
    storagePrice()
})

// Delevery Cost Function

  function deleveryprice(delevery){
    const storagecostfield=document.getElementById('delevery-cost');
   if(delevery==true){
    storagecostfield.innerText=0;

   }
   else{
    storagecostfield.innerText=20;

   }
   
}
document.getElementById('late-delevery').addEventListener('click',function(){
    deleveryprice(true)
})

document.getElementById('fast-delevery').addEventListener('click',function(){
    deleveryprice(false)
})

// totalPrice

// 8 gb
document.getElementById('8gb-btn').addEventListener('click',function(){    
    
     
     const storagefield=document.getElementById('storage-cost').innerText;
     const storagePricenumber=parseInt(storagefield);

     const deleverycostfield=document.getElementById('delevery-cost').innerText;
     
     const deleverycostfieldnumber= parseInt(deleverycostfield); 

     const bestpricefield=document.getElementById('best-price').innerText;
     const bestpricefieldnumber=parseInt(bestpricefield);

     const totalpricefield=document.getElementById('total-price');

     if(bestpricefieldnumber==1299&&storagePricenumber==180){
        totalpricefield.innerText=1479;
     }
     
     else if(bestpricefieldnumber==1299&&storagePricenumber==100){
        totalpricefield.innerText=1399;
      }
      
    else if(deleverycostfieldnumber=0){
       
        totalpricefield.innerText=1299;

     }

     else if(storagePricenumber==100){
        totalpricefield.innerText=1399 

     }
     else if(storagePricenumber==180){
        totalpricefield.innerText=1479; 
     }
     else if(deleverycostfieldnumber==20){
        totalpricefield.innerText=1319;


     }
     
     
     else{
        totalpricefield.innerText=1299 

     }
     
     ;
     
})
// 16gb btn
document.getElementById('16gb-btn').addEventListener('click',function(){
    const storagefield=document.getElementById('storage-cost').innerText;
    const extrastoragecost=parseInt(storagefield);

    const memorypricefield=document.getElementById('memory-cost')
    const  memorypricefieldnumber=memorypricefield.innerText;
    const memorypricenumber=parseInt(memorypricefieldnumber);

    const deleverycostfield=document.getElementById('delevery-cost').innerText;
     
    const deleverycostfieldnumber= parseInt(deleverycostfield);

    const totalpricefield=document.getElementById('total-price');
    if(storagefield==100){
        totalpricefield.innerText=1579;

        


    }
    
    else if(deleverycostfieldnumber==20){
        totalpricefield.innerText=1499;
    }

    else if(extrastoragecost==0){
        totalpricefield.innerText=1479;
    }


    else if(memorypricenumber==180){
        totalpricefield.innerText=1659;
    }

    

    
    
     
  
      
     
})

// ssd 256gb


document.getElementById('ssd-256').addEventListener('click',function(){
    const memorypricefield=document.getElementById('memory-cost')
     const  memorypricefieldnumber=memorypricefield.innerText;
     const memorypricenumber=parseInt(memorypricefieldnumber)
     const deleverycostfield=document.getElementById('delevery-cost').innerText;

     const deleverycostfieldnumber= parseInt(deleverycostfield); 


     const storagefield=document.getElementById('storage-cost').innerText;
     const extrastoragecost=parseInt(storagefield);

     const bestpricefield=document.getElementById('best-price').innerText;
     const bestpricefieldnumber=parseInt(bestpricefield);
     

    const totalpricefield=document.getElementById('total-price');
     
     if(bestpricefieldnumber==1299&&memorypricenumber==180&&deleverycostfieldnumber==20){
        totalpricefield.innerText=1499;
     }


    else if(deleverycostfieldnumber==20){
        totalpricefield.innerText=1319;
    }

  else if(memorypricenumber==0){
    totalpricefield.innerText=1299;
  }
 



    else if(memorypricenumber==180){
        totalpricefield.innerText=1479;

    }
    
  
   
})












// ssd 512gb

document.getElementById('ssd-512').addEventListener('click',function(){
    
    const memorypricefield=document.getElementById('memory-cost')
     const  memorypricefieldnumber=memorypricefield.innerText;
     const memorypricenumber=parseInt(memorypricefieldnumber)
     

     const bestpricefield=document.getElementById('best-price').innerText;
     const bestpricefieldnumber=parseInt(bestpricefield);


     const storagefield=document.getElementById('storage-cost').innerText;
     const extrastoragecost=parseInt(storagefield);

     const deleverycostfield=document.getElementById('delevery-cost').innerText;

     const deleverycostfieldnumber= parseInt(deleverycostfield);

     
    const totalpricefield=document.getElementById('total-price');
    
    
    if(deleverycostfieldnumber==20){
        totalpricefield.innerText=1419;
    }

    else if(memorypricenumber==0){
        totalpricefield.innerText=1399;
    }

    
    else if(memorypricenumber==180) {
        totalpricefield.innerText=1579;
    }

    else if(bestpricefieldnumber==1299 && memorypricenumber==0 && extrastoragecost==100 && deleverycostfieldnumber==20){
        totalpricefield.innerText=1419;
    }
     
})

// ssd 1tb


document.getElementById('ssd-1tb').addEventListener('click',function(){
    const memorypricefield=document.getElementById('memory-cost')
     const  memorypricefieldnumber=memorypricefield.innerText;
     const memorypricenumber=parseInt(memorypricefieldnumber)
     console.log(memorypricenumber);
     const deleverycostfield=document.getElementById('delevery-cost').innerText;

     const deleverycostfieldnumber= parseInt(deleverycostfield);

     const bestpricefield=document.getElementById('best-price').innerText;
     const bestpricefieldnumber=parseInt(bestpricefield);

    
     
    const totalpricefield=document.getElementById('total-price');

    if(bestpricefieldnumber==1299&&memorypricenumber==180&&deleverycostfieldnumber==20){
        totalpricefield.innerText=1679;
    }
     
    
    else if(deleverycostfieldnumber==20){
        totalpricefield.innerText=1499;
     }

    else if(memorypricenumber==0){
        totalpricefield.innerText=1479;

    }
    else if(memorypricenumber==180){
        totalpricefield.innerText=1659;
    }
    
   
})

// delevery btn

// first delevrybtn
document.getElementById('fast-delevery').addEventListener('click',function(){
     const bestpricefield=document.getElementById('best-price').innerText;
     const bestpricefieldnumber=parseInt(bestpricefield);
     const deleverycostfield=document.getElementById('delevery-cost').innerText;

     const deleverycostfieldnumber= parseInt(deleverycostfield); 
     console.log(deleverycostfieldnumber);
     const memorypricefield=document.getElementById('memory-cost')
     const  memorypricefieldnumber=memorypricefield.innerText;
     const memorypricenumber=parseInt(memorypricefieldnumber);

     const storagefield=document.getElementById('storage-cost').innerText;
     const extrastoragecost=parseInt(storagefield);
     
     const totalpricefield=document.getElementById('total-price')
       
     if(bestpricefieldnumber==1299 &&memorypricenumber==180&&extrastoragecost==180){
        totalpricefield.innerText=1679;
     }
     
   else if(bestpricefieldnumber==1299 && memorypricenumber==0&&extrastoragecost==180){

        totalpricefield.innerText=1499;


     }
     
   else  if(bestpricefieldnumber==1299&&deleverycostfieldnumber==20&&memorypricenumber==180){
        totalpricefield.innerText=1499;
     }

     
     else if(bestpricefieldnumber==1299&&memorypricenumber==0&&extrastoragecost==100){
        totalpricefield.innerText=1419
     }


    else if(bestpricefieldnumber==1299&&deleverycostfieldnumber==20){
        totalpricefield.innerText=1319;

     }
    })


document.getElementById('late-delevery').addEventListener('click',function(){ 

    const bestpricefield=document.getElementById('best-price').innerText;
     const bestpricefieldnumber=parseInt(bestpricefield);
     const deleverycostfield=document.getElementById('delevery-cost').innerText;

     const deleverycostfieldnumber= parseInt(deleverycostfield); 
     console.log(deleverycostfieldnumber);
     const memorypricefield=document.getElementById('memory-cost')
     const  memorypricefieldnumber=memorypricefield.innerText;
     const memorypricenumber=parseInt(memorypricefieldnumber);

     const storagefield=document.getElementById('storage-cost').innerText;
     const extrastoragecost=parseInt(storagefield);
     
     const totalpricefield=document.getElementById('total-price')
     
     if(bestpricefieldnumber==1299&&memorypricenumber==180&&extrastoragecost==180){
        totalpricefield.innerText=1659;
     }

    else if(bestpricefieldnumber==1299&&memorypricenumber==180&&extrastoragecost==100){
        totalpricefield.innerText=1579;
     }
     
     
    else if(memorypricenumber==180){
        totalpricefield.innerText=1479;

     }
     else  if(deleverycostfieldnumber==0){
        totalpricefield.innerText=1299;

     }
     
     
   




})




     


   

     

     

     
    


    







