function renderPostHeader(data, timestamp) {
    return `
        <div class="post-header">
            <a href="${data.link}" class="user-profile-photo" >
                <img src="./img/users/${data.photo}" alt="User Butface">
            </a>
            <div class="user-details">
                <div class="author">
                    <a href="${data.link}" class="link">${data.name} ${data.lastname}</a>
                </div>
                <div class="time">${timestamp} ago</div>
            </div>
            <div class="post-action">...</div>
        </div>
    `
}
export default renderPostHeader;