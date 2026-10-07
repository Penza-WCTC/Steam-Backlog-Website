import CarouselHeader from "./CarouselHeader.js";
import GameDescription from "./GameDescription.js";

const GameSelectorSection = {
    components:{
        CarouselHeader,
        GameDescription
    },

    data: function(){
        return{
            activeGame: {name: "temp", shortDescription: "tempDesc", tags: ["temp1","temp2","temp3"]},
        }
    },

    methods:{
        saveNewData(newData){
            this.activeGame = newData;
        }
    },

    template: `
    <div class="container text-start pb-3 mb-4 ">
        <div class=" px-3 pb-3 border border-2 row g-3 bg-light rounded">
            <carousel-header :rerolls-allowed="5" @save-this="saveNewData"></carousel-header>

            <game-description :active-game="activeGame"></game-description>

            <div class="row mb-1">
                <div class="col-md bg-success-subtle border rounded border-1 border-success mb-2">
                    <div class="row mt-2 px-2">
                        <div class="col">
                            <p class="fs-5">CoolGamer123</p>
                        </div>
                        <div class="col text-nowrap">
                            <p class="fs-5"> <i class="bi bi-arrow-up"></i> 14</p>
                        </div>
                        <div class="col text-nowrap">
                            <p class="fs-4"><i class="bi bi-star-fill me-1"></i><i
                            class="bi bi-star-fill me-1"></i><i class="bi bi-star-fill me-1"></i><i
                            class="bi bi-star-fill me-1"></i><i class="bi bi-star me-1"></i></p>
                        </div>
                    </div>
                <div class="row px-2">
                    <p class="fs-6">I'm coming up on 300 hours in Noita. I still have not beaten it. I've seen the "final
                        level" once. I recognize this may be what is referred to as a "skill issue", but it
                        does not bother me in the slightest and I keep coming back. The skill I need to hone
                        is knowledge, and the only way to gain that knowledge is to die a few hundred more times.
                    </p>
                </div>
            </div>
            
            <div class="col-md offset-md-1 bg-danger-subtle border rounded border-1 border-danger mb-2">
                <div class="row mt-2 px-2">
                    <div class="col">
                        <p class="fs-5">CandyMode3212</p>
                    </div>
                    <div class="col text-nowrap">
                        <p class="fs-5"> <i class="bi bi-arrow-up"></i> 5</p>
                    </div>
                    <div class="col text-nowrap">
                        <p class="fs-4"><i class="bi bi-star-fill me-1"></i><i
                            class="bi bi-star-fill me-1"></i><i class="bi bi-star me-1"></i><i
                            class="bi bi-star me-1"></i><i class="bi bi-star me-1"></i></p>
                    </div>
                </div>
                
                <div class="row px-2">
                    <p class="fs-6">
                        Used to be great a long time ago, until about a year and half after its initial EA
                        release. After a 5 year break seems it only got worse. It's simply no fun anymore.
                        Too many things work against the player in a bad way and they just kept adding more
                        things like that and making anything that helped the player worse, even fun dumb
                        ones like the glass cannon perk. Even for a Roguelike it's just way too much.
                    </p>
                </div>
            </div>
        </div>

        <button class="button btn btn-success" @click="$emit('save-this-game',activeGame)">Select This Game!</button>
    </div>
</div>
    
    `
};

export default GameSelectorSection;