import gql from 'graphql-tag'
import dateFns from 'date-fns'
import validate from './utilities/validation';

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
    },

    getEfforts () {
        return gql`
        query {
            effortsEnum: 
            __type(name: "Effort") {
                name
                enumValues {
                name
                }
            }
        }        
        `
    },

    createLog (runDate, mileage, effort, notes) {
        return gql`
        mutation{
            createDailyLog(     
                runDate: "2018-01-11T07:00:00.000Z",
                mileage: 5,
                effort: EASY,
                notes: "Notes"
            ) {
                id
            }
        }
        `
    }
}