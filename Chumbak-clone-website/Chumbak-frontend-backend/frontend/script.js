// home page scripting//
const body=document.querySelector("body")
const heroSlider=document.querySelectorAll(" .hero-posters")
//--//
const openAddCartIcon=document.querySelector(".add-cart-icon-para")
const closeAddCartIcon=document.querySelector(".close-cart-btn")
const CartSec=document.querySelector(".cart")
const addCartIconPara=document.querySelector(".add-cart-icon-p")


/** stored products collection */
const products=[
    {
        id:1 ,
        name:"PalaceMemoirs",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-1.webp",
        title: "The Paris Baguette Sling | Palace Memoirs",
        price:3900
    },
    {
        id:2 ,
        name:"PalaceMemoirs",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-2.webp",
        title: "Sawai Cushion Cover, 16 | Palace Memoirs",
        price:900
    },
    {
        id:3 ,
        name:"PalaceMemoirs",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-3.webp",
        title: "Royal Tusker Serving Bowl, 520ml| Palace Memoirs",
        price: 1900
    },
    {
        id:4,
        name:"PalaceMemoirs",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-4.webp",
        title: "Royal Tusker Serving Bowl, 520ml| Palace Memoirs",
        price: 900
    },
    {
        id:5 ,
        name:"PalaceMemoirs",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-5.webp",
        title: "Royal Tusker Hand-painted Water Can, 250 ml | Palace Memoirs",
        price: 3900
    },
    
]

const productTwo=[
    {
        id:6,
        name:"Bestseller collection",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-6.webp",
       title:"Ikat Tea Mugs Gift Set of 6",
       price: 1500
    },
    {
        id:7,
        name:"Bestseller collection",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-10.webp",
       title:"Ikat Tea Mugs Gift Set of 6",
       price: 2500
    },
    {
        id:8,
        name:"Bestseller collection",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-11.webp",
       title:"Hangul Mesh Strap Watch with Bracelet Set | Kashmir Trails",
       price: 1500
    },
    {
        id:9,
        name:"Bestseller collection",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-12.webp",
       title:"Explorer Trio, Gift Set of 3 | Comes in a Gift Box",
       price: 1500
    },
    {
        id:10,
        name:"Bestseller collection",
        img1:"/Chumbak-frontend-backend/chumbal-images/gift-sec-img-13.webp",
       title:"Explorer Trio, Gift Set of 3 | Comes in a Gift Box",
       price: 1500
    },
]
/** home-page (palace-memories section )/ sec-1 */

    const palaceSec = document.querySelector(".PalaceMemoirs-sec-products");
    const bestSallerSec = document.querySelector(".Bestseller-collection-products");

    function secOne(){
        products.forEach(item=>{
            let div=document.createElement("div");
            div.classList.add("palaceSecDiv");
            div.innerHTML = `
                <img src="${item.img1}" alt="">
                <p>${item.title}</p>
                <p> MRP: $ <small>${item.price}</small></p>
                <button onClick="detail(${item.id})">PRODUCT DETAIL</button>
            `;
            if(palaceSec){
                palaceSec.append(div);
            }
        });
    }

    function bestSaller(){
        productTwo.forEach(item=>{
            let div=document.createElement("div");
            div.classList.add("palaceSecDiv");
            div.innerHTML = `
                <img src="${item.img1}" alt="">
                <p>${item.title}</p>
                <p> MRP: $ <small>${item.price}</small></p>
                <button onClick="detail(${item.id})">PRODUCT DETAIL</button>
            `;
           if(bestSallerSec){
             bestSallerSec.append(div);
           }
        });
    }

    secOne();
    bestSaller();





// --- cartpage.html pe ---
const params = new URLSearchParams(window.location.search);
  const idData = parseInt(params.get("id"));
  

  const allProducts = [...products, ...productTwo];
  const findProduct = allProducts.find(item => item.id === idData);
  const container = document.querySelector(".product-detail-container");

 
        //<button onclick="addCart(${findProduct.id})">Add to Cart</button>//
  if(container){
    if(findProduct){
        const div=document.createElement("div")
        div.classList.add("selected-product-details")
      div.innerHTML = `
       <div class="product-containers">
       <div class="img-container">
       <div class="side-imgs">
        <img src="${findProduct.img1}" width="60px">
        <img src="${findProduct.img1}" width="60px">
        <img src="${findProduct.img1}" width="60px">
        <img src="${findProduct.img1}" width="60px">
       </div>

       <div class="main-img">
       <img src="${findProduct.img1}" width="600">
       </div>
       </div>
       
       </div>
       

       
        <div class="about-product-buttons">
       <h2 class="titles">${findProduct.title}</h2>
       <p class="mrp">MRP: ₹${findProduct.price}</p>
       <P class="taxes">Inclusive of taxes</p>

       <p class="gst">GST Benefits Apply</p>


         <div class="icons">
       <div class="delivery-icons-text">
        <img src="/Chumbak-frontend-backend/chumbal-images/delivery-icon" width="30px" alt="">
        <p>Free Delivery</p>
        </div>

       <div class="securePayment-icons-text">
         <img src="/Chumbak-frontend-backend/chumbal-images/secure-payment-icon" width="30px" alt="">
        <p>Secure Payment</p>
        </div>

       <div class="cashOnDelivery-icons-text">
         <img src="/Chumbak-frontend-backend/chumbal-images/cash-on -delivery-icon" width="30px" alt="">
        <p>Cash on Delivery</p>
        </div>
       </div>
          <p class="straight-line"></p>

        <div class="delivery-date">
          <p> Delivery Date</p>

          <div class="inpt-check">
          <input type="text" placeholder="Enter pincode to check" name="pincode">
          <p class="check">Check</p>
          </div>
          <p class="next-day-delivery"> Next day delivery is available in selected locations!</p>
        </div>
        <div class="btns">
         <button onClick="addCart(${findProduct.id})" class="addCart"> ADD TO CART</button>
         <button  class="buyNow"> Buy Now</button>
        <div>
       </div>
       
      `;
      if(container){
        container.appendChild(div)
      }
    } else {
      container.innerHTML = `<p>Product not found</p>`;
    }
  }

  //-- addCart function--//
let cart=[]
let cartCount=0

const countCart=document.querySelector(".cart-count")

function addCart(id){
    
     if(findProduct.id===id){
        findProduct.quantity=1
         cart.push(findProduct)
      }
   console.log(cart)
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
  



function detail(id){
 window.location.href=`cartpage.html?id=${id}`
 
}
