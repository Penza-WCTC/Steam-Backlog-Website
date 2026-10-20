const SteamImage = {
    data: function () {
        return {};
    },

    props: {
        appId: { type: String, default: '720' },
        gameName: { type: String, default: 'not provided'},
        format: { type: String, default: 'header'},
    },

// ask if its better practice to have a computed property normally rather then what you cooked up here

    template: `
        <img
            :src='"http://shared.steamstatic.com/store_item_assets/steam/apps/"+appId+"/"+format+".jpg"'
            :alt='"This is the "+format+" image for "+gameName+"."' class="rounded border border-2 border-primary">
        </img>
        `
}

export default SteamImage;