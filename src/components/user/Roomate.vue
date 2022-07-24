<template>
  <div class="wrapper">
        <!-- Slide bar -->
        <NavBar/>

        <!-- Page content -->
        <div id="content">
            <div class="top-navbar">
                <Header/>
            </div>

            <!-- Main content -->
            <div class="main-content">
                <h1>Đăng kí phòng</h1>
                <br><br>
                <table id="user-list-room" class="table table-striped" style="width:100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Khóa</th>
                            <th>Mã Số Sinh Viên</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="rm in roomates" :key="rm.id">
                            <td>{{rm.id}}</td>
                            <td>{{rm.username}}</td>
                            <td>{{rm.course_year}}</td>
                            <td>{{rm.student_code}}</td>
                            <td>Tài khoản đã active</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Khóa</th>
                            <th>Mã Số Sinh Viên</th>
                            <th>Ghi chú</th>
                        </tr>
                    </tfoot>
                </table>

                <!-- Footer -->
                <div class="footer-style">
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '../Header.vue'
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
export default {
    name: 'Roomate',
    components: {
        Header,
        NavBar,
        Footer
    },
    data() {
        return{
            roomates: []
        }
         
    },
    created() {
         var token = this.$store.state.token
         var id = this.$store.state.bookingRoom.room

         axios.get(`/api/room-user/${id}/`, {
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json'
             }
         })
         .then(resp => {
             console.log(resp);

             this.$store.commit('setRoomate', resp.data)
         }).catch(err => console.log(err))
         this.roomates = this.$store.state.roomates
    }
}
</script>

<style>

</style>