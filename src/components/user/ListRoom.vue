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
                    <thead class="text-center">
                        <tr>
                            <th>#</th>
                            <th>Tên Phòng</th>
                            <th>Đã đăng kí</th>
                            <th>Đối tượng phòng kí túc xá</th>
                            <th>Giá phòng trên tháng</th>
                            <th>Đăng kí</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="room in this.rooms" :key="room.id" class="text-center">
                            <td>{{room.id}}</td>
                            <td>{{room.room_name}}</td>
                            <td>{{room.booked_number}} / {{room.max_number}} ({{room.type_room}})</td>
                            <td>{{room.note}}</td>
                            <td>{{room.month_cost}}</td>
                            <td>
                                <p v-if="this.isBooked === 1" style="color: red">Bạn không thể đăng kí thêm</p>
                                <p v-else-if="this.isBooked === 2" style="color: blue">Bạn đã có phòng</p>
                                <button v-else class="btn btn-primary btn-action" @click="bookingRoom(room.id)">
                                    <i class="material-icons">check</i>
                                    Đăng kí
                                </button>
                                
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Name</th>
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
import Header from '../Header.vue'
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
import $ from 'jquery'
import axios from 'axios'
export default {
    name: 'ListRoom',
    components: {
        Header,
        NavBar,
        Footer
    },
    props: {
        isBooked: Number
    },
    data() {
        return {
            rooms: [],
        }
    },
    methods: {
        bookingRoom(roomId) {
            var token = this.$store.state.token
            console.log(token)
            axios.get('/api/auth', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(resp => {
                var userId = resp.data.user.id
                const formData = {
                    user: userId,
                    room: roomId
                }
                axios.post('/api/booking-room/', formData, {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                }).then(resp => {
                    console.log("Dang ki thanh cong")
                    this.$store.commit('setBookingRoom', resp.data)
                    this.$router.push('/user/booking-room')
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        }
    },
    mounted() {
        $('#user-list-room').DataTable({
            "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
        }); 
    },
    created() {
        //Kiểm tra xem User này đã đăng kí phòng chưa
        var token = this.$store.state.token

        axios.get('/api/room/', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(resp => {
            console.log(resp);
            this.$store.commit('setRooms', resp.data)
        }).catch(err => console.log(err))
        this.rooms = this.$store.state.rooms
    }
}
</script>

<style scoped>
    .btn-action {
        width: 150px;
        border-radius: 50px;
        border: none;
        background: rgb(123, 97, 226);
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 20px !important;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
        }
</style>