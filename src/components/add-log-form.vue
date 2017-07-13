
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
    width: 100%
  }

  .log-input {
    width: 50%;
    max-width: 250px;    
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
</style>

<template>
  <div class='add-log-form'> 
      <div :class="{'add-form': true, 'add-form-adding': adding}">
        <template v-if="adding">
          <div class="form-container">
            <label>Mileage</label><input class="log-input" type="text"/>
            <label>Time</label><input class="log-input" type="text"/>
            <label>Effort</label><input class="log-input" type="text"/>
            <label>Notes</label><textarea class="log-input log-notes" type="text"/>
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
export default {
  name: 'add-log-form',

  data() {
    return {
      adding: false
    }
  }
}
</script>

