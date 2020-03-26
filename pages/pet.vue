<template>
    <div>
        <!-- navbar -->
        <div class="navbar navbar-pages">
            <div class="container">
                <div class="content">
                    <h4>
                        <router-link to="/" class="link-back">
                            <i class="fa fa-arrow-left waves-effect waves-light-grey"></i>
                        </router-link>
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
							<h5>Pet Profile Picture</h5>
						</div>
						<div class="content">
							<img src="images/profile.png" v-if="form.image == null" alt="">
                            <img :src="form.image" v-else alt="">
							<div class="button-upload">
			
									<input id="button-file" type="file" accept="image/*" ref="fileInput" @change="onFilePicked">
									<label for="button-file">
										<span class="b-shadow">Upload</span>
									</label>
						
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
                  	<form @submit.prevent="submit">
                        <div class="input-field">
                            <input v-model="form.name" type="text" id="name" autofocus>
                            <label for="name">Name</label>
                        </div>
                        <div>
                            <label class="typo__label">Breed</label>
                            <multiselect @select="toggleSelected"  v-model="value" deselect-label="" track-by="name" label="name" placeholder="Select one" :options="options" :searchable="true" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">{{ option.name }}</template>
                              </multiselect>
                        </div>
                        <div style="padding-top:10px">
                            <label class="typo__label">Gender</label>
                            <multiselect @select="toggleSelectedGender"  v-model="genderValue" deselect-label="" track-by="name" label="name" placeholder="Select one" :options="gender" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">{{ option.name }}</template>
                              </multiselect>
                        </div>
                        <div class="input-field">
                            <date-picker type="date" v-model="form.birthdate" placeholder="Date of Birth" id="birthdate" style="min-width:100%;"></date-picker>
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
                        <button class="button waves-effect waves-light" type="submit">Submit</button>
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
        image: null,
        name: "",
        gender: "",
        description: "",
        breed: "",
        user_id: this.$store.getters.user.id
      },
      breeds: [],
      test: [],
      gender: [
        {
          name: "Male",
          id: "male"
        },
        {
          name: "Female",
          id: "female"
        }
      ],
      options: [],
      value: null,
      genderValue: null,
      range: 0
    };
  },
  async asyncData({ $axios }) {
    
    let data = await $axios.$get("https://api.thedogapi.com/v1/breeds");
    // let data2 = await $axios.$get("http://pawbookserverapi.test/api/getUserPet");
        
    // console.log(data2);

    return { breeds: data };

  },
  created() {
    this.breeds.forEach(item => {
      this.options.push({ name: item.name, id: item.id });
    });
  },
  methods: {
    async submit({$store}) {
      await this.$axios
        .$post("http://pawbookserverapi.test/api/addpet", this.form)
        .then((response) => {
             this.form.name = '';
             this.form.image = null;
             this.form.birthdate = '';
             this.form.description = '';
             this.genderValue = null;
             this.value = null;
        })
        .catch(function(error) {
          console.log(error);
        });

    },
    toggleSelected(value, id) {
      this.form.breed = value.name;
    },
    toggleSelectedGender(value, id) {
      this.form.gender = value.id;
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file! ");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.form.image = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>