const ImageCarousel = {
    template: `
        <div class="pb-5 mb-1 position-relative">
            <div class="d-xl-none d-block">
                <slot name="mobile-image"></slot>
            </div>
            <div class="z-0 d-none d-xl-flex position-relative top-0 container justify-content-between">
                <slot name="back-left"></slot>
                <slot name="back-right"></slot>
            </div>
            <div class="z-1 d-none d-xl-flex position-absolute top-10 container justify-content-evenly pe-4">
                <slot name="top-left"></slot>
                <slot name="top-right"></slot>
            </div>
            <div class="z-2 d-none d-xl-flex position-absolute top-15 container justify-content-center ps-1">
               <slot name="center"></slot>
            </div>
        </div>
        `
}

export default ImageCarousel;