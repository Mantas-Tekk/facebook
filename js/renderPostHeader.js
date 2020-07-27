function renderPostHeader(data, timestamp) {
    return `
        <div class="post-header">
            <a href="${data.link}">
                <img src="./img/users/${data.photo}" class="user-profile-photo" alt="User Butface">
            </a>
            <div class="usrer-details">
                <div class="author">
                    <a href="${data.link}" class="link">${data.mame} ${data.lastname}</a>
                </div>
                <div class="time">${timestamp} ago</div>
            </div>
            <div class="post-action">...</div>
        </div>
    `
}
export default renderPostHeader;