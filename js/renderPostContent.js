import renderText from "./renderText.js";
import renderTextWithBackground from "./renderTextWithBackground.js";
import renderPhotos from "./renderPhotos.js";

function renderPostContent(data) {
    let HTML = "";
    if(data.text){
        if(!data.photos && data.background){
            HTML += renderTextWithBackground(data.text, data.background);
        } else {
            HTML += renderText(data.text);
        }
    }
    if(data.photos) {
        HTML += renderPhotos(data.photos);
    }
    return `<div class="post-content">
                ${HTML}
            </div>`;
}
export default renderPostContent;