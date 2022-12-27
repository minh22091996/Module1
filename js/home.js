let listProducts = [
  {
    imge:"../image/ps5.1.webp",
    name: "Máy chơi game PlayStation 5 Standard",
    price: "15990000",
    quantity: "1",
    id : "0",
    type : "ps5",
  },
  {
    imge:"../image/ps5.2.webp",
    name: "Tay cầm điều khiển máy game PlayStation 5 (không dây)",
    price: "1999000",
    id : "1",
    quantity: "1",
    type : "ps5",
  },
  {
    imge:"../image/ps5.3.webp",
    name: "Đĩa Game PS5 Sackboy A Big Adventore",
    price: "1499000",
    quantity: "1",
    id : "2",
    type : "disc",
  },
  {
    imge:"../image/ps5.4.webp",
    name: "Đĩa Game PS5 Demons Souls",
    price: "899000",
    quantity: "1",
    id : "3",
    type : "disc",
  },
  {
    imge:"../image/ps5.5.webp",
    name: "Đĩa game PS5 God of Wả",
    price: "1799000",
    quantity: "1",
    id : "4",
    type : "disc",
  },
  {
    imge:"../image/ps5.6.webp",
    name: "Đĩa PS5 The Last Of Us Part I",
    price: "1799000",
    quantity: "1",
    id : "5",
    type : "disc",
  },
  {
    imge:"../image/ps5.7.webp",
    name: "Đĩa PS5 Spider-Man Morales Ultimate",
    price: "1799000",
    quantity: "1",
    id : "6",
    type : "disc",
  },
  {
    imge:"../image/ps5.8.webp",
    name: "Đĩa PS5 Ratchet & Clank: Rift Apart ",
    price: "899000",
    quantity: "1",
    id : "7",
    type : "disc",
  },
  {
    imge:"../image/ps5.9.webp",
    name: "Tai nghe không dây có công nghệ chống ồn WF-1000XM4",
    price: "5690000",
    quantity: "1",
    id : "8",
    type : "headePhone",
  },
  {
    imge:"../image/ps5.10.webp",
    name: "Tai nghe không dây có công nghệ chống ồn WH-1000XM5 - Màu Bạc (FY'22 BD)",
    price: "8590000",
    quantity: "1",
    id : "9",
    type : "headePhone",
  },
  {
    imge:"../image/ps5.11.webp",
    name: "Tai nghe không dây LinkBuds S",
    price: "3490000",
    quantity: "1",
    id : "10",
    type : "headePhone",
  },
  {
    imge:"../image/ps5.12.webp",
    name: "Tai nghe không dây có công nghệ chống ồn WH-1000XM4",
    price: "8490000",
    quantity: "1",
    id : "11",
    type : "headePhone",
  }, 

  {
    imge:"../image/ps5.13.webp",
    name: "Chương trình đặt cọc PlayStation®VR2",
    price: "17890000",
    quantity: "1",
    id : "12",
    type : "glasses",
  }, 

  {
    imge:"../image/ps5.14.webp",
    name: "Bộ Kính Thực Tế Ảo PSVR Iron Man SB",
    price: "6449000",
    quantity: "1",
    id : "13",
    type : "glasses",
  }, 

  {
    imge:"../image/ps5.15.webp",
    name: "Bộ Kính Thực Tế Ảo PSVR Iron Man Bundle",
    price: "6449000",
    quantity: "1",
    id : "14",
    type : "glasses",
  }, 

  {
    imge:"../image/ps5.16.webp",
    name: "Bộ kính thực tế ảo Playstation VR",
    price: "5099000",
    quantity: "1",
    id : "15",
    type : "glasses",
  }, 

 
]
localStorage.setItem("products",JSON.stringify(listProducts));  


function house() {
    window.location.href = "home.html"
  }
  
function login1(){
 a= confirm("Bạn chưa đăng nhập tài khoản !  Chuyển đến trang đăng nhập ?");
  if( a==true){
    window.location.href = "login.html"
  }else{
    return
  }
}

  function login() {
    window.location.href = "login.html"
  }

  

  function renderListProducts(listProducts) {
  
    let data = ``
    for (i = 0; i < listProducts.length; i++) {
      data += `
    <div class="ps5-1">
        <img src="${listProducts[i].imge}" alt="">
        <div>${listProducts[i].name} </div><br>
        <div> Gía tiền : ${(+listProducts[i].price).toLocaleString("en-us") + "" + "VND"} <i id="cart" onclick="login1(${i})"
         class="fa-solid fa-cart-shopping"></i>
        
        <i id="heart${listProducts[i].id}" onclick="login1(${listProducts[i].id})" class="fa-solid fa-heart"></i>
       
        </div>
      </div> 
    `
      document.querySelector(".nav-ps5").innerHTML = data;
    }
  }
  let listProducts1 = JSON.parse(localStorage.getItem("products"))
  renderListProducts(listProducts1)

  function ps4(){
    alert("Sản phẩm ps4 đã hết hàng")
  }

  function ps5(keyWord){
    let listProducts= JSON.parse(localStorage.getItem("products"))
    let addPs5 = []
    for(i=0;i<listProducts.length;i++){
      if(listProducts[i].type == keyWord){
        addPs5.push(listProducts[i])
      }
    }
     renderListProducts(addPs5)
   }
  

  