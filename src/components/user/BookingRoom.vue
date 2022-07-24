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
                <h1>Đơn Đăng Kí</h1>
                <br><br>
                <table id="user-booking-room" class="table table-striped" style="width:100%">
                    <thead>
                        <tr>
                            <th>Tên Kí Túc Xá</th>
                            <th>Phòng Đã Đăng Kí</th>
                            <th>Kì Đăng Kí</th>
                            <th>Ngày Đăng Kí</th>
                            <th>Ngày Xác Nhận</th>
                            <th>Trạng Thái Yêu Cầu</th>
                            <th>Loại</th>
                            <th>In Đơn Đăng Kí</th>
                            <th>Lựa Chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="this.isBooked === 1">
                            <td>KTX Bách Khoa</td>
                            <td>{{this.bookingRoom.room_name}}</td>
                            <td>{{getCourse()}}</td>
                            <td style="width=20px !important">{{getBookedDate(bookedDate)}}</td>
                            <td></td>
                            <td>
                                <p class="message">Đăng kí thành công, SV thanh toán theo hướng dẫn</p>
                            </td>
                            <td>SV ngoại trú đăng kí</td>
                            <td>
                                <button class="btn btn-primary print">
                                    <i class="material-icons">print</i>
                                    In
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-primary delete" @click="bookingRoom(s)">
                                    <i class="material-icons">check</i>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                        <tr v-else>
                            No Data Here
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Tên Kí Túc Xá</th>
                            <th>Phòng Đã Đăng Kí</th>
                            <th>Kì Đăng Kí</th>
                            <th>Ngày Đăng Kí</th>
                            <th>Ngày Xác Nhận</th>
                            <th>Trạng Thái Yêu Cầu</th>
                            <th>Loại</th>
                            <th>In Đơn Đăng Kí</th>
                            <th>Lựa Chọn</th>
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
import $ from 'jquery'
import Header from '../Header.vue'
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
export default {
    name: 'BookingRoom',
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
            bookingRoom: {},
            bookedDate: null
        }
    },
    methods: {
        getCourse() {
            var today = new Date()
            var course1 = [9, 10, 11, 12, 1]
            var course2 = [2, 3, 4, 5, 6]
            var course3 = [7, 8]
            var course = ""
            if (course1.includes(today.getMonth() + 1)) course = "1"
            else if(course2.includes(today.getMonth() + 1)) course = "2"
            else course = "3"
            return today.getFullYear() + course;
        },
        getBookedDate(date) {
            var day = new Date(date)
            return day
        }
    },
    created() {
        console.log(this.isBooked)
        if (this.isBooked === 1) {
            var token = this.$store.state.token
            var user = this.$store.state.curentUser

            var rooms = this.$store.state.rooms
            var bookingRoom = this.$store.state.bookingRoom
            var roomBooked = rooms.find(el => el.id === bookingRoom.id)
            this.bookingRoom = roomBooked
            this.bookedDate = this.$store.state.bookingRoom.created_date
        }
    },
    mounted() {
        $('#user-booking-room').DataTable()
    }
}
</script>

<style>
    .message {
        padding: 10px;
        font-weight: bold;
        font-size: 12px;
        color: white;
        background: #0d6efd;
        border-radius: 10px;
    }

    .print {
        font-style: italic;
        font-size: 12px;
        font-weight: bold;
    }

    .delete {
        font-style: italic;
        font-size: 12px;
        font-weight: bold;
        color: rgb(27, 26, 26);
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 16px !important;  /* Preferred icon size */
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