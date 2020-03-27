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
                        Add Post</h4>
                </div>
            </div>
        </div>
        <!-- end navbar -->
        	<div class="settings segments-page" style="padding-bottom:0px">
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
                        <div>
                            <label class="typo__label">Tag Paws</label>
                            <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search.. " label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                        </div>
                        <div class="input-field">
                            <input v-model="form.title" type="text" id="name" autofocus>
                            <label for="name">Title</label>
                        </div>
                        <div class="input-field" style="margin-top:30px">
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
      options: [
        { name: 'Rocky', code: 'vu' },
        { name: 'Regar', code: 'js' },
        { name: 'Selfa', code: 'os' }
      ],
      value: null,
    };
  },
  async asyncData({ $axios }) {
    
    // let data = await $axios.$get("https://api.thedogapi.com/v1/breeds");
    // // let data2 = await $axios.$get("http://pawbookserverapi.test/api/getUserPet");
        
    // // console.log(data2);

    // return { breeds: data };

  },
  created() {
    // this.breeds.forEach(item => {
    //   this.options.push({ name: item.name, id: item.id });
    // });
  },
  methods: {
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