function taglineClose() {
    const closeTaglineBtn = document.querySelector('.tagline__close');
    const tagline = document.querySelector('.tagline')
    closeTaglineBtn.onclick = function () {
        tagline.remove();
    }
}
export default taglineClose;