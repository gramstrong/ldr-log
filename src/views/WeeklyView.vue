<script>
</script>

<style scoped>

</style>

<template>
  <div>
    <template v-for="(mileage, day) in week">
      <card :title="day">{{mileage}}</card>
    </template>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  name: 'WeeklyView',
  components: {
    card
  },
  data () {
    return {
      week: {
        monday: 1,
        tuesday: 1,
        wednesday: 1,
        thursday: 1,
        friday: 1,
        saturday: 1,
        sunday: 1,
      }
    }
  }
}
</script>

