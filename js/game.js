import{gamesData}from"./games-data.js";const mediaQueryMobileOnly=window.matchMedia("(max-width: 719px"),mediaQueryTabletOnly=window.matchMedia("(min-width: 720px)"),pageBody=document.querySelector(".page__body"),gameImg1=document.querySelector("#img1"),gameImg2=document.querySelector("#img2"),gameImg3=document.querySelector("#img3"),cardContainer=document.querySelector(".game__card-container"),gameName=document.querySelector(".game__name"),gameGenre=document.querySelector(".game__genre"),gameText=document.querySelector(".game__text"),buttonBack=document.querySelector(".game__button-back"),span2=document.querySelector(".game__span2"),buttonWatchlist=document.querySelector(".game__button-watchlist"),buttonSvg=document.querySelector(".game__button-svg"),buttonLeft=document.querySelector(".game__button-left"),buttonRight=document.querySelector(".game__button-right"),watchButton=document.querySelector("#watch-button"),youTubeButton=document.querySelector("#youtube-button");let urlParams=new URLSearchParams(window.location.search),param=urlParams.get("param"),param2=urlParams.get("param2"),game=gamesData.find((e=>e.id==param)),currentIndex=0,leftXMax=-374,leftXs=[],leftX=0;pageBody.style.minHeight=window.innerHeight+"px",span2.textContent=param2?"Favorite":"Games";for(let e=0;e<3;e++)leftXs[e]=leftXMax*e;cardContainer.style.left=0;let watchList=localStorage.getItem("favor"),watchListFlag=!1;function handleWidthChangeTablet(e){e.matches&&(leftXMax=-550,startSettings())}function handleWidthChangeMobile(e){e.matches&&(leftXMax=window.innerWidth,leftXMax>430&&(leftXMax=430),leftXMax*=-1,startSettings())}function startSettings(){currentIndex=0;for(let e=0;e<3;e++)leftXs[e]=leftXMax*e;leftX=0,cardContainer.style.left=0}watchList&&watchList.indexOf(param)>=0&&(buttonSvg.classList.add("game__button-svg--active"),watchListFlag=!0),gameImg1.src=game.imgFile+"1.jpg",gameImg1.alt=game.name,gameImg2.src=game.imgFile+"2.jpg",gameImg2.alt=game.name,gameImg3.src=game.imgFile+"3.jpg",gameImg3.alt=game.name,gameName.textContent=game.name,gameGenre.textContent=game.genre,gameText.textContent=game.text,handleWidthChangeMobile(mediaQueryMobileOnly),handleWidthChangeTablet(mediaQueryTabletOnly),buttonBack.addEventListener("click",(()=>{param2?window.location.href="games.html?param=watch":window.history.go(-1)})),buttonWatchlist.addEventListener("click",(()=>{buttonSvg.classList.toggle("game__button-svg--active"),watchList=localStorage.getItem("favor");let e="";if(watchListFlag)if(watchListFlag=!1,3==watchList.length)e="";else{let t=watchList.indexOf(param);0==t&&(e=watchList.slice(watchList.indexOf(param)+3)),t==watchList.length-3&&(e=watchList.slice(0,watchList.indexOf(param))),t>0&&t<watchList.length-3&&(e=watchList.slice(0,watchList.indexOf(param))+watchList.slice(watchList.indexOf(param)+3))}else e=param+" ",watchList&&watchList.length>0&&(e=watchList+param+" "),watchListFlag=!0;localStorage.setItem("favor",e)})),buttonLeft.addEventListener("click",(()=>{currentIndex>0&&(currentIndex--,leftX=leftXs[currentIndex],cardContainer.style.left=leftX+"px")})),buttonRight.addEventListener("click",(()=>{currentIndex<2&&(currentIndex++,leftX=leftXs[currentIndex],cardContainer.style.left=leftX+"px")})),watchButton.addEventListener("click",(()=>{watchButton.href="games.html?param=watch"})),youTubeButton.addEventListener("click",(()=>{youTubeButton.href=game.youtube})),mediaQueryTabletOnly.addEventListener("change",handleWidthChangeTablet),mediaQueryMobileOnly.addEventListener("change",handleWidthChangeMobile);const review="One of the most prominent apps on my phone is a simple to-do list app. I have a handful of recurring tasks every month or year, along with whatever I jot down as a reminder. It took me more than 20 hours with Pikmin 4 before I identified that the sensation it evoked was the same as that of completing my to-do list. Pikmin 4 is a game, sure, but it's also a sort of low-impact activity that gives you the same satisfaction of checking off a list of small, relatively simple tasks. That makes it pleasant to play, but that quality also makes it feel discordant when it briefly adds elements that provide a mild but noticeable degree of pressure--elements that make it more traditionally \"game-like.\" On the whole, I think I prefer Pikmin the activity to Pikmin the game. Pikmin 4 is meant to be a welcoming entry point for first-timers. The effort to bring you into the world of Pikmin begins very literally, with a character creator that allows you to make your own Rescue Crew member. The tools weren't robust enough to make a facsimile of me--very few beard options, for one thing--but I made a cute little man who I was proud of and wanted to see go on an adventure regardless. With my stubby adventurer fully formed, I was ready to explore the world of Pikmin.";