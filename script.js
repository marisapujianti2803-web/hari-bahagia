let currentPage = 0;

const pages = document.querySelectorAll(".page");

const music = document.getElementById("music");


function nextPage(){

    if(currentPage < pages.length - 1){

        pages[currentPage].classList.remove("active");

        currentPage++;

        pages[currentPage].classList.add("active");

        music.play().catch(()=>{});

        showStickers();

    }

}



const stickers = [

"sticker1.png",
"sticker2.png",
"sticker3.png",
"sticker4.png",
"sticker5.png",
"sticker6.png",
"sticker7.png",
"sticker8.png",
"sticker9.png",
"sticker10.png",
"sticker11.png",
"sticker12.png",
"sticker13.png",
"sticker14.png",
"sticker15.png",
"sticker16.png",
"sticker17.png",
"sticker18.png",
"sticker19.png",
"sticker20.png",
"sticker21.png",
"sticker22.png"

];



function showStickers(){

    let page = document.querySelector(".page.active");


    for(let i=0;i<5;i++){


        let img=document.createElement("img");


        img.src = stickers[
        Math.floor(Math.random()*stickers.length)
        ];


        img.className="sticker";


        img.style.left =
        Math.random()*80 + "%";


        img.style.top =
        Math.random()*80 + "%";


        page.appendChild(img);



        setTimeout(()=>{

            img.remove();

        },2500);


    }

}




// musik mulai saat klik pertama

document.body.addEventListener(
"click",
()=>{

music.play().catch(()=>{});

},
{once:true}

);
