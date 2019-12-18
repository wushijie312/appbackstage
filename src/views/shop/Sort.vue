 <template>
  <div>分类
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  data() {
      return {
        headers: {
          authorization: 'authorization-text',
        },
      };
    },
    methods: {
      handleChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          this.$message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          this.$message.error(`${info.file.name} file upload failed.`);
        }
      },
    },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/index.less";
</style>
