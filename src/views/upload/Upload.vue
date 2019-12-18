 <template>
  <div>upload
    <div v-if="!spin" class="" style="height:300px;background:#f90;">

    </div>
    <div v-else class="" style="height:300px;background:red;">

    </div>
    <a-button @click="hide">隐藏加载中</a-button>
    
   <a-spin class="loading_spin"></a-spin>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {};
  },
  computed:{
    ...mapState({spin:state=>state.spin.spin})
  },
  mounted(){
    console.log(this.spin);
  },
  methods:{
    ...mapMutations(['hideLoading','showLoading']),
    hide(){
this.hideLoading();
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/index.less";
</style>
