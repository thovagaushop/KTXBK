<template>
  <router-view :isBooked="isBooked"></router-view>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UserHome',
    data() {
      return {
        isBooked: 0
      }
    },
    created() {
      var token = this.$store.state.token
      var currentUser = this.$store.state.curentUser
      axios.get('/api/booking-room/', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
      }).then(resp => {
            var bookings = resp.data
            var check1 = false
            bookings.forEach(element => {
              if(element.user === currentUser.id) check1 = true
            });
            if (check1) this.isBooked = 1
            else this.isBooked = 0 

            //Check user đã có phòng chưa
            if (this.isBooked === 0) {
              axios.get('/api/room-user/', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
                }).then(resp => {
                      var room_users = resp.data
                      var check = false
                      room_users.forEach(element => {
                        if(element.user === currentUser.id) {
                          check = true
                        } 
                      });
                      if (check) this.isBooked = 2
                      else this.isBooked = 0 
                }).catch(err => console.log(err))
            }
            
      }).catch(err => console.log(err))

      
    }
}
</script>

<style>

</style>