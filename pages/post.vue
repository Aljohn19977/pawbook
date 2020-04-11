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
                        Add Post</h4>
                </div>
            </div>
        </div>
        <!-- end navbar -->
    <div class="contact segments-page" style="padding-bottom:0px;">
      <div class="container">
        <div class="contact-contents b-shadow" style="background-color: #27ae60;" v-show="error"> 
          <div class="contact-info" style="color:white;">
            <p>Successfully posted.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="settings segments-page" style="padding-bottom:0px; padding-top:20px;">
		<div class="container">
			<div class="row">
				<div class="col s12">
					<div class="wrap-content plus-pb b-shadow">
						<div class="wrap-title">
							<h5>Add Photo</h5>
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
                        <div style="padding-bottom:10px">
                            <label class="typo__label">Tag Paws</label>
                            <multiselect v-model="form.tag" tag-placeholder="Add this as new tag" placeholder="Search.. " label="name" track-by="id" :options="options" :multiple="true" @tag="addTag"></multiselect>
                        </div>
                        <div class="input-field">
                            <input v-model="form.title" type="text" id="name" autofocus>
                            <label for="name">Title</label>
                        </div>
                        <div class="input-field" style="padding-top:10px">
                            <textarea v-model="form.content" id="message" class="materialize-textarea" cols="30" rows="30"></textarea>
                            <label for="message">Write Post</label>
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
      error: false, 
      form: {
        image: null,
        content: "",
        title: "",
        user_id: this.$store.getters.user.id,
        tag: null,
      },
      pets: [],
      options: []
    };
  },
  components: {
      Loading
  },
  async asyncData({ $axios, store }) {
    
    let {data} = await $axios.$get(`https://peaceful-hamlet-52896.herokuapp.com/api/user/${store.getters.user.id}/pet_list`);
    return { pets: data };

  },
  created() {
    this.pets.forEach(item => {
      this.options.push({ name: item.name, id: item.id });
    });
  },
  methods: {
    async back(){
		   await this.$router.back()
		},
    async submit() {
      this.isLoading = true;
      await this.$axios
        .$post("http://pawbookserverapi.test/api/add_post", this.form)
        .then((response) => {
             this.form.content = '';
             this.form.image = null;
             this.form.tag = null;
             this.isLoading = false;
             this.error = true;
             this.form.title = '';
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
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