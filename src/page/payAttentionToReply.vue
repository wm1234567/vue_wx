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
            <div>回复内容：<el-button icon="el-icon-plus" circle></el-button></div></el-col>
          <el-col :span="15">
            <div class="pay_div">
              <el-row>
                <el-col :span="3" class="pay_hover"><i @click="dialogTextVisible = true" class="el-icon-edit-outline">文字</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogPictureVisible = true" class="el-icon-picture">图片</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogVoiceVisible = true" class="el-icon-phone">语音</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogVideoVisible = true" class="el-icon-caret-right">视频</i></el-col>
                <el-col :span="3" class="pay_hover"><i @click="dialogGraphicVisible = true" class="el-icon-tickets">图文</i> </el-col>
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
      </el-card>
    </div>
  </div>
</template>
<script>
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
      }
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

</style>
