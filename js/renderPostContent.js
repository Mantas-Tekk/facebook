import renderText from "./renderText.js";
import renderTextWithBackground from "./renderTextWithBackground.js";
import renderPhotos from "./renderPhotos.js";

function renderPostContent(data) {
    let HTML = "";
    if(data.text){
        if(!data.photos && data.background){
            HTML += renderTextWithBackground(data.text);
        } else {
            HTML += renderText(data.text, data.background);
        }
    }
    if(data.photos) {
        HTML += renderPhotos(data.photos);
    }


    console.log(data);
    return `<div class="post-content">
                ${HTML}
            </div>`;
}
export default renderPostContent;