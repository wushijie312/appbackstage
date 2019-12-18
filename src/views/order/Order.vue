 <template>
  <div class="member">
    <div class="member_search">
      <a-input placeholder="输入搜索内容" style=" width: 200px;margin: 0 8px 8px 0;"/>
      <a-button type="primary" icon="search">搜索</a-button>
    </div>
    <div id="components-table-demo-size">
      <a-table :columns="columns" :dataSource="data" size="small" @change="changePagesTurn">
        <span slot="goodsimf" slot-scope="goodsimf">
          <span v-for="good in goodsimf" :key="good.img">
            <img class="fl" style="max-width:50px;max-height:50px;" alt="example" :src="good.img">
            <div class="fl" style="margin-left:10px;">
              <p>标题：{{good.tit}}</p>
              <p>数量：{{good.num}}</p>
            </div>
          </span>
        </span>
        <span slot="action" slot-scope="action">
          <span v-for="tag in action" :key="tag.del">
            <a-button
              v-if="tag.details=='订单详情'"
              type="primary"
              @click="() => modal2Visible = true"
              size="small"
              class="m_r10"

            >{{tag.details}}</a-button>
            <a-button
              class="m_r10"
              v-if="tag.edit=='编辑'"
              type="primary"
              @click="() => modal2Visible = true"
              size="small"
            >{{tag.edit}}</a-button>

            <a-button
              v-if="tag.del=='删除'"
              type="danger"
              @click="showDeleteConfirm"
              size="small"
            >{{tag.del}}</a-button>
          </span>
        </span>
      </a-table>
    </div>
    <a-modal
      title="编辑"
      centered
      v-model="modal2Visible"
      @ok="() => modal2Visible = false"
      okText="提交"
      cancelText="取消"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="用户昵称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input v-decorator="['note', { rules: [{ whitespace:false}] }]"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
const columns = [
  {
    title: "用户id",
    dataIndex: "id"
  },
  {
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "年龄",
    dataIndex: "age"
  },
  {
    title: "地址",
    dataIndex: "address"
  },
  {
    title: "商品信息",
    dataIndex: "goodsimf",
    scopedSlots: { customRender: "goodsimf" }
  },
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
const data = [
  {
    key: "1",
    id: 1,
    name: "John Brown",
    age: 32,
    goodsimf: [
      {
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        tit: "70gA4彩色打印机",
        num: 2
      }
    ],
    address: "New York No. 1 Lake Park",
    action: [{ edit: "编辑", details: "订单详情", del: "删除" }]
  }
];
export default {
  data() {
    return {
      data,
      columns,
      modal2Visible: false,
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    showDeleteConfirm() {
      this.$modal.confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },

    changePagesTurn() {
      console.log("s");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>
<style scoped>
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>