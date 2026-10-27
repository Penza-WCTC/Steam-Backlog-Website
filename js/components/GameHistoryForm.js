import GameHistoryCalendar from "./GameHistoryCalendar.js";

const GameHistoryForm = {

    using: {
        GameHistoryCalendar
    },

    data: {
        monthData: [],
        currentMonth :0,
    },

    computed: {
        
    },

    methods: {
        incrementDateUp(){
            currentMonth++;
        },

        incrementDateDown(){
            currentMonth--;
        }

        
    },

    template:`

    `


}

export default GameHistoryForm;