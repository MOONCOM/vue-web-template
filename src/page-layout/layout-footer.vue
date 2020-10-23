<template>
  <div class="layout-footer">
    <div class="footer-content">
      <el-row class="detail-line">
        <el-col
          v-for="({title,children},index) of showData"
          :key="index"
          :span="4"
          class="section"
        >
          <div class="title">
            {{ title }}
          </div>
          <ul class="detail">
            <li
              v-for="({name,link},i) of children"
              :key="`${index}-${i}`"
            >
              {{ name }}
            </li>
          </ul>
        </el-col>
        <el-col
          :span="4"
          class="section"
        >
          <div class="title">
            微信小程序
          </div>
          <div class="detail">
            <div class="code-image">
              <el-image
                :src="codeImage"
                fit="scale-down"
                :preview-src-list="[codeImage]"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="link-line">
        <el-col
          :span="4"
          class="title"
        >
          相关链接
        </el-col>
        <el-col :span="20">
          <ul class="detail">
            <li
              v-for="({name,link},i) of linkData"
              :key="i"
            >
              {{ name }}
            </li>
          </ul>
        </el-col>
      </el-row>
      <div class="company-line">
        <p>
          <!--公司名称-->
          <span class="company-name">{{ companyData.name }}</span>
          <!--许可-->
          <span class="license">{{ companyData.license }}</span>
        </p>
        <p>
          <!--版权-->
          <span class="copyright">{{ companyData.copyright }}</span>
          <!--证件-->
          <span class="paperwork">{{ companyData.paperwork }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/*
* 页面底部
* */
export default {
  name: 'LayoutFooter',
  data() {
    return {
      // 微信小程序二维码
      codeImage: require('@/assets/code.jpg'),
      showData: [
        {
          title: '联系我们',
          children: [
            { name: '致电：110', link: undefined },
            { name: '邮件：100@sina.com', link: undefined },
            { name: '时间：9:00-18:00', link: undefined },
            { name: '建议与反馈', link: '/suggestion' },
          ],
        },
        {
          title: '快速入口',
          children: [
            { name: '金属交易', link: undefined },
            { name: '皮草交易', link: undefined },
            { name: '海产交易', link: undefined },
            { name: '猪肉交易', link: undefined },
          ],
        },
        {
          title: '服务帮助',
          children: [
            { name: '开发者文档', link: undefined },
            { name: '开发者社区', link: undefined },
            { name: '用户服务协议', link: undefined },
            { name: '隐私政策声明', link: undefined },
          ],
        },
        {
          title: '热门产品与服务',
          children: [
            { name: '隐私政策声明', link: undefined },
            { name: '隐私政策声明', link: undefined },
          ],
        },
        {
          title: '关于我们',
          children: [
            { name: '公司介绍', link: undefined },
            { name: '公司地址', link: undefined },
            { name: '联系我们', link: undefined },
          ],
        },
      ],
      linkData: [
        { name: '金属交易', link: undefined },
        { name: '皮草交易', link: undefined },
        { name: '海产交易', link: undefined },
        { name: '猪肉交易', link: undefined },
        { name: '金属交易', link: undefined },
        { name: '皮草交易', link: undefined },
        { name: '海产交易', link: undefined },
      ],
      companyData: {
        name: 'Copyright ©自定义数字科技有限公司',
        license: '增值电信业务经营许可证：xxxxx-xxxx-xxx',
        copyright: '沪ICP备0000000号',
        paperwork: '沪公网安备000000000000号',
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/global-color-var.scss';
.layout-footer{
  box-sizing: border-box;
  height:320px;
  padding:20px 0;
  background-color: #333;
  color:$footer-color;
  font-size:12px;
  .footer-content{
    width:1200px;
    height:100%;
    margin:0 auto;
    .detail-line{
      border-bottom:2px solid #444;
      .title{
        padding:10px 0;
        font-size:20px;
        border-bottom:2px solid #444;
      }
      .detail{
        box-sizing: border-box;
        height:120px;
        padding:16px 0;
        >li{
          height:20px;
          line-height:20px;
        }
        .code-image{
          width:84px;
          height:84px;
        }
      }
    }
    .link-line{
      box-sizing: border-box;
      height:74px;
      padding:16px 0;
      border-bottom:2px solid #444;
      .title{
        font-size:16px;
      }
      ul.detail{
        display:flex;
        flex-wrap: wrap;
        li{
          width:20%;
          height:20px;
          line-height:20px;
        }
      }
    }
    .company-line{
      padding:10px 0;
      text-align:center;
      p{
        margin-bottom:10px;
        >span:first-of-type{
          margin-right:40px;
        }
      }
    }
  }
}
</style>
