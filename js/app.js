import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import GameSelectorSection from "./components/GameSelectorSection.js";
import AddReviewModal from "./components/AddReviewModal.js";

const app = createApp({
    components: {
        GameSelectorSection,
        AddReviewModal,
    },

    data: function () {
        return {
            activeGame: {
                appId: "427520",
                name: "Factorio",
                tags: ["1", "1", "1"],
                achievementNumber: 30,
                shortDescription: "temp Description",
                releaseDate: "imagineThisIsTheDate",
                hoursPlayed: 36.3,
            },

            newReview: {},

            currentUser: {
                name: "testUser",
                id: "123123123123123123",
            },

            reviewList: [
                {
                    ratingNumber: 1,
                    completion: 'Game got too repetitive',
                    review: 'too many machines to build. would not build again. too many machines to build. would not build again. too many machines to build. would not build again.',
                    hoursPlayed: 0,
                    gameId: '427520',
                    gameName: 'Factorio',
                    userId: '76561198449377399',
                    userName: 'chromokiz',
                    communityVote: 10,
                    editing: false
                },

                {
                    ratingNumber: 4,
                    completion: 'Finished main quest',
                    review: "I really like how you can build your own base. I think that it's neat that you can build any way you want. I wish the tutorial was more robust. I like it more then Satisfactory. Here are more test words to make this review longer then the last.",
                    hoursPlayed: 40,
                    gameId: '427520',
                    gameName: 'Factorio',
                    userId: '76561199086724709',
                    userName: 'FranksSinatra',
                    communityVote: 4,
                    editing: false
                },

                {
                    ratingNumber: 4,
                    completion: 'Fully Completed',
                    review: "This game was really cool. One of the best dark fantasy RPGs. It is brutal, random, and unforgiving, but absolutely worth every minute of your time. The story, lore, and overall experience will stick with me for a long time.",
                    hoursPlayed: 80,
                    gameId: '1002300',
                    gameName: 'Fear and Hunger',
                    userId: '123123123123123123',
                    userName: 'testUser',
                    communityVote: 4,
                    editing: false
                },

                {
                    ratingNumber: 2,
                    completion: 'Game was boring',
                    review: "Core Keeper combines many gameplay elements from different genres in one game. That makes it a lot of fun and keeps you hooked. Unfortunately, in the endgame you notice that all these different areas ultimately lead nowhere. One example is the automation with conveyor belts. What do I actually need thousands of resources for that I produce there through automation? They pile up by the thousands in the box and barely help you in the further course of the game. The automated farms are fun, but in the end they aren't really needed.",
                    hoursPlayed: 26,
                    gameId: '1621690',
                    gameName: 'Core Keeper',
                    userId: '123123123123123123',
                    userName: 'testUser',
                    communityVote: 4,
                    editing: false
                }

            ],
        }
    },

    methods: {
        setActiveGame(activeGame) {
            this.activeGame = activeGame;
        },


        checkAlreadyReviewed(reviewList, username, id) {
            let returner = false

            reviewList.forEach(review => {
                if (review.username === username) {
                    if (review.gameID === id) {
                        returner = true;
                    }
                }
            });

            return returner
        },

        addReview(review) {
            this.reviewList.push(review);

            this.newReview = {}
        },

        editReview(review) {
            review.review = this.editingReview.review;
            review.ratingNumber = this.editingReview.ratingNumber;
            review.editing = false;
        },

        removeItem(review) {
            this.reviewList.splice(this.reviewList.indexOf(review), 1);
        }
    },

    computed: {

    },

    mounted: function () {
        if (localStorage.getItem('reviewList')) {
            this.reviewList = JSON.parse(localStorage.getItem('reviewList'));
        }
    },

    watch: {
        reviewList: {
            handler() {
                localStorage.setItem('reviewList', JSON.stringify(this.reviewList));
            },
            deep: true,
        },
    },
});

export default app;