<template>
  <button class="font-montserrat">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
};
</script>

<style scoped>
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  background: #BD2D2F;
  border-radius: 31px;
  color: white;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  letter-spacing: -0.24px;
}
</style>
