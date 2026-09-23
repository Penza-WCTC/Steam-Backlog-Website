import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const app = createApp({
    data: function () {
        return {
            userPositiveTag: '',
            userNegativeTags: [],
            editingReview: {
                review: '',
                ratingNumber: 0,
            },
            newReview: {
                gameID: '427520', //this should be set when user selects a game
                gameName: 'Factorio', //this should be uneeded when we get api
                ratingNumber: 0,
                hours: 36.6, //eventually can get this data with API call but 4 now its hardcoded :(
                reasons: [],
                finished: true,
                review: '',
                username: "testUser", //this should be added when user signs in
                userID: '123123123123123123',
                communityVote: 0,
                editing: false,
            },
            reviewList: [
                {
                    gameID: '427520',
                    gameName: 'Factorio', //evenutally will use id to get this name
                    ratingNumber: 1,
                    hours: 0, //eventually use game id + user id to get this
                    reasons: ['Game got too repetitive', 'Game was boring'],
                    finished: false,
                    review: 'too many machines to build. would not build again. too many machines to build. would not build again. too many machines to build. would not build again.',
                    username: 'chromokiz', //eventually use user id to get this
                    userID: '76561198449377399',
                    communityVote: 10,
                    editing: false
                },

                {
                    gameID: '427520',
                    gameName: 'Factorio',
                    ratingNumber: 4,
                    hours: 40,
                    reasons: ['Finished main quest'],
                    finished: true,
                    review: "I really like how you can build your own base. I think that it's neat that you can build any way you want. I wish the tutorial was more robust. I like it more then Satisfactory. Here are more test words to make this review longer then the last.",
                    username: 'FranksSinatra',
                    userID: '76561199086724709',
                    communityVote: 4,
                    editing: false
                },

                {
                    gameID: '1002300',
                    gameName: 'Fear and Hunger',
                    ratingNumber: 4,
                    hours: 80,
                    reasons: ['Fully Completed'],
                    finished: true,
                    review: "This game was really cool. One of the best dark fantasy RPGs. It is brutal, random, and unforgiving, but absolutely worth every minute of your time. The story, lore, and overall experience will stick with me for a long time. ",
                    username: 'testUser',
                    userID: '123123123123123123',
                    communityVote: 4,
                    editing: false
                },

                {
                    gameID: '1621690',
                    gameName: 'Core Keeper',
                    ratingNumber: 2,
                    hours: 26,
                    reasons: ['Game was boring', 'Game got too repetitive'],
                    finished: false,
                    review: "Core Keeper combines many gameplay elements from different genres in one game. That makes it a lot of fun and keeps you hooked. Unfortunately, in the endgame you notice that all these different areas ultimately lead nowhere. One example is the automation with conveyor belts. What do I actually need thousands of resources for that I produce there through automation? They pile up by the thousands in the box and barely help you in the further course of the game. The automated farms are fun, but in the end they aren't really needed.",
                    username: 'testUser',
                    userID: '123123123123123123',
                    communityVote: 4,
                    editing: false
                },
            ],
            // userList: [
            //     {
            //         username: 'chromokiz',
            //         id: '76561198449377399',
            //         gamesPlayed: [
            //             '1621690',
            //             '312520'
            //         ],
            //         currentGame: '413150'
            //     },
            //     {
            //         username: 'FranksSinatra',
            //         id: '76561199086724709',
            //         gamesPlayed: [
            //             '1002300',
            //             '250900'
            //         ],
            //         currentGame: '881100'
            //     },
            //     {
            //         username: 'testUser',
            //         id: '123123123123123123',
            //         gamesPlayed: [
            //             '1002300',
            //             '1621690'
            //         ],
            //         currentGame: '427520'
            //     }
            // ]
        }
    },

    methods: {

        addTags(tags) {
            this.newReview.reasons = [];

            if (tags.length > 4) {
                this.newReview.reasons.push(tags);
            } else {
                tags.forEach(tag => {
                    this.newReview.reasons.push(tag);
                });
            }
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

        addItem() {

            console.log(!this.checkAlreadyReviewed(this.reviewList, this.newReview.username))

            if (!this.checkAlreadyReviewed(this.reviewList, this.newReview.username, this.newReview.gameID)) {
                this.reviewList.push(this.newReview);

                this.newReview = {
                    gameID: '427520',
                    gameName: '',
                    ratingNumber: 0,
                    hours: 36.6,
                    reasons: [],
                    finished: true,
                    review: '',
                    username: "testUser",
                    userID: '123123123123123123',
                    communityVote: 0,
                    editing: false
                }
            }
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
        if(localStorage.getItem('reviewList')){
            this.reviewList = JSON.parse(localStorage.getItem('reviewList'));
        }
    },

    watch: {
        reviewList:{
            handler(){
                localStorage.setItem('reviewList', JSON.stringify(this.reviewList));
            },
            deep: true,
        },
    },
});

export default app;