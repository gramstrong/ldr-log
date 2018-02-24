<style>

  .log-form-item {
    width: 215px;
    margin: 0 0 20px 0;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 40px;
    transition: all .7s;    
  }

  .log-form-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>

<style scoped>

  .add-log-button {
    cursor: pointer;    
    border-radius: 50px;
    transition: transform .7s;
    padding: 5% 5%;
    position: absolute;
    top: 0;
    right: -10px;
  }

  .rotated {
    transform: rotate(135deg);
  }

  .add-form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 105px;
    background-color: none;
    transition: border-top-color .7s, height .7s;
    border-top: 1px solid;    
    border-top-color: #FFF;
    background-color: #FFF;    
  }

  .add-form-adding {
    border-top-color: #000;
    height: 65vh;
    overflow: hidden;
  }

  .form-container {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;    
  }

  .efforts {
    font-size: 32px;
  }

</style>

<template>
  <div class='add-log-form'> 
      <div :class="{'add-form': true, 'add-form-adding': adding}">
        <img v-on:click="adding = !adding" :class="{
          'add-log-button': true,
          'rotated': adding
        }" src="../assets/add-log-button.svg" height="45"/>
        <template v-if="adding">
          <div class="form-container">
            <div class="form">
              <log-input title="Mileage" type="text"/>
              <log-input title="Time" type="text"/>
              <log-effort-select title="Effort" :efforts="efforts"/>
              <log-input :textarea="true" title="Notes" type="text"/>              
            </div>
          </div>
        </template>
      </div>
  </div>
</template>

<script>
import queries from '@/queries';
import logInput from './log-input.vue';
import logEffortSelect from './log-effort-select.vue';

export default {
  name: 'add-log-form',

  components: {
    logInput,
    logEffortSelect
  },

  data() {
    return {
      adding: false,
      efforts: []
    }
  },

  watch: {
    effortsEnum: function() {
      this.efforts = this.effortsEnum.enumValues;
    }
  },

  apollo: {
    effortsEnum: {
      query: queries.getEfforts(),
    }
  }
}
</script>

