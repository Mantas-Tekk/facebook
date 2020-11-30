import renderPost from "./renderPost.js";

function renderFeed(data, selector) {
    
    const size = data.length;
    let HTML = '';
    for(let i = 0;i < size; i++){
        HTML += renderPost(data[i]);
    }
    console.log(HTML);
    return document.querySelector(selector).insertAdjacentHTML("beforeend", HTML);
}
export default renderFeed;