
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
//start background color

let btn = document.querySelector(".button");
let backgraound = document.getElementById("firstitem");
let span= document.querySelector(".color"); 
const hex = [0,1,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click",function(){
    let hexcolor ="#";
    for(let i=0; i<6;i++){
        hexcolor=hexcolor + hex[getRandomNumber()];

    }
    backgraound.style.backgroundColor=hexcolor;
    span.textContent=hexcolor;
});

function getRandomNumber(){
    return Math.floor(Math.random()* hex.length);
}
//end background color
//end background color
//end background color
//end background color

let cou=0;
const counterValue= document.querySelector(".value");
const btns= document.querySelectorAll(".btn");

btns.forEach(b => {
    b.addEventListener("click",function(e) {
        const s = e.currentTarget.classList;
        if(s.contains("decrease")){
            cou--;
        }else if (s.contains("reset")) {
            cou=0;
        }else{
            cou++;
        }
        if (cou >0) {
            counterValue.style.color="green";
        } 
        else if (cou < 0 ) {
            counterValue.style.color="red";
        }
        else{
            counterValue.style.color="white";
        }
        counterValue.textContent=cou;
        })
});



//start reviw===============================

//start reviw===============================

//start reviw===============================

//start reviw===============================

const reviews=[
    {
        id:1,
        name:"Ali Hayajneh",
        img:"../pexels-pixabay-220453.jpg",
        desc:"code and view the result in your browser. The W3Schools online code editor allows you to edit code and view the result in your browser"
    },
    {
        id:2,
        name:"Mohammad Hayajneh",
        img:"../pexels-simon-robben-614810.jpg",
        desc:" The W3Schools online code editor allows you to edit code and view the result in your browser"
    }
]

let img = document.querySelector(".imgg");
let namee = document.querySelector(".name");
let desc = document.querySelector(".desc");


let prebtn =document.querySelector(".prives");
let nextbtn = document.querySelector(".next");

let currentitem=0;
window.addEventListener("DOMContentLoaded",()=>{
    showPerson()
}
);

function showPerson(){
    const item=reviews[currentitem];
    img.src=item.img;
    namee.textContent= item.name;
    desc.textContent=item.desc;
}

nextbtn.addEventListener("click",()=>{
    currentitem++;
    if ( currentitem > reviews.length-1) {
        currentitem=0;
    }
    showPerson();
})

prebtn.addEventListener("click",()=>{
    currentitem--;
    if ( currentitem < 0) {
        currentitem= reviews.length-1;
    }
    showPerson();
})


//start model==================
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


//start question=================
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});



// section menue=====================================>
// section menue=====================================>

// section menue=====================================>

// section menue=====================================>
// section menue=====================================>


const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "../item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "../item-1.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "../item-1.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "../item-1.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "../item-1.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "../item-1.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "../item-1.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "../item-1.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "../item-1.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "../item-1.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
   displayMenuButtons();
  // k();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
  }

  // function k(){
  //   let c = ["all"];
  //    menu.map((a)=>{
  //     if(!c.includes(a.category))
  //        c.push(a.category);
  //   })
  //   c.map((x)=>{
  //     btnContainer.innerHTML +=`<button type="button" class="filter-btn" data-id=${x}>
  //     ${x}
  //   </button>`;
  //   })
  // }
  function displayMenuButtons() {
    const categories = menu.reduce(
                                        function (values, item) {
                                          if (!values.includes(item.category)) {
                                            values.push(item.category);
                                                                               }
                                          return values;
                                        },
                                        ["all"]
                                   );
    

    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        const cate= e.currentTarget.dataset.id;
        const menuecategory= menu.filter((x)=>{
            if(x.category===cate)
            return x;
        });
        if(cate==="all"){
        diplayMenuItems(menu)
        }else{
          diplayMenuItems(menuecategory);
        }
      });
    })
  /*
    filterBtns.forEach(function (btn) {
                                  btn.addEventListener("click", function (e) {
                                    // console.log(e.currentTarget.dataset);
                                    const category = e.currentTarget.dataset.id;
                                            const menuCategory = menu.filter(function (menuItem) {
                                                      // console.log(menuItem.category);
                                                      if (menuItem.category === category) {
                                                        return menuItem;
                                                      }
                                                    });
                                                    if (category === "all") {
                                                      diplayMenuItems(menu);
                                                    } else {
                                                      diplayMenuItems(menuCategory);
                                                    }
                                          });
                                });*/
  }







  // start video=====================
   // start video===================== // start video=====================
    // start video===================== // start video===================== // start video=====================
     // start video===================== // start video=====================
      // start video=====================


      const btnx = document.querySelector(".switch-btn");
      const video = document.querySelector(".video-container");
      
      btnx.addEventListener("click", function () {
        if (!btnx.classList.contains("slide")) {
          btnx.classList.add("slide");
          video.pause();
        } else {
          btnx.classList.remove("slide");
          video.play();
        }
      });
      
      // preloader
      const preloader = document.querySelector(".preloader");
      
      window.addEventListener("load", function () {
        preloader.classList.add("hide-preloader");
      });


//start about==============>
//start about==============>//start about==============>
//start about==============>//start about==============>//start about==============>
//start about==============>//start about==============>
//start about==============>

const btnss=document.querySelectorAll(".tab-btn");
const aboutt=document.querySelector(".about");
const artical = document.querySelectorAll(".content");

aboutt.addEventListener("click",(a)=>{
  console.log(a.target.dataset.id)
  console.log(a.target)
  const id =a.target.dataset.id;
  if(id){
    btnss.forEach((s)=>{
      s.classList.remove("active");
      a.target.classList.add("active");
    });
    artical.forEach((a)=>{
      a.classList.remove("active");
    });
    const elementt= document.getElementById(id);
    elementt.classList.add("active");
  }
})

// start cournt date ===========>
// start cournt date ===========>// start cournt date ===========>
// start cournt date ===========>// start cournt date ===========>// start cournt date ===========>
// start cournt date ===========>// start cournt date ===========>
// start cournt date ===========>


const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 0, 57, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();

month= months[month];
const weekday = weekdays[futureDate.getDay()];

const date = futureDate.getDate();
giveaway.textContent=`giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime=futureDate.getTime();

function getRemaindingTime(){
 
  const today = new Date().getTime();
   const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values=[days,hours,minutes,seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }

}
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
