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
    `;
  },

  createLog (date, mileage, minutes, effort, notes) {
    return gql`
      mutation{
        createDailyLog(     
          runDate: "${date}",
          mileage: ${mileage},
          effort: ${effort},
          notes: "${notes}",
          minutes: ${minutes}
        ) {
          id
        }
      }
    `;
  },  

  createUser (email, password) {
    return gql`
      mutation{
        createUser(authProvider: { email: { "${email}", "${password}" } })
      }
    `;
  },

  signInUser (email, password) {
    return gql`
      mutation {
        authenticateUser(email: "${email}", password: "${password}") {
          id
          token
        }
      }
    `;
  }
}