<template>
    <div>
	<!-- navbar -->
	<div class="navbar navbar-home">
		<div class="container">
			<div class="row">
				<div class="col s3">
					<div class="content-left">
						<router-link to = "/profile"><i class="fa fa-user"></i></router-link>
                    </div>
				</div>
				<div class="col s6">
					<div class="content-center">
						<a href="index.html"><h1>PAWS</h1></a>
					</div>
				</div>
				<div class="col s3">
					<div class="content-right">
						<a href="contact.html"><i class="fa fa-envelope"></i></a>
                        <a @click.prevent="logout"><i class="fa fa-sign-out"></i></a>
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
					<div class="col s6">
						<div class="contents">
                            <button @click.prevent="post" class="button button-custom waves-effect waves-light-grey button-blue button-full blue b-shadow"><i class="fa fa-pencil"></i>Write Post</button>
						</div>
                    </div>
                    <div class="col s6">
						<div class="contents">
							<button @click.prevent="pet" class="button button-custom waves-effect waves-light-grey button-red button-full red b-shadow"><i class="fa fa-plus"></i>Add Pet</button>
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

    middleware: ['auth'],
    created(){
        if(!this.$store.getters.authenticated){
            this.$router.push('/login')
        }
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
        }
    }

}
</script>

