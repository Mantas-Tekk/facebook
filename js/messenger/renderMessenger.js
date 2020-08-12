function renderMessenger(data, selector) {
    const DOM = document.querySelector(selector);
    const dataSize = data.length;
    let HTML = ``;
    
    for(let i = 0; i < dataSize; i++) {
        const groupDataSize = data[i].length;
        const groupData = data[i];

        if(i == 0) {
            HTML += `
            <div class="group-links">
                <div class=" group-wrapper">
                    <div class="title">
                        <h3>Contacts</h3>
                        <div class="contact-icons" >
                            <a href="#">
                                <i class="fa fa-plus-square-o" ></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-search"></i>
                            </a>
                            <a href="#">
                                <div>...</div>
                            </a>
                        </div>
                    </div>
            `;
        } else {
            HTML += `
            <div class="group-links">
                <div class=" group-wrapper">
                    <div class="title">
                        <h3>Group Conversations</h3>
                    </div>
            `;
        }

        for(let j = 0; j < groupDataSize; j++) {
            const cardData = groupData[j];
            HTML += `
            <a class="sidemenu-item-link" href="#">
                <div class="sidemenu-item-wrap">
                    <div class="profile-pic">
                        <img class="sidemenu-item-img img" src="./img/${i === 0? "users" : "groups"}/${cardData.photo}" alt="photo">
                        <div class="status"></div>
                    </div>
                    <div class="sidemenu-item-text">
                        <p>${i === 0? cardData.firstname+" "+cardData.lastname : cardData.groupName }</p>
                    </div>  
                </div>
             </a>
            `;
        }
        HTML += `
        </div>
            </div>
        `;
    }


    console.log(HTML);

    return DOM.innerHTML = HTML;
}
export default renderMessenger;
