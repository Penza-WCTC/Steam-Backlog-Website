import Carousel from "./Carousel.js";

const CarouselHeader = {
    components: {
        Carousel,
    },

    data: function () {
        return {
            activeGameArray: [],

            tempFullLibrary: [
                "881100","753640","1390190","1000010","1000010",
                "400",
                "440",
                "500",
                "550",
                "620",
                "4000",
                "730",
                "105600",
                "220",
                "240",
                "377160",
                "413150",
                "489830",
                "381210",
                "292030",
                "271590",
                "1174180",
                "945360",
                "252490",
                "346110",
                "322330",
                "550650",
                "976730",
                "418370",
                "582010"],

            rerollsLeft: this.rerollsAllowed +1
        };
    },

    computed: {
        imageIdArray(){
            const tempArray = [];

            let counter = 0;
            this.activeGameArray.forEach(game => {
                tempArray[counter] = game.appId;
                counter++;
            });
            
            return tempArray;
        }
    },

    props: {
        rerollsAllowed: {type: Number, default: 5}
    },

    methods: {
        getRandomGames() {
            if(this.rerollsLeft >= 1){
                if(this.tempFullLibrary.length >= 5){
                    for (let i = 0; i < 5; i++) {
                        this.activeGameArray[i] = this.createGameObject(this.tempFullLibrary.splice(Math.floor(Math.random() * (this.tempFullLibrary.length)), 1)[0]);
                    }
                }
                this.rerollsLeft --;
            }
        },

        createGameObject(id) {
            const gameObject = {
                appId: ""+id,
                name: "tempName"+id,
                tags: ["temp1"+id, "temp2"+id, "temp3"+id],
                achievementNumber: 10,
                shortDescription: "This is "+id+"'s temp description!",
                releaseDate: "August 23rd",
                hoursPlayed: 0,
            }

            return gameObject
        },

        shiftListLeft() {
            const holder = this.activeGameArray.shift();
            this.activeGameArray.push(holder);
        },

        shiftListRight() {
            const holder = this.activeGameArray.pop();
            this.activeGameArray.unshift(holder);
        }
    },

    mounted() {
        this.getRandomGames()
    },

    template: `
        <div>
            <carousel :image-id-array></carousel>
            <div class="d-flex justify-content-evenly">
                <button @click="shiftListLeft" class="button btn btn-primary"><i class="bi bi-arrow-left"></i></button>
                <button @click="getRandomGames" type="button" class="btn btn-success position-relative">
                    Re-Roll All
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {{rerollsLeft}}
                        <span class="visually-hidden">Re-rolls left</span>
                    </span>
                </button>
                <button @click="shiftListRight" class="button btn btn-primary"><i class="bi bi-arrow-right"></i></button>
            </div>
        </div>
        `
}

export default CarouselHeader;