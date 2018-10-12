<template>
  <div>
    <div class="keyTable">
      <div style="margin-top: 10px;">
        <el-input style="width:150px" size="small" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input">
        </el-input>
        <el-button type="success" size="small" style="float:right;margin-right: 15px" @click="handleAdd()">添加回复</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="规则名称" width="350">
        </el-table-column>
        <el-table-column prop="word" label="关键词" width="350">
        </el-table-column>
        <el-table-column prop="content" label="回复内容" width="500">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="keyEdit">
      <el-card class="box-card">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <div class="key_input">
            <el-input placeholder="规则名称"></el-input>
          </div>
          <div class="key_input">
            <el-input placeholder="输入关键词" v-model="input5" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="半匹配" value="1"></el-option>
                <el-option label="全匹配" value="2"></el-option>
              </el-select>
            </el-input>
          </div>
          <el-row class="key_show">
            <el-col :span="2">
              <div>回复内容：<el-button icon="el-icon-plus" circle></el-button>
              </div>
            </el-col>
            <el-col :span="15">
              <div class="key_div">
                <el-row>
                  <el-col :span="3" class="key_hover"><i @click="dialogTextVisible = true" class="el-icon-edit-outline">文字</i></el-col>
                  <el-col :span="3" class="key_hover"><i @click="dialogPictureVisible = true" class="el-icon-picture">图片</i></el-col>
                  <el-col :span="3" class="key_hover"><i @click="dialogVoiceVisible = true" class="el-icon-phone">语音</i></el-col>
                  <el-col :span="3" class="key_hover"><i @click="dialogVideoVisible = true" class="el-icon-caret-right">视频</i></el-col>
                  <el-col :span="3" class="key_hover"><i @click="dialogGraphicVisible = true" class="el-icon-tickets">图文</i>
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
            <el-table :data="gridData"></el-table>
          </el-dialog>
          <el-dialog title="选择图片" :visible.sync="dialogPictureVisible">
            <el-table :data="gridData"></el-table>
          </el-dialog>
          <el-dialog title="选择音频" :visible.sync="dialogVoiceVisible">
            <el-table :data="gridData"></el-table>
          </el-dialog>
          <el-dialog title="选择视频" :visible.sync="dialogVideoVisible">
            <el-table :data="gridData"></el-table>
          </el-dialog>
          <el-dialog title="选择素材" :visible.sync="dialogGraphicVisible">
            <el-table :data="gridData"></el-table>
          </el-dialog>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          input: '',
          name: '你好',
          word: '嗯嗯',
          content: '1语音,2文本',
        }],
        dialogTextVisible: false,
        dialogPictureVisible: false,
        dialogVoiceVisible: false,
        dialogVideoVisible: false,
        dialogGraphicVisible: false,
        select: '',
        ruleForm: {
          name: '',
          region: '',
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
        }
      }
    },
    methods: {
      handleAdd(){
         $(".keyTable").hide();
        $(".keyEdit").show();
      },
      handleEdit(index, row) {
        $(".keyTable").hide();
        $(".keyEdit").show();
      },
      handleDelete(index, row) {

      },
      handok() {
        $(".keyTable").show();
        $(".keyEdit").hide();
      }
    },
  }

</script>
<style>
  .keyEdit {
    display: none
  }

  .key_div {
    display: none;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    padding: 5px 0 5px 10px;
    margin: 3px 0 0 15px;
  }

  .key_hover:hover {
    color: #409EFF
  }

  .key_show:hover .key_div {
    display: block
  }

  .key_input {
    margin: 10px 0 30px
  }

  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

</style>
