function renderPostFooter(data) {
    return `<div class="post-footer">
                <div class="row">
                    <a class="">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <p>Like</p>
                    </a>
                    <a class="">
                        <i class="fa fa-comment-o" aria-hidden="true"></i>
                        <p>Comment</p>
                    </a>
                    <a class="">
                        <i class="fa fa-share" aria-hidden="true"></i>
                        <p>Share</p>
                    </a>
                </div>
                <div class="row">

                    <div class="profile-pic">
                        <img class="sidemenu-item-img img" src="./img/sidemenu-icons/harley-quinn.jpg" alt="photo">
                        <div class="status"></div>
                    </div>

                    <div class="input-wrapper">
                        <input type="text" name="a" placeholder="Write a comment...">
                        <div class="icons">
                            <i class="fa fa-smile-o" aria-hidden="true"></i>
                            <i class="fa fa-camera" aria-hidden="true"></i>
                            <i class="fa fa-youtube-square" aria-hidden="true"></i>
                            <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>`;
}
export default renderPostFooter;