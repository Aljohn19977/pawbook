<template>
    <div>
	<!-- navbar -->
	<div class="navbar navbar-pages">
		<div class="container">
			<div class="content">
				<h4><router-link to="/" class="link-back"><i class="fa fa-arrow-left waves-effect waves-light-grey"></i></router-link> {{user.name}}</h4>
			</div>
		</div>
	</div>
	<!-- end navbar -->
	
	<!-- profile -->
	<div class="container">
		<div class="profile segments-page">
			<div class="profile-banner">
				<div class="content">
					<img src="images/testimonial1.png" alt="">
					<h4>{{user.name}}</h4>
					<span>{{user.country}}</span>
				</div>
			</div>
			<div class="content-info b-shadow">
				<div class="row">
					<div class="col s4">
						<ul>
							<li>20</li>
							<li>Followers</li>
						</ul>
					</div>
					<div class="col s4">
						<ul>
							<li>200</li>
							<li>Following</li>
						</ul>
					</div>
					<div class="col s4">
						<ul>
							<li>50</li>
							<li>Pets</li>
						</ul>
					</div>
				</div>
            </div>
				<div class="row">
					<div class="col s6">
						<div class="contents">
                            <button class="button button-custom waves-effect waves-light-grey button-blue button-full blue b-shadow"><i class="fa fa-pencil"></i>Write Post</button>
						</div>
                    </div>
                    <div class="col s6">
						<div class="contents">
							<button class="button button-custom waves-effect waves-light-grey button-red button-full red b-shadow"><i class="fa fa-plus"></i>Add Pet</button>
						</div>
					</div>
				</div>
                <div class="forum-single b-shadow">
                    <div class="content-user">
                        <img src="images/forum1.png" alt="">
                        <div class="title">
                            <h5>John Doe</h5>
                            <span>Joiner: 10 Jan 2017</span>
                        </div>
                    </div>
                    <div class="content-text">
                        <h4>What is pet for you?</h4>
                        <div class="date">
                            <i class="fa fa-calendar"></i>
                            13 march 2020
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, praesentium!</p>
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
    created(){
        if(!this.$store.getters.authenticated){
            this.$router.push('/login')
        }
    },
}
</script>

