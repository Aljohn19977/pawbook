<template>
    <div>
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :is-full-page="fullPage"></loading>
        <!-- navbar -->
        <div class="navbar navbar-pages">
            <div class="container">
                <div class="content">
                    <h4>
                        <a @click.prevent="back" class="link-back">
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
							<h5>Pet Profile Picture</h5>
						</div>
						<div class="content">
							<img src="/images/profile.png" v-if="form.image == null" alt="">
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
                        <div style="padding-bottom:10px">
                            <label class="typo__label">Personality Traits</label>
                            <multiselect v-model="tag" tag-placeholder="Add this as new tag" placeholder="Search.. " label="name" track-by="id" :options="traits" :multiple="true" @remove="removeRange" @select="addRange" :max="5"></multiselect>
                        </div>                                    
                        <div class="input-field" v-for="k in form.traits" :key="k.id">
                            <p style="padding-top:10px">{{k.name}}</p>
                            <input v-model="k.attributes_id" type="text" id="attributes_id" hidden>
                            <vue-slider v-model="k.value" id="range"/>
                        </div>
                        <!-- <div class="input-field">
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
                        </div> -->
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
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  middleware: ["auth"],
  data() {
    return {   
      isLoading: false,
      fullPage: true,    
      form: {
        birthdate: "",
        image: null,
        name: "",
        gender: "",
        description: "",
        breed: "",
        user_id: this.$store.getters.user.id,
        traits: [], 
      },
      tag:null,
      breeds: [],
      test: [],
      gender: [
        {
          name: "Male",
          id: "Male"
        },
        {
          name: "Female",
          id: "Female"
        }
      ],
      options: [],
      options2: [],
      pets: [],
      traits: [],
      value: null,
      value2: null,
      genderValue: null,
    };
  },
  components: {
      Loading
  },
  async asyncData({ $axios,store }) {

    let {data} = await $axios.$get(`https://peaceful-hamlet-52896.herokuapp.com/api/user/${store.getters.user.id}/pet_list`);
    let data3 = await $axios.$get(`https://peaceful-hamlet-52896.herokuapp.com/api/traits`);   
    let data2 = await $axios.$get("https://api.thedogapi.com/v1/breeds");

    return { breeds: data2,pets: data,traits: data3.data };

  },
  created() {
    this.breeds.forEach(item => {
      this.options.push({ name: item.name, id: item.id });
    });
    this.pets.forEach(item => {
      this.options2.push({ name: item.name, id: item.id });
    });
  },
  methods: {
    addRange(actionName){
        console.log(actionName.name);
        this.form.traits.push({ name: actionName.name, id: actionName.id, value: 0 })
    },
    removeRange(actionName){
        console.log(actionName.name);
        this.form.traits = this.form.traits.filter(id => id.id !== actionName.id);
        // this.traits.push({ name: actionName.name })
    },
    async back(){
		await this.$router.back()
	},      
    async submit() {
      this.isLoading = true;
      await this.$axios
        .$post("https://peaceful-hamlet-52896.herokuapp.com/api/addpet", this.form)
        .then((response) => {
             this.form.name = '';
             this.form.image = null;
             this.form.birthdate = '';
             this.form.description = '';
             this.genderValue = null;
             this.tag = null;
             this.form.traits = null;
             this.value = null;
             this.isLoading = false;
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