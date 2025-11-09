// home page scripting//
const body=document.querySelector("body")
const heroSlider=document.querySelectorAll(" .hero-posters")
//--//
const openAddCartIcon=document.querySelector(".add-cart-icon-para")
const closeAddCartIcon=document.querySelector(".close-cart-btn")
const CartSec=document.querySelector(".cart")
const addCartIconPara=document.querySelector(".add-cart-icon-p")
const sale=document.querySelector(".sales")


/** stored products collection */
const giftSection=[
{
    id:11,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-1.webp",
       title:`Royal Hoot Owl Shape Cushion 13"x8" `,
       price: 1999

},
{
    id:12,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-2.webp",
       title:`Best. Sis. Ever. Gift Set of 3`,
       price: 1499

},
{
    id:13,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-3.webp",
       title:`I love you from Head Message Card`,
       price: 20

},
{
    id:14,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-4.webp",
       title:`Dolphin Mug - D`,
       price: 562

},
{
    id:15,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-5.webp",
       title:`Grapefruit & Patchouli Soy Wax Candle - Small`,
       price: 636

},
{
    id:16,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-6.webp",
       title:`Rani Bagh Gift Box - Rectangle `,
       price: 299

},
{
    id:17,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-7.webp",
       title:`Sweet Soiree Eau de Parfume 20ml`,
       price: 599

},
{
    id:18,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-8.webp",
       title:`Festive Warmth and Joy E-Gift Card`,
       price: 1000

},
{
    id:19,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-9.webp",
       title:`Aztec Cats Insulated Lunch Box`,
       price: 1000

},
{
    id:20,
        name:"Bestseller collection",
        img1: "/chumbal-images/gift-page-pic-10.webp",
       title:`Wrist Wonders Duo, Gift Set of 2 `,
       price: 2091

},
]
const products=[
    {
        id:1 ,
        name:"PalaceMemoirs",
        img1:"/chumbal-images/gift-sec-img-1.webp",
        title: "The Paris Baguette Sling | Palace Memoirs",
        price:3900
    },
    {
        id:2 ,
        name:"PalaceMemoirs",
        img1:"/chumbal-images/gift-sec-img-2.webp",
        title: "Sawai Cushion Cover, 16 | Palace Memoirs",
        price:900
    },
    {
        id:3 ,
        name:"PalaceMemoirs",
        img1:"/chumbal-images/gift-sec-img-3.webp",
        title: "Royal Tusker Serving Bowl, 520ml| Palace Memoirs",
        price: 1900
    },
    {
        id:4,
        name:"PalaceMemoirs",
        img1:"/chumbal-images/gift-sec-img-4.webp",
        title: "Royal Tusker Serving Bowl, 520ml| Palace Memoirs",
        price: 900
    },
    {
        id:5 ,
        name:"PalaceMemoirs",
        img1:"/chumbal-images/gift-sec-img-5.webp",
        title: "Royal Tusker Hand-painted Water Can, 250 ml | Palace Memoirs",
        price: 3900
    },
    
]

const productTwo=[
    {
        id:6,
        name:"Bestseller collection",
        img1:"/chumbal-images/gift-sec-img-6.webp",
       title:"Ikat Tea Mugs Gift Set of 6",
       price: 1500
    },
    {
        id:7,
        name:"Bestseller collection",
        img1:"/chumbal-images/gift-sec-img-10.webp",
       title:"Ikat Tea Mugs Gift Set of 6",
       price: 2500
    },
    {
        id:8,
        name:"Bestseller collection",
        img1:"/chumbal-images/gift-sec-img-11.webp",
       title:"Hangul Mesh Strap Watch with Bracelet Set | Kashmir Trails",
       price: 1500
    },
    {
        id:9,
        name:"Bestseller collection",
        img1:"/chumbal-images/gift-sec-img-12.webp",
       title:"Explorer Trio, Gift Set of 3 | Comes in a Gift Box",
       price: 1500
    },
    {
        id:10,
        name:"Bestseller collection",
        img1:"/chumbal-images/gift-sec-img-13.webp",
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



    // gift-page//
    let divs=[]//-> empty divs array to store all (product-page-detail)div  for future uses//
    const productDetailSec=document.querySelector(".product-detail")
    const gridOne=document.querySelector(".grid-1")
    const gridTwo=document.querySelector(".grid-2")

    function showGiftProducts(){
        giftSection.forEach((gift)=>{
            let div=document.createElement("div")
            div.classList.add("product-page-detail")
            div.innerHTML=`
                <img src="${gift.img1}" >
                <p>${gift.title}</p>
                <p> MRP: $ <small>${gift.price}</small></p>
                <button onClick="detail(${gift.id})">PRODUCT DETAIL</button>
            `;
            if(productDetailSec){
                productDetailSec.append(div)
                divs.push(div)
            }
            divs.push(div)// stored all the (product-page-detail) div//
        })
    }
    showGiftProducts()

// grid-event-listener to changing the div width accoeding to the users//
if(gridTwo){
    gridTwo.addEventListener("click",()=>{
 
     divs.forEach((divv)=>{
    return divv.style.width="300px"// when user click the gridTwo icon the width of the divv(divs) 
    // gone change into 300px//
  })
    gridTwo.style.backgroundColor="rgb(231, 220, 220)"
   
        gridOne.style.backgroundColor="white"
 
  
})
}

if(gridOne){
    gridOne.addEventListener("click",()=>{
 
     divs.forEach((divv)=>{
    return divv.style.width="450px"// when user click the gridOne icon the width of the divv(divs)
    // change into the normal size.//
  })
    gridOne.style.backgroundColor="rgb(231, 220, 220)"
    
        gridTwo.style.backgroundColor="white"
    
 
  
})
}
 
   if(sale){
     sale.addEventListener("click",()=>{
        window.location.href="gift.html"
})
   }


// --- cartpage.html pe ---
const params = new URLSearchParams(window.location.search);
  const idData = parseInt(params.get("id"));
  

  const allProducts = [...products, ...productTwo, ...giftSection];
  const findProduct = allProducts.find(item => item.id === idData);
  const container = document.querySelector(".product-detail-container");
  const recentViewed = document.querySelector(".recent-viewed");
  const recentViewedContent = document.querySelector(".recent-viewed-content");

 
        //<button onclick="addCart(${findProduct.id})">Add to Cart</button>//
  if(container){
    if(findProduct){
        const div=document.createElement("div")
        div.classList.add("selected-product-details")
      div.innerHTML = `
       <div class="product-containers">
       <div class="image-container-description">
       <div class="img-container">
       <div class="side-imgs">
        <img src="${findProduct.img1}" width="60px"  class="side-img-1">
        <img src="${findProduct.img1}" width="60px" class="side-img-2" >
        <img src="${findProduct.img1}" width="60px" class="side-img-3" >
        <img src="${findProduct.img1}" width="60px" class="side-img-4" >
       </div>

       <div class="main-img">
       <img src="${findProduct.img1}" width="600" class="main-img-container">
       </div>
       </div>

       <div class="product-description-and-information-sec">
       
       <div class="description">
       <p>Description</p>
        <img src="chumbal-images/plus-icon.webp" width="20px" alt="">
       </div>

       <div class="product-information">
       <p>Information</p>
        <img src="chumbal-images/plus-icon.webp" width="20px" alt="">
       </div>

       <div class="shipping-information">
       <p>Shipping Information</p>
        <img src="chumbal-images/plus-icon.webp" width="20px" alt="">
       </div>
       <div class="returns">
       <p>Returns</p>
        <img src="chumbal-images/plus-icon.webp" width="20px" alt="">
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
        <img src="chumbal-images/delivery-icon.webp" width="30px" alt="">
        <p>Free Delivery</p>
        </div>

       <div class="securePayment-icons-text">
         <img src="chumbal-images/secure-payment-icon.webp" width="30px" alt="">
        <p>Secure Payment</p>
        </div>

       <div class="cashOnDelivery-icons-text">
         <img src="chumbal-images/cash-on -delivery-icon.webp" width="30px" alt="">
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
        
        <p class="share">Share</p>

        <div class="offer-box">
        <p class="best-offer-text"> Best offers for you!</p>

        <div class="extra-50">
        <p class="text-50-child1">Get EXTRA 15% OFF on your order | Code: DIWALI15</p>
        <p class="text-50-child2">Valid on a min. purchase of ₹2999</p>
        </div>

        <div class="extra-offer">
        <p class="extra-offer-child1">
        Get ₹200 OFF on your 1st order | Code: CHUMBAKNEW
        </p>
        <p  class="extra-offer-child2" >Valid on a min. purchase of ₹2000</p>
        </div>

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

  // event-listenet- on all the side images//
  const mainImgContainer=document.querySelector(".main-img-container")
const img1=document.querySelector(".side-img-1")
const img2=document.querySelector(".side-img-2")
const img3=document.querySelector(".side-img-3")
const img4=document.querySelector(".side-img-4")

  function sideImgSelector(){
 if(img1){
    img1.style.border="1px solid black"
 }else if(img2){

 // evenetListener on img2//
 img2.addEventListener("click",()=>{
    img2.style.border="1px solid black"
    mainImgContainer.style.border="1px solid gray"
    img1.style.border="white"
    img3.style.border="white"
    img4.style.border="white"
 })
}else if(img3){
 // evenetListener on img3//
 img3.addEventListener("click",()=>{
    img3.style.border="1px solid black"
      mainImgContainer.style.border="1px solid black"
    img2.style.border="white"
    img1.style.border="white"
    img4.style.border="white"
 })
}else if(img4){
 // evenetListener on img4//
 img4.addEventListener("click",()=>{
    img4.style.border="1px solid black"
    mainImgContainer.style.border="1px solid gray"
    img2.style.border="white"
    img1.style.border="white"
    img3.style.border="white"
 })
}else if(img1){
 // evenetListener on img1//
 img1.addEventListener("click",()=>{
    img1.style.border="1px solid black"
    mainImgContainer.style.border="1px solid black"
    img2.style.border="white"
    img3.style.border="white"
    img4.style.border="white"
 })
  }
}
  sideImgSelector()
  
  // recent- viewed-sec//
  let productDatas=[]
 const recentViewProduct=allProducts.find((product)=>{
    return product.id===idData
 })


productDatas=JSON.parse(localStorage.getItem("recentViewedItems"))||[]

if(recentViewProduct){
    productDatas.push(recentViewProduct)
  }

  if(productDatas.length>=5){
        productDatas.splice(0, productDatas.length-5)
     }
       localStorage.setItem("recentViewedItems", JSON.stringify(productDatas))
productDatas.forEach((pro)=>{
            const div=document.createElement("div")
            div.classList.add("recent-viewed-sec")
    div.innerHTML = `
                <img src="${pro.img1}" alt="">
                <p>${pro.title}</p>
                <p> MRP: $ <small>${pro.price}</small></p>
                <button onClick="detail(${pro.id})">PRODUCT DETAIL</button>
            `;
    if(recentViewedContent){
        recentViewedContent.appendChild(div)
    }
  })
 
   


  // wheel-event-section//
   const imageContainerDescription = document.querySelector(".image-container-description");

if(imageContainerDescription){
    imageContainerDescription.addEventListener("wheel", (e) => {
  e.preventDefault();
  imageContainerDescription.scrollTop += e.deltaY; // moves vertically
});
}


    //-- addCart function--//
let cart=[]
let cartCount=0
 
const countCart=document.querySelector(".cart-count")
const addCartBtn=document.querySelector(".addCart")

 // store cart-data on localstorage//
    // getItems or return []//
      
    cart=JSON.parse(localStorage.getItem("cartItems"))|| []
    cartCount=JSON.parse(localStorage.getItem("cartCounts"))||0

   //
 
function addCart(id){
   
    if(findProduct.id===id){
        findProduct.quantity=1
      
        const findExist=cart.find((exist)=>{
            return exist.id===id
        })

        if(findExist){
            findExist.quantity+=1
        }else if(!findExist){
              cart.push(findProduct)
        cartCount++
        }
      }
      

     console.log(cart)
   
       // setItem on localstorege//
         localStorage.setItem("cartItems", JSON.stringify(cart))
          localStorage.setItem("cartCounts", JSON.stringify(cartCount))

 cartCount=JSON.parse(localStorage.getItem("cartCounts"));
    countCart.innerText =  cartCount
 if(cartCount > 0) addCartIconPara.style.backgroundColor = "red"
    showProduct();   
}


// show products on cart page (showCartDiv)//
let showCartDiv=document.querySelector(".Show-products")
//function for calculating total,grand-total and showing dynamic html-//

 
function showProduct(){
    let grandTotal=0
    let total=0
    showCartDiv.innerHTML=""
    // geting cartItems//
    cart=JSON.parse(localStorage.getItem("cartItems"))||[]
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

// Run this every time the page loads//



window.addEventListener("DOMContentLoaded",()=>{
    showProduct()
    countCart.innerText=cartCount
    // open-close- addCart section//
openAddCartIcon.addEventListener("click",()=>{
    body.classList.add("active")
})
//--//
closeAddCartIcon.addEventListener("click",()=>{
    body.classList.remove("active")
})

 if(cartCount > 0) addCartIconPara.style.backgroundColor = "red";

  
});

// function for delete items from array//
function deleteItems(id){
    cart=cart.filter((products)=>{
        return products.id!==id
    })
       cartCount--
      countCart.innerText= cartCount
     
      if(cartCount<0){
        cartCount=0
         countCart.innerText=  cartCount;
      }
   
      // setItem on localstorege//
         localStorage.setItem("cartItems", JSON.stringify(cart))
          localStorage.setItem("cartCounts", JSON.stringify(cartCount))

     showProduct()
      //--//
      if(countCart.innerText<=0){
          addCartIconPara.style.backgroundColor="white"
      }
}

// function of increase/ decrease  items //
function increase(id){
   cart.forEach((item)=>{
       if(item.id===id){
        item.quantity+=1
       }
       // setItem on localstorege//
         localStorage.setItem("cartItems", JSON.stringify(cart))
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
           // setItem on localstorege//
         localStorage.setItem("cartItems", JSON.stringify(cart))
        })

    showProduct()
}
  

const backIcn=document.querySelector(".back-icn")
if(backIcn){
    backIcn.addEventListener("click",()=>{
    window.location.href=`homepage.html`
})
}

function detail(id){
 window.location.href=`cartpage.html?id=${id}`
 
}

