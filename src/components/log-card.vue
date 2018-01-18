<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .log-card {
    display: inline-block;
    overflow: hidden;
    height: 215px;
    width: 250px;
    border: solid black 2px;
    margin: 5px;
    border-radius: 15px;
  }

  .title {
    height: 10%;
    margin: 5px;
  }

  #logs {
    border-top: solid black 1px; 
    background-color: rgba(0,0,0,0.1);
    height: calc(90% - 10px);
    width: auto;
    display: flex;
    flex-direction: column;
  }
  
  .log-section {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .log-card-mileage {
    font-size: 3em;
  }

  .log-card-notes {
    margin-top: 5px;
  }
</style>

<template>
    <div class="log-card">
      <h3 class="title">{{title}}</h3>
      <div id="logs">
        <template v-for="(log, index) in content">
          <div class="log-section" v-bind:class="runType(log.effort)">
            <span class="log-card-mileage">{{log.mileage}}</span>
            <span class="log-card-notes">{{log.notes}}</span>
          </div>
        </template>
      </div>
    </div>
</template>

<script>
export default {
  name: 'log-card',

  props: [
    'title',
    'content'
  ],

  methods: {
    runType: function(effort) {
      var efforts = {
        'EASY': 'easy-run',
        'MEDIUM': 'medium-run',
        'HARD': 'hard-run'
      }
      return efforts[effort]
    }
  },

}
</script>

