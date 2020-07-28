function renderPhotos(photos) {
    const maxPhotosPerGallary = 4;
    let HTML = "";
    let size = photos.length > maxPhotosPerGallary ? maxPhotosPerGallary : photos.length;
    let extra = '';
    for(let i = 0; i < size;i++){
        HTML += `<img src="./img/posts/${photos[i]}" alt="User post photo">`;
    }
    if(photos.length > maxPhotosPerGallary) {
        extra = `<div class="extra">+${photos.length - maxPhotosPerGallary}</div>`;
    }
    return `<div class="gallery gallery-${size}">
                ${HTML}${extra}
            </div>`;
}
export default renderPhotos;