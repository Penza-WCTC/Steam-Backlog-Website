import SteamImage from "./SteamImage.js";

const ActiveGameDisplay = {

    components:{
        SteamImage,
    },

    props: {
        activeGame: {type: Object, required: true}
    },

    template: `
    <div class="container text-start pb-3 mb-4">
        <div class="px-3 pb-3 border border-2 row g-3 bg-light rounded">
            <div class="col-md-3 d-flex justify-content-center">
                <steam-image :app-id="activeGame.appId" :game-name="activeGame.name" format="library_600x900" class="img-fluid" style="max-height: 250px;"></steam-image>
            </div>

            <div class="col-md-9 d-flex flex-column justify-content-evenly">
                <div class="row">
                    <div class="col-sm-6">
                        <p class="fs-4">{{activeGame.name}}</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="fs-4">{{activeGame.releaseDate}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <p class="fs-5">Current Playtime:</p>
                        </div>
                        <div class="row">
                            <p class="fs-6">{{activeGame.hoursPlayed}} Hrs</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <p class="fs-5">Current Achievements:</p>
                        </div>
                        <div class="row">
                            <p class="fs-6">16 / 30</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="fs-5">Tags:</p>
                    </div>
                    <div class="col-12 fs-6">
                        <p class="px-2 py-1 rounded-pill bg-info d-inline-block me-1" v-for="tag in activeGame.tags">{{tag}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}

export default ActiveGameDisplay;