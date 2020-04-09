<template>
    <div>
	<!-- navbar -->
	<div class="navbar navbar-pages">
		<div class="container">
			<div class="content">
				<h4><a @click.prevent="back" class="link-back"><i class="fa fa-arrow-left waves-effect waves-light-grey"></i></a> Pet Profile</h4>
			</div>
		</div>
	</div>
	<!-- end navbar -->
	
	<!-- profile -->
	<div class="container">
		<div class="profile segments-page single-post">
            <img v-lazy="petInfo.image" alt="">
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
				<!-- open hours -->
            <div class="content-info b-shadow">
				<div class="row">
					<div class="col s12">
						<ul>
							<li>0</li>
							<li><i class="material-icons">thumb_up</i></li>
						</ul>
					</div>
				</div>
            </div>
	<div class="open-hours segments-page" style="padding-top:20px; padding-bottom:0px">
			<div class="content b-shadow">
				<div class="content-hours">
					<ul style="padding-top:20px">
						<li>Owner</li>
						<li>{{ petInfo.user.name }}</li>
					</ul>
				</div>
				<div class="content-hours">
					<ul>
						<li>Name</li>
						<li>{{ petInfo.name }}</li>
					</ul>
				</div>
                <div class="content-hours">
					<ul>
						<li>Breed</li>
						<li>{{ petInfo.breed }}</li>
					</ul>
				</div>
				<div class="content-hours">
					<ul>
						<li>Gender</li>
						<li>{{ petInfo.gender }}</li>
					</ul>
				</div>
				<div class="content-hours">
					<ul>
						<li>Birthdate</li>
						<li>{{ moment(petInfo.birthdate).format('LL') }}</li>
					</ul>
				</div>
		</div>
	</div>
    <div class="skill segments-page" style="padding-top:20px; padding-bottom:0px;">
			<div class="wrap-content b-shadow" style="margin:0px;">
				<div class="content" v-for="traits in petInfo.traits" :key="traits.id">
					<h6>{{ traits.name }} - {{ traits.pivot.value }}%</h6>
					<div class="progress">
						<div class="determinate" v-bind:style="{ width: traits.pivot.value+'%' }"></div>
					</div>
				</div>
			</div>
	</div>
	<!-- end open hours -->
				<div class="row">
					<div class="col s12">
						<div class="contents">
                            <button @click.prevent="post" class="button button-custom waves-effect waves-light-grey button-blue button-full blue b-shadow"><i class="material-icons">photo_library</i></button>
						</div>
                    </div>
				</div>
            <div class="forum-single b-shadow p-gallery" v-for="post in petInfo.tags" :key="post.id">
                    <div class="content-user">
                        <img v-lazy="petInfo.user.profile_picture_id" alt="">
                        <div class="title">
                            <h5>{{ post.title }}</h5>
                            <span>{{ moment(post.created_at).format('LL') }}</span>
                        </div>
                    </div>
					<div class="content" style="padding-top:10px">
							<a class="waves-effect waves-light" href="/images/gallery1.jpg" data-lightbox="image">
								<img v-lazy="post.image" alt="">
							</a>
					</div>
                    <div class="content-text">
                        <h4></h4>
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
		petInfo: "",
		}
    },
	async asyncData({ $axios,store,params }) {

		// let {data} = await $axios.$get(`http://pawbookserverapi.test/api/getUserPet`);
		// let petCount = await $axios.$get(`http://pawbookserverapi.test/api/user/${store.getters.user.id}/pet_count`);
		let data = await $axios.$get(`http://pawbookserverapi.test/api/pet/${params.id}`);
		return { 
				 petInfo: data,
				//  pet_count: petCount 
			   };

	},
    created(){
        // if(!this.$store.getters.authenticated){
        //     this.$router.push('/login')
        // }
    },
	methods:{
		// async pet(){
        //    await this.$router.push('/my-pet-list')
        // },
        // async post(){
        //    await this.$router.push('/post')
        // },
		async back(){
		   await this.$router.back()
		},
	}
}
</script>



