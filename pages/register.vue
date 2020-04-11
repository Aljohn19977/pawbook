<template>
    <div>
        <!-- home login -->
        <div class="home-login">
            <div class="container">
                <div class="wrap-content">
                    <div class="row" style="margin-top:200px">
                        <div class="col s4"></div>
                        <div class="col s4 center">
                            <img src="images/logo.png" alt="" height="150" width="150">
                            <h1>Paw</h1>
                        </div>
                        <div class="col s4"></div>
                    </div>
                    <form style="margin-bottom:20px" @submit.prevent="submit"> 
                        <div class="content b-shadow">
                            <div class="input-field">
                                <i class="fa fa-user prefix"></i>
                                <input id="icon-user" type="text" v-model.trim="form.name" autofocus>
                                <label for="icon-user">Full Name</label>
                            </div>
                            <div class="input-field">
                                <i class="fa fa-envelope prefix"></i>
                                <input id="icon-email" type="email" v-model.trim="form.email" >
                                <label for="icon-email">Email</label>
                            </div>
                            <div class="input-field">
                                <i class="fa fa-key prefix"></i>
                                <input id="icon-password" type="password" v-model.trim="form.password" autocomplete="false">
                                <label for="icon-password">Password</label>
                            </div>
                            <client-only><div class="input-field">
                                <i class="fa fa-map-marker prefix"></i>
                                    <country-select id="icon-country" :countryName=true v-model.trim="form.country" top-country="US"/>
                                <label for="icon-country">Country</label>
                            </div></client-only>
                            <div class="input-field">
                                <i class="fa fa-user prefix"></i>
                                <input id="icon-address" type="text" v-model.trim="form.address">
                                <label for="icon-address">Address</label>
                            </div>
                            <client-only><div class="content">
                                <h5>Date of Birth</h5>
                                <p>
                                    <label>
                                        <date-picker v-model="form.birthdate" type="date" placeholder="Date of Birth" id="icon-date" style="min-width:100%;"></date-picker>
                                    </label>
                                </p>
                            </div></client-only>
                            <div class="content">
                                <h5>Gender</h5>
                                <div class="input-field">
                                    <select v-model.trim="form.gender">
                                        <option value="" disabled selected>Choose your Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>                                
                            </div>
                        </div>
                        <button type="submit" class="button waves-effect waves-light" href="">Sign Up</button>
                    </form>
                    <!-- <div class="login-with"> <h5>Sign in with</h5> <div class="row"> <div class="col s6"> <button class="button b-shadow waves-effect waves-light button-facebook">facebook</button> </div> <div class="col s6"> <button class="button b-shadow waves-effect waves-light button-google">Google</button> </div> </div> </div> -->
                </div>
            </div>
        </div>
        <!-- end home login -->
    </div>
    <!-- end home login -->
</template> 

<script>

    export default {
        data(){
            return{
                form: {
                    name:'',
                    email:'',
                    country:'', 
                    gender:'',  
                    birthdate:'',                   
                    password:'',
                    address:''
                },
            }
        },
        created(){
            if(this.$store.getters.authenticated){
                this.$router.push('/')
            }
        },
        methods:{
            async submit(){
                await this.$axios.$post("https://peaceful-hamlet-52896.herokuapp.com/api/auth/register", this.form)
                await this.$auth.loginWith("local", {
                data: {
                    email: this.form.email,
                    password: this.form.password
                }
            })

            this.$router.push('/')
            },
        }
    };
</script>
