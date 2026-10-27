const GameHistoryCalendar = {

    props: {
        monthArray: {type: Array, required: true},
        currentMonthNumber: {type: number, required: true},
    },

    methods:{
        thisWeek(n){
            let returnedArray = [];

            for (let index = 0; index < 6; index++) {
                returnedArray[index] = monthArray[index+(7*n)];
            }

            return returnedArray;
        },

    },

    computed:{
        startOfMonth(){
            const date = new Date(2027, currentMonthNumber,1);
            return date.getDay();
        },

        daysInMonth(){
            return new Date(2026, currentMonthNumber, 0).getDate();
        },
    },

    template:`
        <div class="border bg-secondary">
            <p class="text-center">September</p>
            <table class="table table-primary table-bordered text-center">
                <tr v-for="n in Math.ciel((startOfMonth + daysInMonth)/7)">
                    <td v-for="day in thisWeek(n-1)"></td>
                </tr>
            </table>
        </div>
    `
};

export default GameHistoryCalendar;