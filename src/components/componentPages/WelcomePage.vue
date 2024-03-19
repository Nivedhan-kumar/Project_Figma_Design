<template>
    <div class="bg-template">
        <div class="welcomepage-inner-container">
            <div class="header-bar-container child">
                <h2 class="welcome-page-header"><span class="header-content">Hello, John</span><br>
                    How can I help you today?</h2>
            </div>
            <div class="parent-container child">
                <div class="child-container" v-for="items in products" :key="items.id">
                    <div class="inner-child-container">
                        <div class="product-container">
                            <p class="product-name">{{ items.name }}</p>
                        </div>
                        <div class="product-image-container">
                            <img :src='items.img' class="product-image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="child">
                <InputBox @openNextPage="openNextPage" />
            </div>
        </div>
    </div>
</template>
<script>
import InputBox from '../inputBox/InputBox'
import store from '@/store';
export default {
    components: {
        InputBox
    },
    data() {
        return {}
    },
    computed: {
        products() {
            return this.$store.getters.getAllProducts;
        }
    },
    methods: {
        openNextPage() {
            this.$router.push('/product-list')
        }
    },
}
</script>
<style scoped>
.bg-template {
    background-color: rgb(33, 25, 33);
    height: 100%;
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}
.welcomepage-inner-container {
    height: 100%;
    display: grid;
    grid-template-rows: 20% 50% 30%;
}
.welcome-page-header {
    margin: 0;
    color: rgba(130, 130, 130, 1);
    font-weight: 500;
    font-size: 35px;
    padding: 20px 35px;
    font-family: 'Satoshi', sans-serif;
}
.welcome-page-header .header-content {
    color: rgba(206, 94, 213, 1)
}
.parent-container {
    display: grid;
    gap: 18px;
    grid-template-columns: 25% 25% 25%;
    padding: 20px 35px;
}
.child-container {
    background-color: rgba(52, 52, 52, 1);
    box-sizing: border-box;
    border-radius: 22px;
    height: 200px;
    padding: 12px;
}
.inner-child-container {
    position: relative;
    height: 100%;
}
.product-name {
    color: rgba(237, 237, 237, 1);
    font-size: 24px;
    margin: 0;
}
.product-image-container {
    height: max-content;
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    right: 0;
    width: max-content;
    background: rgba(23, 11, 28, 1);
}
.product-image {
    padding: 8px;
    height: 20px;
    width: auto;
}
.child:nth-child(3) {
    grid-row: 3;
    align-self: flex-end;
    place-items: center;
    padding: 20px;
}
@media screen and (max-width: 992px) {
    .parent-container {
        grid-template-columns: 30% 30% 30%;
    }
}
@media screen and (max-width: 768px) {
    .parent-container {
        grid-template-columns: 45% 45%;
    }
}
@media screen and (max-width: 576px) {
    .parent-container {
        grid-template-columns: 95%;
    }
}
@media screen and (max-width: 390px) {
    .parent-container {
        grid-template-columns: 100%;
    }
}
</style>
