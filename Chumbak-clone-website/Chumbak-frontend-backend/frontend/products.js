//-- addCart function--//
let cart=[]
let cartCount=0

const countCart=document.querySelector(".cart-count")

function addCart(id){
    const  allProduct=[...productTwo, ...products]
    const findProduct=allProduct.find((item)=>{
        return item.id===id
    })
     if(findProduct){
        findProduct.quantity=1
         cart.push(findProduct)
      }

    countCart.innerText = cart.length;
    if(cart.length > 0) addCartIconPara.style.backgroundColor = "red";
    showProduct();
}

// show products on cart page (showCartDiv)//
let showCartDiv=document.querySelector(".Show-products")
//function for calculating total,grand-total and showing dynamic html-//
function showProduct(){
    
    let grandTotal=0
    let total=0
    showCartDiv.innerHTML=""
    cart.forEach((items)=>{

        //-calculating total price-//
        total=items.price*items.quantity

        // adding dynamic html//
        grandTotal+=total
        let div=document.createElement("div")
        div.classList.add("Show-on-cart")

        div.innerHTML=`
        <img src="${items.img1}">
         <div>
          <p class="items-name">${items.name}</p>
          
          <div class=" increase-decrease-price">
          <div class="increase-decrease-btns">
          <button onClick="decrease(${items.id})" class="btn-minus">-</button>
          <small class="items-Added">${items.quantity}</small>
          <button onClick="increase(${items.id})" class="btn-plus" >+</button>
          </div>
          <p class="product-price">₹${ total}</p>
          </div>
         </div>
          <button onClick="deleteItems(${items.id})" class="delete-btn"> Delete</button>
        `

        showCartDiv.appendChild(div)
    })
    
}

// open-close- addCart section//
openAddCartIcon.addEventListener("click",()=>{
    body.classList.add("active")
})
//--//
closeAddCartIcon.addEventListener("click",()=>{
    body.classList.remove("active")
})



// function for delet items from array//
function deleteItems(id){
    cart=cart.filter((products)=>{
        return products.id!==id
    })
       cartCount--
      countCart.innerText=cartCount
     
      if(cartCount<0){
         countCart.innerText="0"
      }
     showProduct()
      //--//
      if(countCart.innerText==="0"){
          addCartIconPara.style.backgroundColor="white"
      }
}

// function of increase/ decrease  items //
function increase(id){
   cart.forEach((item)=>{
       if(item.id===id){
        item.quantity+=1
       }
   })
   showProduct()
}
// decrease btn//
function decrease(id){
    cart.forEach((items)=>{

        if(items.id===id){
            items.quantity-=1
        }
        

         if(items.quantity<1){
                items.quantity=1
               
            }
        })
    showProduct()
}


<button onClick="addCart(${findProduct.id})">ADD TO CART</button>