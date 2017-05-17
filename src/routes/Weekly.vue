
<style scoped>
  .week-view {
    display: flex;
    flex-direction: row;
  }
</style>

<template>
  <div class='week-view'>
    <template v-for="(data, day) in week">
      <card :title="day">
        {{data.mileage}}
      </card>
    </template>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  name: 'Weekly',
  components: {
    card
  },
  data () {
    return {
      week: {
        monday: {
          mileage: 4,
          feel : 0
        },
        tuesday: {
          mileage: 5,
          feel : 1
        },
        wednesday: {
          mileage: 3,
          feel : 0
        },
        thursday: {
          mileage: 10,
          feel : 1
        },
        friday: {
          mileage: 2,
          feel : 2
        },
        saturday: {
          mileage: 6,
          feel : 1
        },
        sunday: {
          mileage: 4,
          feel : 1
        }
      }
    }
  }
}
</script>

