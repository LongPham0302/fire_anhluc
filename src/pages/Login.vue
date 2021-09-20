<template>
    <div id="page-login">
        <div class="container">
            <div class="card card-container">
                <img id="profile-img" alt="" class="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />

                <form id="form-signin" class="form-signin" >
                    <div class="form-group">
                        <input 
                            type="text" name="email" class="form-control" placeholder="Địa chỉ email" />
                    </div>
                    <div class="form-group">
                        <input 

                            type="password" name="password" class="form-control" placeholder="Mật khẩu" />
                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Đăng nhập</button>
                </form>
                <div><router-link to="/register" class="register">Đăng ký một tài khoản!</router-link></div>
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