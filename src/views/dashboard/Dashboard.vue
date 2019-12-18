 <template>
  <div class="dash">
    <div class="dash_a">
      <div class="dash_a_head clearfix">
        <div class="dash_a_date">
          <div class="clearfix m_r10 dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_1.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">今日访问量</h3>
              <p class="dash_a_number">8203</p>
            </div>
          </div>
        </div>
        <div class="dash_a_date">
          <div class="clearfix m_r10 dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_2.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">昨日访问量</h3>
              <p class="dash_a_number">5203</p>
            </div>
          </div>
        </div>
        <div class="dash_a_date">
          <div class="clearfix m_r10 dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_3.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">近七天访问量</h3>
              <p class="dash_a_number">16203</p>
            </div>
          </div>
        </div>
        <div class="dash_a_date">
          <div class="clearfix dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_4.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">本月访问量</h3>
              <p class="dash_a_number">139203</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dash_a_head clearfix">
        <div class="dash_a_date">
          <div class="clearfix m_r10 dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_1.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">今日成交量</h3>
              <p class="dash_a_number">12</p>
            </div>
          </div>
        </div>
        <div class="dash_a_date">
          <div class="clearfix m_r10 dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_2.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">昨日成交量</h3>
              <p class="dash_a_number">3</p>
            </div>
          </div>
        </div>
        <div class="dash_a_date">
          <div class="clearfix m_r10 dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_3.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">近七天成交量</h3>
              <p class="dash_a_number">23</p>
            </div>
          </div>
        </div>
        <div class="dash_a_date">
          <div class="clearfix dash_a_bg">
            <div class="fl dash_a_dateimg">
              <img src="./img/date_4.png" alt>
            </div>
            <div class="fr">
              <h3 class="dash_a_tit">本月成交量</h3>
              <p class="dash_a_number">93</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dash_b clearfix">
      <div class="dash_b_normal ">
        <div class="dash_a_bg m_r10">
          <h3>本月成交额</h3>
          <ve-line :data="chartmoney"></ve-line>
        </div>
      </div>
      <div class="dash_b_normal">
        <div class="dash_a_bg">
          <h3>本月订单数</h3>
          <ve-line :data="chartnumber"></ve-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      chartnumber: {
        columns: ["日期", "访问用户", "下单用户"],
        rows: [
          { 日期: "11/19", 访问用户: 1393, 下单用户: 1093 },
          { 日期: "11/24", 访问用户: 3530, 下单用户: 3230 },
          { 日期: "11/29", 访问用户: 2923, 下单用户: 2623 },
          { 日期: "12/4", 访问用户: 1723, 下单用户: 1423 },
          { 日期: "12/9", 访问用户: 3792, 下单用户: 3492 },
          { 日期: "12/14", 访问用户: 4593, 下单用户: 4293 }
        ]
      },
      chartmoney: {
        columns: ["日期", "下单金额"],
        rows: [
          { 日期: "11/19", 下单金额: 500000 },
          { 日期: "11/24", 下单金额: 650000 },
          { 日期: "11/29", 下单金额: 1000000 },
          { 日期: "12/4", 下单金额: 7000000 },
          { 日期: "12/9", 下单金额: 400000 },
          { 日期: "12/14", 下单金额: 900000 }
        ]
      }
    };
  }
};
</script>
<style scoped>
.dash {
  background: #f0f2f5;
}
.dash_b {
  display: block;
}
.dash_b_normal {
  width: 50%;
  float: left;
}
.dash_a_head {
  display: block;
}
.dash_a_date {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 25%;
  float: left;
  margin-bottom:10px;
}

.dash_a_dateimg {
  width: 48px;
}
.dash_a_bg {
  background: #fff;
  padding: 26px;
}
.dash_a_tit {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 18px;
  margin-bottom: 12px;
}
.dash_a_number {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
}
@media screen and (max-width: 1090px) {
   .dash_a_date{
     width:50%;
   }
   .dash_a_date:nth-child(2n) .dash_a_bg{
     margin-right:0;
   }
   .dash_b_normal{
     width:100%;
   }
   .dash_b_normal:first-child .dash_a_bg{
     margin-right:0;
   }
}
</style>