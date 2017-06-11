import gql from 'graphql-tag'
import dateFns from 'date-fns'

export default {

    getWeek () {
        var today = new Date();
        var beginWeek = dateFns.format(dateFns.startOfWeek(today), 'YYYY-MM-DD');
        var endWeek = dateFns.format(dateFns.endOfWeek(today), 'YYYY-MM-DD');

        return gql`
            query {
                week: allDailyLogs(filter: {
                    runDate_gte: "${beginWeek}"
                    runDate_lte: "${endWeek}"
                }){
                    id
                    mileage
                    effort
                    notes
                    runDate
                }
            }
        `;
    }
}