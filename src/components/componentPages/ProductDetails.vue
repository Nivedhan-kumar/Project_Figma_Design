<template>
    <div class="product-container">
        <div class="bg-template">
            <div>
                <h2 class="selected-product-name">Men Checkered Round Neck Cotton Blend Black T-Shirt</h2>
                <div class="imageList-container">
                    <div class="image-style-container">
                        <div v-for="items in imageList" :key="items.id" class="inner-image-container">
                            <img :src="items.img" class="half-img" />
                        </div>
                    </div>
                    <div class="image-wrapper">
                        <img src="../../assets/styleFour.png" class="full-img" />
                    </div>
                </div>
                <div class="input-box-wrapper">
                    <InputBox @click="goToHomePage()" />
                </div>
            </div>
        </div>
        <div class="product-spec">
            <ProductInfo />
        </div>
    </div>
</template>
<script>
import ProductInfo from '../componentPages/ProductInfo'
import InputBox from '../inputBox/InputBox.vue'
export default {
    name: 'product-details',
    components: {
        ProductInfo,
        InputBox
    },
    data() {
        return {
            imageList: [
                {
                    id: 1,
                    img: require('../../assets/styleOne.png')
                },
                {
                    id: 2,
                    img: require('../../assets/styleTwo.png')
                },
                {
                    id: 3,
                    img: require('../../assets/styleThree.png')
                },
            ]
        }
    },
    methods: {
        goToHomePage() {
            this.$router.push('/product-list')
        }
    }
}
</script>
<style scoped>
.product-container {
    display: grid;
    grid-template-columns: 70% 30%;
}
.bg-template {
    background-color: rgb(33, 25, 33);
    height: 100%;
    width: 100%;
    border-radius: 8px;
    position: relative;
}
.selected-product-name {
    color: rgba(250, 249, 246, 1);
    font-weight: 700;
    font-size: 36px;
    padding: 20px 35px;
    margin: 0;
}
.imageList-container {
    display: flex;
    padding: 20px 35px;
}
.inner-image-container{
    display: flex;
    align-items: center;
}
.image-style-container{
    margin-right: 8px;
}
.half-img {
    width: 100%;
    height: auto;
    margin: 5px;
}
.full-img {
    height: auto;
    width: 100%;
}
.input-box-wrapper {
    margin: 80px 0 35px 20px;
}
.product-spec {
    background-color: rgba(20, 20, 20, 1);
    padding: 20px;
    margin-left: 10px;
    border-radius: 8px;
}
@media screen and (max-width: 870px) {
    .imageList-container {
        display: block;
    }
    .image-style-container {
        display: flex;
    }
}
@media screen and (max-width: 700px) {
    .product-container {
        display: grid;
        grid-template-columns: 100%;
    }
    .product-spec{
        margin: 0;
    }
}
@media screen and (max-width: 576px) {
    .selected-product-name {
        font-size: 28px;
    }
}
</style>
