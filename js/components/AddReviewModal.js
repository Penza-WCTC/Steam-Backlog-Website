const AddReviewModal = {

    data: function () {
        return {
            reviewObject: {
                ratingNumber: 1,
                completion: "",
                review: "",

                hoursPlayed: 0,
                gameId: "",
                gameName: "",

                userId: "",
                userName: "",

                communityVote: 0,
                editing: false,
            },
        }
    },

    props:{
        activeGame: {type: Object},
        userObject: {type: Object},
    },

    methods: {
        addReview(){
            this.reviewObject.completion = this.setCompletion(this.reviewObject.completion);

            this.reviewObject.hoursPlayed = this.activeGame.hoursPlayed;
            this.reviewObject.gameId = this.activeGame.appId;
            this.reviewObject.gameName = this.activeGame.name;

            this.reviewObject.userId = this.userObject.id;
            this.reviewObject.userName = this.userObject.name;

            this.$emit('add-review', {...this.reviewObject});
        
            this.review = {
                ratingNumber: 1,
                completion: "",
                review: "",

                hoursPlayed: 0,
                gameId: "",
                gameName: "",

                userId: "",
                userName: "",

                communityVote: 0,
                editing: false,
            };
        },

        setCompletion(completion){
            if(completion == '1'){
                return "Completed Tutorial"
            }else if(completion == '2'){
                return "Started Main Goal"
            }else if(completion == '3'){
                return "Fully Completed Main Goal"
            }else if(completion == '4'){
                return "Completed Main Goal and Started Sidequest"
            }else if(completion == '5'){
                return "100%'d Game"
            }
        },
    },

    template: `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Review Game</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="w-100 d-flex flex-column justify-content-evenly" @submit.prevent="addReview">

                        <select class="form-select form-select-md mb-2" aria-label="Default select example" v-model="reviewObject.completion">
                            <option selected>How far did you get?</option>
                            <option value="1">Completed Tutorial</option>
                            <option value="2">Started Main Goal</option>
                            <option value="3">Fully Completed Main Goal</option>
                            <option value="4">Completed Main Goal and Started Sidequest</option>
                            <option value="5">100%'d Game</option>
                        </select>

                        <div class="mb-2">

                            <p class="fs-5 text-nowrap">Rating:
                                <i :class="{'bi':true, 'pointer':true, 'bi-star-fill':reviewObject.ratingNumber > 0, 'bi-star':reviewObject.ratingNumber == 0,  'ms-2':true}"
                                @click="reviewObject.ratingNumber = 1"></i>
                                
                                <i :class="{'bi':true, 'pointer':true, 'bi-star-fill':reviewObject.ratingNumber > 1, 'bi-star':reviewObject.ratingNumber <= 1,  'ms-2':true}"
                                @click="reviewObject.ratingNumber = 2"></i>
                                                        
                                <i :class="{'bi':true, 'pointer':true, 'bi-star-fill':reviewObject.ratingNumber > 2, 'bi-star':reviewObject.ratingNumber <= 2,  'ms-2':true}"
                                @click="reviewObject.ratingNumber = 3"></i>
                                                            
                                <i :class="{'bi':true, 'pointer':true, 'bi-star-fill':reviewObject.ratingNumber > 3, 'bi-star':reviewObject.ratingNumber <= 3,  'ms-2':true}"
                                @click="reviewObject.ratingNumber = 4"></i>
                                                                
                                <i :class="{'bi':true, 'pointer':true, 'bi-star-fill':reviewObject.ratingNumber > 4, 'bi-star':reviewObject.ratingNumber <= 4,  'ms-2':true}"
                                @click="reviewObject.ratingNumber = 5"></i>
                            </p>
                        </div>

                        <label for="finalThoughts" class="fs-5">Final Thoughts:</label>
                        <textarea name="finalThoughts" id="finalThoughts" class="fs-6 mb-2" v-model="reviewObject.review"></textarea>

                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
}

export default AddReviewModal