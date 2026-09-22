import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const app = createApp({
    data: function () {
        return {
            newReview: {
                gameID : 0,
                ratingNumber : 0,
                hours : 0,
                reasons : [],
                finished : true,
                review : "",
                username : "",
                communityVote: 0,
            },
            reviewList: [
                {
                    userID: 1,
                    gameID: 0,
                    ratingNumber: 1,
                    hours: 0,
                    reasons: ['Game got too repetitive', 'Game was boring'],
                    finished: false,
                    review: 'too many machines to build. would not build again. too many machines to build. would not build again. too many machines to build. would not build again.',
                    username: 'chromokiz',
                    communityVote: 10,
                },

                {
                    userID: 2,
                    gameID : 0,
                    ratingNumber: 4,
                    hours: 40,
                    reasons: ['Finished main quest'],
                    finished: true,
                    review: "I really like how you can build your own base. I think that it's neat that you can build any way you want. I wish the tutorial was more robust. I like it more then Satisfactory. Here are more test words to make this review longer then the last.",
                    username: 'FranksSinatra',
                    communityVote: 4,
                },
            ],
        }
    },

    methods: {

    },

    computed: {

    },

    mounted: function () {

    },

    watch: {

    },
});

export default app;