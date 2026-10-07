const GameDescription = {

    props:{
        activeGame: {type: Object, default: {name: "temp", shortDescription: "tempDesc", tags: ["temp1","temp2","temp3"]}}
    },

    template: `
        <div class="text-center">
            <p class="fs-2">
                {{activeGame.name}}
            </p>
            <hr>
        </div>
    
        <div class="row mb-1">
        <div class="col-md-5">
            <div class="row">
                <p class="fs-4 text-center">
                    Description
                </p>
            </div>
            <div class="row">
                <p class="fs-6">
                    {{activeGame.shortDescription}}
                </p>
            </div>
        </div>
        
        <div class="offset-md-2 col-md-5">
            <div class="row">
                <p class="fs-4">Tags: </p>
                <div>
                    <p class="px-2 py-1 rounded-pill bg-info d-inline-block me-1"
                    v-for="tag in activeGame.tags">{{tag}}</p>
                </div>
            </div>
        </div>
    </div>`
}

export default GameDescription

