const CarouselImage = {
    data: function () {
        return {};
    },

    props: {
        imageId: { type: String, default: '' }
    },

    methods: {

    },

    template: `
        <img
            :src='"http://shared.steamstatic.com/store_item_assets/steam/apps/"+imageId+"/header.jpg"'
            alt="" class="rounded border border-2 border-primary"></img>
        `
}

export default CarouselImage;