<template>
  <div class="ml-card" :class="btnCls">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MlCard',
  props: {
    round: {
      type: String,
    },
    size: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['medium', 'mini', 'small'].indexOf(value) !== -1
      },
      type: String,
      default: 'medium',
    },
    type: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        // primary / success / warning / danger / info / text
        return ['primary', 'success', 'warning', 'danger', 'info', 'text', ''].indexOf(value) !== -1
      },
      type: String,
      default: '',
    },
  },
  computed: {
    btnCls() {
      return 'ml-button-' + this.type + ' ml-button-' + this.size
    },
  },
  mounted() {
    console.log(this.text)
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss">
.ml-card {
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
  .ml-header {
    height: 60px;
  }
}
</style>
