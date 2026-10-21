const ProgressBar = {

    props: {
        progressText: {type: Array, required: true},

        //progress will be an array of bool, [false, false, true, false false false] ect. there *should* only be one true.
        //the one true is how far we are in the bar.
        progress: {type: Array, required: true},
    },

    computed: {
        getStylingBarArray(){
            let barLength = this.progressText.length;
            let stylingBar = [];
            let hasBeenTrue = false;
            let isNotFirst = false;

            for (let index = 0; index < barLength; index++) {
                if(!isNotFirst){
                    stylingBar.push(2);
                    isNotFirst=true;
                }else{
                    if(!hasBeenTrue){
                        if(this.progress[index]){
                            stylingBar.push(1);
                            hasBeenTrue = true;
                        }else{
                            stylingBar.push(3);
                        }
                    }else{
                        stylingBar.push(0);
                    }
                }
            }

            if(!hasBeenTrue){
                stylingBar[0] = 4;
                
                for (let index = 1; index < stylingBar.length; index++) {
                    stylingBar[index] = 0;
                }
            }
            
            return stylingBar;
        },

    },
    
    methods:{
        getText(index){
            if(this.progressText[index] != null){
                return this.progressText[index];
            }
            return "";
        },
    },

    template:`
        <div class="w-100 mb-4 bg-info-subtle rounded border border-2">
            <div class="d-flex justify-content-around rounded">
                <div v-for="(section, index) in getStylingBarArray" :class="{'w-fill':true,'flex-fill':true,'text-center':true,'rounded':true, 'bg-light':section>0,'rounded':section>0,'border':section>0,'border-2':section>0,'border-primary-subtle':section>0,'border-end-0':section==2 || section==3,'rounded-end-0':section==2|| section==3,'border-start-0':section==1|| section==3,'rounded-start-0':section==3,'rounded-end-5':section==1 || section==4,'rounded-start-4':section==4}">{{getText(index)}}</div>
            </div>
        </div>
    `
}

export default ProgressBar;