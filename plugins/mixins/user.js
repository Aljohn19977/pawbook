import Vue from "vue";
import vueCountryRegionSelect from 'vue-country-region-select';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { mapGetters } from "vuex";
import Multiselect from 'vue-multiselect';
// import component
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'

// import theme
import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)

Vue.component('multiselect', Multiselect);
Vue.use(vueCountryRegionSelect);
Vue.use(DatePicker);

const User = {
    install (vue, options){
        Vue.mixin({
            computed: {
                ...mapGetters({
                    user:"user",
                    authenticated: "authenticated"
                })
            }
        });
    }
};

Vue.use(User);