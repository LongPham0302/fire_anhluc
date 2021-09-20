<template>
    <header>
        <div class="container">
            <ul>
                <li><router-link to="/">Trang Chủ</router-link></li>
                <li><router-link to="/create">Tạo Task</router-link></li>
            </ul>
            <ul class="right">
                <li  >Đăng nhập với <router-link to="/"></router-link></li>
                <li><a href="/">Đăng xuất</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'home-header',
   
}
</script>