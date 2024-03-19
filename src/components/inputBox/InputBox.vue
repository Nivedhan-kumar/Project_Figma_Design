<template>
  <div class="parent-input-container">
    <div class="input-container">
      <div class="input-wrapper">
        <input type="text" placeholder="Ask me anything..." v-model="inputValue" style="caret-color: #fff;"
          @focus="setInputValue('Black T shirt under 300')" :value="inputValue || placeholder">
        <img src="@/assets/inputAddIcon.png" class="plus-icon">
      </div>
      <button type="submit" class="shop-button" @click="openNextPage">
        <img src="@/assets/buttonIcon.png"> Shop
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    openNextPage() {
      this.$emit('open-next-page', this.inputValue);
    },
    setInputValue(value) {
      this.inputValue = value;
    },
  }
};
</script>
<style scoped>
input[type="text"] {
  border-radius: 50px;
  background-color: rgba(22, 21, 22, 1);
  border: 1px solid rgba(71, 67, 71, 1);
  height: 48px;
  width: 96%;
  outline: none;
  padding-left: 45px;
  color: rgba(234, 234, 234, 1);
}
.input-wrapper {
  display: flex;
  align-items: center;
}
::placeholder {
  color: rgba(141, 145, 145, 1);
  padding: 20px 0;
}
.parent-input-container {
  width: 100%;
  bottom: 20px;
  display: grid;
  place-items: center;
}
.input-container {
  padding: 8px;
  width: 80%;
  background-color: rgba(22, 21, 22, 1);
  border-radius: 50px;
  position: relative;
}
.input-container .plus-icon {
  position: absolute;
  transform: translateY(-50%);
  left: 20px;
  top: 50%;
}
.shop-button {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 16px;
  display: flex;
  align-self: center;
  border-radius: 50px;
  padding: 8px;
  justify-content: center;
  width: 102px;
  height: 38px;
  cursor: pointer;
}
@media screen and (max-width: 700px) {
    .input-container {
      flex-direction: column;
      align-items: center;
      background-color: transparent;
    }
    .input-wrapper{
      margin: 10px 0;
    }
    .shop-button {
      position: static;
      margin: 0 auto;
      transform: none;
    }
    .input-container .plus-icon{
      top:32%;
    }
  }
</style>
