"use strict";

import postData from "./data.js";
import renderFeed from "./renderFeed.js";


renderFeed(postData, "#feed");


const readMoreList = document.querySelectorAll(".feed p > .read-more");
const readLessList = document.querySelectorAll(".feed p > .read-less");
let sizeMore = readMoreList.length;
let sizeLess = readLessList.length;

function readMoreClick( event ) {
    event.target.closest(".short-text").classList.add("hidden");
    event.target.closest(".post-content").querySelector(".full-text").classList.remove("hidden");
}
function readLessClick () {
    event.target.closest(".full-text").classList.add("hidden");
    event.target.closest(".post-content").querySelector(".short-text").classList.remove("hidden");
}

for(let i = 0; i < sizeMore; i++) {
    readMoreList[i].addEventListener("click", readMoreClick);
}
for(let i = 0; i < sizeLess; i++) {
    readLessList[i].addEventListener("click", readLessClick);
}


