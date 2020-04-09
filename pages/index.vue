<template>
    <div>
	<!-- navbar -->
	<div class="navbar navbar-home">
		<div class="container">
                        <!-- <div class="vld-parent">
        <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click.prevent="doAjax">fetch Data</button>
    </div> -->
			<div class="row">
				<div class="col s3">
					<div class="content-left">
						<router-link to = "/profile"><i class="material-icons">person</i></router-link>
                    </div>
				</div>
				<div class="col s6">
					<div class="content-center">
						<a href="index.html"><h1>PAWS</h1></a>
					</div>
				</div>
				<div class="col s3">
					<div class="content-right">
						<a href="contact.html"><i class="material-icons">chat</i></a>
                        <a @click.prevent="logout"><i class="material-icons">exit_to_app</i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end navbar -->
	
	<!-- sidebar -->
	<div class="sidebar-panel">
		<ul id="slide-out" class="collapsible sidenav side-left side-nav sidenav-close">
			<li>
                <div class="user-view">
                    <div class="background">
                        <img src="images/bg-user.jpg" alt="">
                    </div>
                    <img class="circle responsive-img" src="images/profile.png" alt="">
                    <span class="white-text name">John Doe</span>
                </div>
            </li>
            <li><a href="home-pages.html"><i class="fa fa-home"></i>Write Post</a></li>
            <li><a href="home-pages.html"><i class="fa fa-home"></i>Profile</a></li>
			<li><a href="element-list.html"><i class="fa fa-sliders"></i>Pets</a></li>
			<li><a href="pages-list.html"><i class="fa fa-clone"></i>Logout</a></li>
		</ul>
	</div>
	<!-- end sidebar -->

	<!-- profile -->
	<div class="container">
		<div class="profile segments-page">
				<div class="row">
					<div class="col s5">
						<div class="contents">
                            <button @click.prevent="post" class="button button-custom waves-effect waves-light-grey button-blue button-full blue b-shadow"><i class="material-icons">forum</i></button>
						</div>
                    </div>
                    <div class="col s5">
						<div class="contents">
							<button @click.prevent="pet" class="button button-custom waves-effect waves-light-grey button-red button-full red b-shadow"><i class="material-icons">pets</i></button>
						</div>
					</div>
                    <div class="col s2">
						<div class="contents">
							<button @click.prevent="pet" class="button button-custom waves-effect waves-light-grey button-green button-full green b-shadow"><i class="material-icons">search</i></button>
						</div>
					</div>
				</div>
                <div class="forum-single b-shadow p-gallery" v-for="post in posts" :key="post.id">
                    <div class="content-user">
                        <img v-lazy="post.user.profile_picture_id" alt="">
                        <div class="title">
                            <h5>{{ post.user.name }}</h5>
                            <span>{{ post.date_posted }} </span>
                        </div>
                    </div>
                    <div class="content-text">
                        <h4>{{ post.title }}</h4>
                        <!-- <div class="date">
                            <i class="fa fa-calendar"></i>
                            13 march 2020
                        </div> -->
                        <p>{{ post.content }}</p>
                    </div>
                	<div class="content" style="padding-top:10px">
							<a class="waves-effect waves-light" :href="post.image" data-lightbox="image">
								<img v-lazy="post.image" alt="" >
							</a>
					</div>
                    <div class="content-info">
                        <ul>
                            <li>
                                <a href=""><i class="material-icons">reply</i></a>
                            </li>
                            <li>
                                <h5>0</h5>
                                <span>replies</span>
                            </li>
                            <li>
                                <h5>0</h5>
                                <span>views</span>
                            </li>
                        </ul>
                    </div>
                </div>
		</div>
	</div>
	<!-- end profile -->
    
    </div>
    <!-- end home login -->
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

export default {
	data() {
		return {
        posts: [],
                isLoading: false,
                fullPage: true       
		}
    },
            components: {
            Loading
        },
    middleware: ['auth'],
    async asyncData({ $axios,store,router }) {
       
        if(!store.getters.authenticated){
            router.push('/login')
        }
        // let {data} = await $axios.$get(`http://pawbookserverapi.test/api/getUserPet`);
		let {data} = await $axios.$get(`http://pawbookserverapi.test/api/post`);
        return { posts: data };
	},
    created(){

    },
    methods: {
        async logout(){
            await this.$auth.logout()
            this.$router.push('/login')
        },
        async pet(){
           await this.$router.push('/pet')
        },
        async post(){
           await this.$router.push('/post')
        },
                    doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                },5000)
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }
        
    }

}
</script>

