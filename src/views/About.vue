<template>
  <div class="about">
    <p>message经过过滤器值为：{{ message | capitalize }}</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  name:'about',
  data() {
    return {
      message: 'hello world'
    }
  },
  filters: {
    capitalize: (value) =>{
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>