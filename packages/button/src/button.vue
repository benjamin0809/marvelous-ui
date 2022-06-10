<template>
  <button @click.prevent="handleClick" class="ml-button" :class="btnCls">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "MlButton",
  props: {
    size: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["medium", "mini", "small"].indexOf(value) !== -1;
      },
      type: String,
      default: "medium",
    },
    type: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        // primary / success / warning / danger / info / text
        return (
          [
            "primary",
            "success",
            "warning",
            "danger",
            "info",
            "text",
            "",
          ].indexOf(value) !== -1
        );
      },
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
  computed: {
    btnCls() {
      return "ml-button-" + this.type + " ml-button-" + this.size;
    },
  },
};
</script>

<style lang="scss" >
.ml-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.ml-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
  }
}
.ml-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:active {
    background: #5daf34;
    border-color: #5daf34;
  }
}
.ml-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:active {
    background: #82848a;
    border-color: #82848a;
  }
}
.ml-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:active {
    background: #cf9236;
    border-color: #cf9236;
  }
}
.ml-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:active {
    background: #dd6161;
    border-color: #dd6161;
  }
}
.ml-button-mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.ml-button-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>
