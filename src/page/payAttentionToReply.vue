<template>
  <div>
    <el-table :data="tableData" class="payTable" style="width: 100%">
      <el-table-column prop="content" label="回复内容" width="1200">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="250">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="payEdit">
      <el-card class="box-card">
        <el-row class="pay_show">
          <el-col :span="2">
            <div>回复内容：<el-button icon="el-icon-plus" circle></el-button>
            </div>
          </el-col>
          <el-col :span="15">
            <div class="pay_div">
              <el-row>
                <el-col :span="3" class="pay_hover"><i @click="dialogTextVisible = true" class="el-icon-edit-outline">文字</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogPictureVisible = true" class="el-icon-picture">图片</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogVoiceVisible = true" class="el-icon-phone">语音</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogVideoVisible = true" class="el-icon-caret-right">视频</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogGraphicVisible = true" class="el-icon-tickets">图文</i>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <div style="text-align:center;margin-bottom:-15px">
          <el-button size="mini" type="success" @click="handok">保存</el-button>
          <el-button size="mini" @click="handok">取消</el-button>
        </div>
        <el-dialog title="添加文字回复" :visible.sync="dialogTextVisible">
          <div class="text-place">
            <p v-html="content.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>
          </div>
          <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="content">
          </el-input>
          <img @click="handleQQ()" src="../assets/qq.png" alt="QQ表情">
          <div class="qq_text">
            <emotionOne @emotion="handleEmotion" :height="200"></emotionOne>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTextVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogTextVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="选择图片" :visible.sync="dialogPictureVisible">

        </el-dialog>
        <el-dialog title="选择音频" :visible.sync="dialogVoiceVisible">

        </el-dialog>
        <el-dialog title="选择视频" :visible.sync="dialogVideoVisible">

        </el-dialog>
        <el-dialog title="选择素材" :visible.sync="dialogGraphicVisible">

        </el-dialog>
      </el-card>
    </div>
  </div>
</template>
<script>
  import emotionOne from './emotionOne'
  export default {
    data() {
      return {
        tableData: [{
          content: '1文本，2语音',
        }],
        dialogTextVisible: false,
        dialogPictureVisible: false,
        dialogVoiceVisible: false,
        dialogVideoVisible: false,
        dialogGraphicVisible: false,
        content: '',
        comment: '',
        textarea: ''
      }
    },
    components: {
      emotionOne
    },
    methods: {
      handleEdit(index, row) {
        $(".payTable").hide();
        $(".payEdit").show();
      },
      handleDelete(index, row) {

      },
      handok() {
        $(".payTable").show();
        $(".payEdit").hide();
      },
      handleEmotion(i) {
        this.content += i
      },
      handleQQ() {
        $(".qq_text").toggle();
      },
      // 将匹配结果替换表情图片
      emotion(res) {
        let word = res.replace(/\#|\;/gi, '')
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷',
          '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕',
          '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险',
          '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电',
          '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你',
          'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'
        ]
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
      }
    },

  }

</script>
<style>
  .payEdit {
    display: none
  }

  .pay_div {
    display: none;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    padding: 5px 0 5px 10px;
    margin: 3px 0 0 15px;
  }

  .pay_hover:hover {
    color: #409EFF
  }

  .pay_show:hover .pay_div {
    display: block
  }

  .text-place {
    height: 50px;
    box-sizing: border-box;
    border-radius: 8px;
  }

  .text-place p {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .qq_text {
    width: 400px;
    display: none
  }

</style>
