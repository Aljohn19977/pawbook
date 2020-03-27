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
                        My Pet</h4>
                </div>
            </div>
        </div>
        <!-- end navbar -->
        <!-- list -->
        <div class="list segments-page">
            <div class="container">
                <div class="content waves-effect waves-light-grey" v-for="pet in pets" :key="pet.id" style="width:100%">
                    <div class="list-img">
                        <img :src="pet.image" alt="">
                    </div>
                    <div class="list-text">
                        <h6>{{ pet.name }}</h6>
                        <p>Gender : {{ pet.gender }}</p>
                        <p>Breed : {{ pet.breed }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- end list -->


    </div>
    <!-- end home login -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: ["auth"],
  data() {
    return {
      pets: [],
    }
  },
  async asyncData({ $axios,store }) {

    // let {data} = await $axios.$get(`http://pawbookserverapi.test/api/getUserPet`);
    let {data} = await $axios.$get(`http://pawbookserverapi.test/api/user/${store.getters.user.id}/pet_list`);
    return { pets: data };

  },
  created() {
  },
  methods: {

  }
};
</script>