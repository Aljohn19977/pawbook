<template>
    <div>

    <!-- home login -->
    <div class="home-login">
        <div class="container">
            <div class="wrap-content">
                    <div class="row">
                            <div class="col s4">
                            </div>
                            <div class="col s4 center">
                                    <img src="images/logo.png" alt="" height="150" width="150"> 
                                    <h1>Paws</h1>
                            </div>
                            <div class="col s4">
                            </div>
                        </div>
                <form @submit.prevent="submit"> 
                    <div class="content b-shadow">
                        <div class="input-field">
                            <i class="fa fa-envelope prefix"></i>
                            <input id="icon-email" type="email" v-model.trim="form.email" autofocus>
                            <label for="icon-email">Email</label>
                        </div>
                        <div class="input-field">
                            <i class="fa fa-key prefix"></i>
                            <input id="icon-password" type="password" v-model.trim="form.password">
                            <label for="icon-password">Password</label>
                        </div>
                        <div class="infor">
                            <ul>
                                <li>
                                    <a href="">Forgot password?</a>
                                </li>
                                <li>
                                    Dont have account? <a href="/register">Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button type="submit" class="button waves-effect waves-light">Sign in</button>
                    <a href="/register" class="button waves-effect waves-light">Dont have account? Sign up</a>
                </form>
                <!-- <div class="login-with">
                    <h5>Sign in with</h5>
                    <div class="row">
                        <div class="col s6">
                            <button class="button b-shadow waves-effect waves-light button-facebook">facebook</button>
                        </div>
                        <div class="col s6">
                            <button class="button b-shadow waves-effect waves-light button-google">Google</button>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    </div>
    <!-- end home login -->
</template>

<script>

export default {
    data(){
        return{
            form: {
                email:'',
                password:''
            }
        }
    },
    created(){
        if(this.$store.getters.authenticated){
            this.$router.push('/')
        }
    },
    methods:{
        async submit(){
            await this.$auth.loginWith("local", {
                data: this.form
            })

            this.$router.push('/login')
         }
        
    }
}
</script>

