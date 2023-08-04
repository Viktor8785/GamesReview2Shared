import{gamesData}from"./games-data.js";const pageBody=document.querySelector(".page__body"),gamesTitle=document.querySelector(".games__title"),gamesList=document.querySelector(".games__list"),watchButton=document.querySelector("#watch-button"),elementTemplate=document.querySelector("#element-template").content.querySelector(".games__item");pageBody.style.minHeight=window.innerHeight+"px";let urlParams=new URLSearchParams(window.location.search),param=urlParams.get("param"),gamesFiltered=[];"watch"==param?(gamesFiltered=getWatchGames(),gamesTitle.textContent="Favorite Games",watchButton.classList.add("main-nav__item--active")):(gamesFiltered=getFilteredGames(),gamesTitle.textContent=param+" Games");let gamesLength=gamesFiltered.length;if(gamesLength>0)for(let e=0;e<gamesLength;e++){const t=elementTemplate.cloneNode(!0);t.querySelector(".games__text").textContent=gamesFiltered[e].name,t.querySelector(".games__img").src=gamesFiltered[e].imgIcon,t.querySelector(".games__img").alt=gamesFiltered[e].name,t.addEventListener("click",(()=>{t.querySelector(".games__link").href="game.html?param="+gamesFiltered[e].id,"watch"==param&&(t.querySelector(".games__link").href="game.html?param="+gamesFiltered[e].id+"&param2=watch")})),gamesList.appendChild(t)}function getFilteredGames(){return gamesData.filter((e=>{if(e.genre==param)return!0}))}function getWatchGames(){let e=localStorage.getItem("favor"),t=[];if(e&&e.length>0)for(let a=0;a<e.length/3;a++){let r=3*a,o=e.slice(r,r+2);gamesData.forEach((e=>{e.id==o&&(t[a]=e)}))}return t}watchButton.addEventListener("click",(()=>{watchButton.href="games.html?param=watch"}));const review="One of the most prominent apps on my phone is a simple to-do list app. I have a handful of recurring tasks every month or year, along with whatever I jot down as a reminder. It took me more than 20 hours with Pikmin 4 before I identified that the sensation it evoked was the same as that of completing my to-do list. Pikmin 4 is a game, sure, but it's also a sort of low-impact activity that gives you the same satisfaction of checking off a list of small, relatively simple tasks. That makes it pleasant to play, but that quality also makes it feel discordant when it briefly adds elements that provide a mild but noticeable degree of pressure--elements that make it more traditionally \"game-like.\" On the whole, I think I prefer Pikmin the activity to Pikmin the game. Pikmin 4 is meant to be a welcoming entry point for first-timers. The effort to bring you into the world of Pikmin begins very literally, with a character creator that allows you to make your own Rescue Crew member. The tools weren't robust enough to make a facsimile of me--very few beard options, for one thing--but I made a cute little man who I was proud of and wanted to see go on an adventure regardless. With my stubby adventurer fully formed, I was ready to explore the world of Pikmin.";