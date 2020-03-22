<template>
    <div>
        <!-- navbar -->
        <div class="navbar navbar-pages">
            <div class="container">
                <div class="content">
                    <h4>
                        <a href="" class="link-back">
                            <i class="fa fa-arrow-left waves-effect waves-light-grey"></i>
                        </a>
                        Add Pet</h4>
                </div>
            </div>
        </div>
        <!-- end navbar -->
	<!-- settings -->
	<div class="settings segments-page" style="padding-bottom:0px">
		<div class="container">
			<div class="row">
				<div class="col s12">
					<div class="wrap-content plus-pb b-shadow">
						<div class="wrap-title">
							<h5>Pet Photo</h5>
						</div>
						<div class="content">
							<img src="images/profile.png" alt="">
							<div class="button-upload">
								<form>
									<input id="button-file" type="file">
									<label for="button-file">
										<span class="b-shadow">Upload</span>
									</label>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end settings -->
        <!-- reservation -->
        <div class="reservation segments-page" style="padding-top:0px">
            <div class="container">
                <div class="content-form b-shadow">
                    <form>
                        <div class="input-field">
                            <input v-model="form.name" type="text" id="name">
                            <label for="name">Name</label>
                        </div>
                        <div class="input-field">
                            <date-picker type="date" v-model="form.birthdate" placeholder="Date of Birth" id="birthdate" style="min-width:100%;"></date-picker>
                        </div>
                        <div>
                            <label class="typo__label">Breed</label>
                            <multiselect @select="toggleSelected"  v-model="value" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="options" :searchable="true" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">{{ option.name }}</template>
                              </multiselect>
                        </div>
                        <div class="input-field">
                            <p style="padding-top:10px">Playful</p>
                            <vue-slider v-model="range" id="range"/>
                        </div>
                        <div class="input-field">
                            <p>Intellegent</p>
                            <vue-slider v-model="range" id="range"/>
                        </div>
                        <div class="input-field">
                            <p>Loving</p>
                            <vue-slider v-model="range" id="range"/>
                        </div>
                        <div class="input-field">
                            <p>Protective</p>
                            <vue-slider v-model="range" id="range"/>
                        </div>
                        <div class="input-field" style="margin-top:30px">
                            <textarea v-model="form.description" id="message" class="materialize-textarea" cols="30" rows="30"></textarea>
                            <label for="message">Description</label>
                        </div>
                        <button class="button waves-effect waves-light">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- end reservation -->

    </div>
    <!-- end home login -->
</template>

<script>
    export default {
        middleware: ["auth"],
        data() {
            return {
                form: {
                    birthdate: "",
                    name:"",
                    description:"",
                    breed:"",
                    user_id: this.$store.getters.user.id
                },
                breeds: [],
                test: [],
                options: [],
                value: null,
                range: 0
            };
        },
        async asyncData({$axios}) {
            let data = await $axios.$get("https://api.thedogapi.com/v1/breeds");
            return {breeds: data};
        },
        created() {
            this.breeds.forEach((item) => {
                this.options.push({name:item.name,id:item.id});
            });
        },
        methods: {
            toggleSelected(value, id) {
                this.form.breed = value.name
                }

        }
    };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>