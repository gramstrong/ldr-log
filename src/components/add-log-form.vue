
<style scoped>
  .add-log-button {
    cursor: pointer;    
    border-radius: 50px;
    transition: transform .7s;
    padding: 5% 5%;
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
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 110px;
    width: 100%
  }

  .log-input {
    width: 215px;
    margin: 0 0 20px 0;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 40px;
    transition: all .7s;    
  }

  .log-notes {
    width: 75%;
    height: 150px;
    font-size: 25px;
  }

  .efforts {
    font-size: 32px;
  }

  .effort-label {
    font-size: 20px;
  }

</style>

<template>
  <div class='add-log-form'> 
      <div :class="{'add-form': true, 'add-form-adding': adding}">
        <template v-if="adding">
          <div class="form-container">
            <label class="effort-lable">Mileage</label><input class="log-input" type="text"/>
            <label class="effort-lable">Time</label><input class="log-input" type="text"/>
            <label class="effort-lable">Effort</label>
            <select class="log-input efforts">
              <option v-for="effort in efforts">{{effort.name}}</option>
            </select>
            <label class="effort-label">Notes</label><textarea class="log-input log-notes" type="text"/>
          </div>
        </template>
        <img v-on:click="adding = !adding" :class="{
          'add-log-button': true,
          'rotated': adding
        }" src="../assets/add-log-button.svg" height="60"/>
      </div>
  </div>
</template>

<script>
import queries from '@/queries';

export default {
  name: 'add-log-form',

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

