<template>
  <!-- Sidebar  -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3><img src="../../public/img/logo.jpg" class="img-fluid"/><span>Binh design</span></h3>
        </div>
        <ul class="list-unstyled components">
            <li  class="active">
                <router-link :to="{name: 'UserDashboard'}" class="dashboard"><i class="material-icons">dashboard</i><span>Trang chủ</span></router-link>
            </li>
    
            <div class="small-screen navbar-display">
                <li class="dropdown d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="#homeSubmenu0" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="material-icons">notifications</i><span> 4 notification</span>
                    </a>
                    <ul class="collapse list-unstyled menu" id="homeSubmenu0">
                        <li>
                            <a href="#">You have 5 new messages</a>
                        </li>
                        <li>
                            <a href="#">You're now friend with Mike</a>
                        </li>
                        <li>
                            <a href="#">Wish Mary on her birthday!</a>
                        </li>
                        <li>
                            <a href="#">5 warnings in Server Console</a>
                        </li>
                    </ul>
                </li>
            
                <li  class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="#"><i class="material-icons">apps</i><span>apps</span></a>
                </li>
            
                <li  class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="#"><i class="material-icons">person</i><span>user</span></a>
                </li>
            
                <li  class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="#"><i class="material-icons">settings</i><span>setting</span></a>
                </li>
            </div>
        
        
            <li class="dropdown">
                <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="material-icons">home</i><span>Quản lý đăng ký</span>
                </a>
                <ul class="collapse list-unstyled menu" id="homeSubmenu1">
                    <li>
                        <router-link :to="{name: 'RoomRegistration'}">Đăng ký phòng</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'BookingRoom'}">Xem đăng ký</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Roomate'}">Danh sách bạn cùng phòng</router-link>
                    </li>
                </ul>
            </li>
            
            <li class="dropdown">
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="material-icons">pin_drop</i><span>Dịch vụ hỗ trợ</span>
                </a>
                <ul class="collapse list-unstyled menu" id="pageSubmenu2">
                    <li>
                        <a href="#">Tiệm giặt là</a>
                    </li>
                    <li>
                        <a href="#">Phòng tự học chung</a>
                    </li>
                </ul>
            </li>
            
            <li class="dropdown">
                <a href="#pageSubmenu3" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="material-icons">support_agent</i><span>Hỗ trợ, phản ánh</span>
                </a>
                <ul class="collapse list-unstyled menu" id="pageSubmenu3">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>

            <li class="dropdown">
                <router-link :to="{name: 'ListCadres'}" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="material-icons">group</i><span>Cán bộ</span>
                </router-link>
                <ul class="collapse list-unstyled menu" id="pageSubmenu4">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            
            <li class="dropdown">
                <a href="#pageSubmenu5" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="material-icons">menu_book</i><span>Tài liệu học tập</span>
                </a>
                <ul class="collapse list-unstyled menu" id="pageSubmenu5">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            
            
            
            <li class="dropdown">
                <a href="#pageSubmenu6" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="material-icons">bookmark</i><span>Tài liệu chung</span>
                </a>
                <ul class="collapse list-unstyled menu" id="pageSubmenu6">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            
            
            <li class="dropdown">
                <a href="#pageSubmenu7" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="material-icons">payments</i><span>Thanh toán</span>
                </a>
                <ul class="collapse list-unstyled menu" id="pageSubmenu7">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            
            <li class="">
                <a href="#"><i class="material-icons">event_note</i><span>Bảng ghi chú</span></a>
            </li>
            <li class="">
                <a href="#"><i class="material-icons">chat</i><span>Tin nhắn</span></a>
            </li>
                <li  class="">
                <a href="#"><i class="material-icons">account_box</i><span>Tài khoản</span></a>
            </li>
        </ul>  
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>

</style>