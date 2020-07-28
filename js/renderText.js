function renderText(text) {
    if(text.length <= 300){
        return `<p>${text}</p>`; 
    } else {
        return `<p>${text.slice(0, 300)}  See more...</p>`;
    }

}
export default renderText;