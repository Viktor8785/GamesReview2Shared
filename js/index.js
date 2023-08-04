const pageBody=document.querySelector(".page__body"),genreItem=document.querySelectorAll(".genre__item"),genreText=document.querySelectorAll(".genre__text"),watchButton=document.querySelector("#watch-button");let currentIndex=-1;pageBody.style.minHeight=window.innerHeight+"px",genreItem.forEach(((e,t)=>{e.addEventListener("click",(()=>{window.location.href="games.html?param="+genreText[t].textContent}))})),watchButton.addEventListener("click",(()=>{watchButton.href="games.html?param=watch"}));const review="One of the most prominent apps on my phone is a simple to-do list app. I have a handful of recurring tasks every month or year, along with whatever I jot down as a reminder. It took me more than 20 hours with Pikmin 4 before I identified that the sensation it evoked was the same as that of completing my to-do list. Pikmin 4 is a game, sure, but it's also a sort of low-impact activity that gives you the same satisfaction of checking off a list of small, relatively simple tasks. That makes it pleasant to play, but that quality also makes it feel discordant when it briefly adds elements that provide a mild but noticeable degree of pressure--elements that make it more traditionally \"game-like.\" On the whole, I think I prefer Pikmin the activity to Pikmin the game. Pikmin 4 is meant to be a welcoming entry point for first-timers. The effort to bring you into the world of Pikmin begins very literally, with a character creator that allows you to make your own Rescue Crew member. The tools weren't robust enough to make a facsimile of me--very few beard options, for one thing--but I made a cute little man who I was proud of and wanted to see go on an adventure regardless. With my stubby adventurer fully formed, I was ready to explore the world of Pikmin.";