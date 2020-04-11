<template>
    <div>
	<!-- navbar -->
	<div class="navbar navbar-pages">
		<div class="container">
			<div class="content">
				<h4><a @click.prevent="back" class="link-back"><i class="fa fa-arrow-left waves-effect waves-light-grey"></i></a> My Profile</h4>
			</div>
		</div>
	</div>
	<!-- end navbar -->
	
	<!-- profile -->
	<div class="container">
		<div class="profile segments-page">
			<div class="profile-banner" style="background-size: cover; background-size: 100% 200px" v-bind:style="{ background: 'url('+ user.profile_picture +')' }">
				<div class="content">
					<img v-lazy="user.profile_picture" alt="">
					<h4>{{user.name}}</h4>
					<span>{{user.country}}</span>
				</div>
			</div>
			<!-- <div class="row">
					<div class="col s6">
						<div class="contents">
                            <button class="button button-custom waves-effect waves-light-grey button-green button-full green b-shadow"><i class="fa fa-pencil"></i>Update Profile Picture</button>
						</div>
                    </div>
					<div class="col s6">
						<div class="contents">
                            <button class="button button-custom waves-effect waves-light-grey button-green button-full green b-shadow"><i class="fa fa-pencil"></i>Update Cover Photo</button>
						</div>
                    </div>
					<div class="col s12">
						<div class="contents">
                            <button class="button button-custom waves-effect waves-light-grey button-green button-full green b-shadow"><i class="fa fa-pencil"></i>View and Update Info</button>
						</div>
                    </div>
			</div> -->
			<div class="content-info b-shadow">
				<div class="row">
					<div class="col s4">
						<ul>
							<li>0</li>
							<li><i class="material-icons">people</i></li>
						</ul>
					</div>
					<div class="col s4">
						<ul>
							<li>0</li>
							<li><i class="material-icons">person_pin</i></li>
						</ul>
					</div>
					<div class="col s4">
						<ul>
							<li>{{ pet_count }}</li>
							<li><i class="material-icons">pets</i></li>
						</ul>
					</div>
				</div>
            </div>
			<!-- open hours -->
			<div class="open-hours segments-page" style="padding-top:20px; padding-bottom:0px">
					<div class="content b-shadow">
						<div class="content-hours">
							<ul style="padding-top:20px">
								<li>Gender</li>
								<li>{{ user.gender }}</li>
							</ul>
						</div>
						<div class="content-hours">
							<ul>
								<li>Address</li>
								<li>{{ user.address }}</li>
							</ul>
						</div>
						<div class="content-hours">
							<ul>
								<li>Birthdate</li>
								<li>{{ moment(user.birthdate).format('LL') }}</li>
							</ul>
						</div>
				</div>
			</div>
			<!-- end open hours -->
				<div class="row">
					<div class="col s6">
						<div class="contents">
                            <button @click.prevent="post" class="button button-custom waves-effect waves-light-grey button-blue button-full blue b-shadow"><i class="material-icons">forum</i></button>
						</div>
                    </div>
                    <div class="col s6">
						<div class="contents">
							<button @click.prevent="pet" class="button button-custom waves-effect waves-light-grey button-red button-full red b-shadow"><i class="material-icons">pets</i></button>
						</div>
					</div>
				</div>
                <div class="forum-single b-shadow p-gallery" v-for="post in posts" :key="post.id">
                    <div class="content-user">
                        <img v-lazy="post.user.profile_picture_id" alt="">
                        <div class="title">
                            <h5>{{ post.user.name }}</h5>
                            <span>{{ post.date_posted }}</span>
                        </div>
                    </div>
					<div class="content" style="padding-top:10px">
							<a class="waves-effect waves-light" href="images/gallery1.jpg" data-lightbox="image">
								<img v-lazy="post.image" alt="">
							</a>
					</div>
                    <div class="content-text">
                        <h4>{{ post.title }}</h4>
                        <!-- <div class="date">
                            <i class="fa fa-calendar"></i>
                            13 march 2020
                        </div> -->
                        <p>{{ post.content }}</p>
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
export default {
	middleware: ["auth"],
	data() {
		return {
		posts: [],
		pet_count: ""
		}
	},
	async asyncData({ $axios,store }) {

		// let {data} = await $axios.$get(`http://pawbookserverapi.test/api/getUserPet`);
		let petCount = await $axios.$get(`https://peaceful-hamlet-52896.herokuapp.com/api/user/${store.getters.user.id}/pet_count`);
		let {data} = await $axios.$get(`https://peaceful-hamlet-52896.herokuapp.com/api/post/${store.getters.user.id}`);
		return { 
				 posts: data,
				 pet_count: petCount 
			   };

	},
    created(){
        if(!this.$store.getters.authenticated){
            this.$router.push('/login')
        }
    },
	methods:{
		async pet(){
           await this.$router.push('/pet')
        },
        async post(){
           await this.$router.push('/post')
        },
		async back(){
		   await this.$router.back()
		}
	}
}
</script>

