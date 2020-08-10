// import postData from "../data";

function sidemeniu(data, selector){
    const dataSize = data.length / 5;
    const DOM = document.querySelector(selector);
    let HTML = '';

    HTML = `<div class = "group-links">
                <div class = "group-wrapper">`;
    for(let i = 0; i < dataSize; i++) {
        HTML += `
                <a class="sidemenu-item-link" href="">
                    <div class="sidemenu-item-wrap">
                        <img class="sidemenu-item-img ${!data[i].icons?  "img" : "" }" src="./img/sidemenu-icons/${data[i].url}" alt="">
                        <div class="sidemenu-item-text">
                            <p>${data[i].text}</p>
                        </div>  
                    </div>
                </a>`;
    }
    HTML += "</div></div>";

    console.log(data, selector);
    // return DOM.innerHTML = HTML;
    return DOM.insertAdjacentHTML("afterbegin", HTML);
}
export default sidemeniu;