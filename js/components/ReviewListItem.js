const ReviewListItem = {

    props: {
        review: { type: Object }
    },

    computed:{
        getSRC(){
            return`./images/test-images/${ this.review.userName }ProfileIcon.png`
        },

        getAlt(){
            return`A profile picture for ${ this.review.userName }`
        }
    },

    template: `
    <div>
        <div class="row g-3">
            <div class="col-md-2 offset-md-1 d-none d-md-block">
                <img :src="getSRC" :alt="getAlt" class="w-75 mx-auto border border-2 rounded-3">
            </div>
            <div class="col-md-9 offset-1 offset-md-0">
                <div class="row g-3">
                    <div class="col-md-6">
                        <p class="fs-4">{{review.userName}}</p>
                    </div>
                    <div class="col-md-6">
                        <p class="fs-4">
                            <i class="bi bi-star-fill ms-1" v-for="n in review.ratingNumber"></i>
                            <i class="bi bi-star ms-1" v-for="n in (review.ratingNumber-5)*-1" v-if="(review.ratingNumber-5)*-1"></i>
                        </p>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-md-6  d-none d-md-block">
                        <div class="row">
                            <p class="fs-4">Hours Played:</p>
                        </div>
                        <div class="row">
                            <p class="fs-5">{{review.hoursPlayed}}</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-auto">
                                <p class="px-2 py-1 fs-6 rounded-pill bg-info d-inline-block">{{review.completion}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-3 mt-2">
            <div class="offset-1 col-9">
                <p class="fs-4">Final Thoughts:</p>
                <p class="fs-6">{{review.review}}</p>
            </div>
            <div class="col-2">
                <p><i @click="review.communityVote++" :class="{'bi':true, 'pointer':true, 'bi-arrow-up-circle':true}"></i></p>
                <div>
                    <p>{{review.communityVote}}</p>
                </div>
                    <p><i @click="review.communityVote--" :class="{'bi':true, 'pointer':true, 'bi-arrow-down-circle':true}"></i></p>
                </div>
            </div>
        </div>
    
    `
}

export default ReviewListItem