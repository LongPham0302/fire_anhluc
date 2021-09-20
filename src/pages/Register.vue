<template>
    <div id="page-register">
        <div class="container">
            <div class="card card-container">
                <img id="profile-img" alt="" class="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                <p id="profile-name" class="profile-name-card"></p>

                <form id="form-signup" class="form-signin">
                    
                    <div class="form-group">
                        <!-- <label>Email</label> -->
                        <input 
                           
                            type="text" class="form-control" placeholder="Địa chỉ email" />
                    </div>
                    <div class="form-group">
                        <!-- <label>Mật khẩu</label> -->
                        <input 
                            type="password" class="form-control" placeholder="Mật khẩu" />
                    </div>
                    <div class="form-group">
                        <!-- <label>Nhập lại mật khẩu</label> -->
                        <input 
                            type="password" class="form-control" placeholder="Nhập lại mật khẩu" />
                    </div>
                    <button 
                        class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Đăng ký</button>
                </form>

                <router-link to="/login" class="register">Đăng nhập</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  
}
</script>

<style>
    .register, .register:hover, .register:focus {
        color: #337ab7;
    }
</style>