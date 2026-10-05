import CarouselImage from "./CarouselImage.js";

const Carousel = {
    components: {
        CarouselImage,
    },


    data: function () {
        return {};
    },

    props: {
        imageIdArray: { type: Array, default: () => [] }
    },

    methods: {

    },

    template: `
        <div class="pb-5 mb-1 position-relative">
            <carousel-image :image-id="imageIdArray[0]" class="d-xl-none d-block w-100"></carousel-image>
            <div class="z-0 d-none d-xl-flex position-relative top-0 container justify-content-between">
                <carousel-image :image-id="imageIdArray[1]"></carousel-image>
                <carousel-image :image-id="imageIdArray[2]"></carousel-image>
            </div>
            <div class="z-1 d-none d-xl-flex position-absolute top-10 container justify-content-evenly pe-4">
                <carousel-image :image-id="imageIdArray[3]"></carousel-image>
                <carousel-image :image-id="imageIdArray[4]"></carousel-image>
            </div>
            <div class="z-2 d-none d-xl-flex position-absolute top-15 container justify-content-center ps-1">
               <carousel-image :image-id="imageIdArray[0]"></carousel-image>
            </div>
        </div>
        `
}

export default Carousel;