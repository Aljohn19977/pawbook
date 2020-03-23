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
                <div class="content waves-effect waves-light-grey" style="width:100%">
                    <div class="list-img">
                        <img src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" alt="">
                    </div>
                    <div class="list-text">
                        <h6>Franky</h6>
                        <p>My happy dog</p>
                    </div>
                </div>
                <div class="content waves-effect waves-light-grey" style="width:100%">
                    <div class="list-img">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*" alt="">
                    </div>
                    <div class="list-text">
                        <h6>Nikki</h6>
                        <p>My bad dog</p>
                    </div>
                </div>
                <div class="content waves-effect waves-light-grey" style="width:100%">
                    <div class="list-img">
                        <img src="https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg" alt="">
                    </div>
                    <div class="list-text">
                        <h6>Sky</h6>
                        <p>The Destroyer</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- end list -->


    </div>
    <!-- end home login -->
</template>

<script>
export default {
  middleware: ["auth"],
  data() {

  },
  async asyncData({ $axios }) {

  },
  created() {

  },
  methods: {
  }
};
</script>