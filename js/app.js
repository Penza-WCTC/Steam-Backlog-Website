import {createApp} from 'https://unpkg.com/vue@3/dist/vue.global.js';

const app = createApp({
    data:function(){
        return{
            newReview:{
                userID,
                gameID,
                ratingNumber,
                hours,
                reasons,
                finished,
                review
            },
            newUser:{
                userID,
                image,
                username
            },
            reviewList:{
                [
                    {
                        userID = 1,
                        gameID,
                        ratingNumber = 1,
                        hours = 0,
                        reasons = ['Game got too repetitive','Game was boring'],
                        finished = false,
                        review = 'too many machines to build. would not build again. too many machines to build. would not build again. too many machines to build. would not build again.'
                    },

                    {
                        userID = 2,
                        gameID,
                        ratingNumber = 4,
                        hours = 40,
                        reasons = ['Finished main quest'],
                        finished = true,
                        review = "I really like how you can build your own base. I think that it's neat that you can build any way you want. I wish the tutorial was more robust. I like it more then Satisfactory. Here are more test words to make this review longer then the last."
                    }
                ]
            },
            userList:{
                [
                    {
                        userID = 1,
                        image = 'chromokizProfileIcon',
                        username = 'chromokiz'
                    },
                    {
                        userID = 2,
                        image = 'franksSinatraProfileIcon',
                        username = 'Franks Sinatra'
                    }
                ]
            }

        }
    },

    methods:{

    },

    computed:{

    },

    mounted:function(){

    },
    
    watch:{

    },
});

