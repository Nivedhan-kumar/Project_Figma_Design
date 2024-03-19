<template>
    <div class="bg-template">
        <div v-if="showMessage1" class="messageOne-container">
            <img src="../../assets/glass.png" alt="Image" height="35" width="35" />
            <p class="messageOne" v-html="message1"></p>
        </div>
        <div v-if="showMessage2" class="messageTwo-container">
            <img v-if="currentMessage === secondMessage" height="35" width="35" src="../../assets/globe.png"
                alt="Image" />
            <p class="messageTwo">{{ message2 }}</p>
        </div>
        <div class="shoppingPage-inner-container" v-if="showComponent">
            <div class="shoppingHeader-bar-container child">
                <h2 class="shopping-page-header">List of Black T-shirt</h2>
                <div class="header-btn">
                    <div class="btn-container">
                        <p class="btn-content content-one">Recommended</p>
                    </div>
                    <div class="btn-container">
                        <p class="btn-content">Lowest Price</p>
                    </div>
                    <div class="btn-container">
                        <p class="btn-content">Top Rated</p>
                    </div>
                </div>
            </div>
            <div class="product-parent-container child">
                <div class="child-container" v-for="items in productList" :key="items.id" @click="openProduct(items)"
                    :style="{ backgroundImage: `url(${items.img})` }">
                    <img :src='items.iconImg' class="icon-image" />
                    <div class="product-details-container">
                        <div class="rating-container">
                            <p class="rating">4.4<span><img :src='items.ratingIcon' </span></p>
                        </div>
                        <p class="product-brand">{{ items.brand }}</p>
                        <h4 class="product-name-content">{{ items.name }}</h4>
                        <div class="price-container">
                            <img :src="items.price" class="product-price" />
                            <div class="shop-btn">
                                <p class="shop-btn-content"> Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop-btn-container">
                <button type="submit" class="shop-now-btn"><span class="img-star"><img src="../../assets/star.png"
                            height="16" width="16" /></span>Shop More</button>
            </div>
            <div class="input-tag-container child">
                <InputBox @openNextPage="handleProductDetails" />
            </div>
        </div>
    </div>
</template>
<script>
import InputBox from '../inputBox/InputBox.vue'
export default {
    name: 'shopping-list',
    components: {
        InputBox
    },
    data() {
        return {
            message1: `<b>Shopping across web</b> <br> flipkart.com <br>meesho.com<br>mensxp.com<br>amazon.com<br>ajio.com<br>nike.ae`,
            message2: 'Making an experience for you!',
            showMessage1: true,
            showMessage2: false,
            showComponent: false,
            productList: [
                {
                    id: 1,
                    rating: 4.4,
                    name: 'Men Printed Polo Neck Polyester Black T-Shirt',
                    price: require('../../assets/priceOne.png'),
                    brand: 'Jump Cuts',
                    iconImg: require('../../assets/flipkart.png'),
                    ratingIcon: require('../../assets/rating.png'),
                    img: require('../../assets/shirtOne.png')
                },
                {
                    id: 2,
                    rating: 4.4,
                    name: 'Men Checkered Round Neck Cotton Blend Black T-Shirt',
                    price: require('../../assets/priceTwo.png'),
                    brand: 'AVEJO ',
                    iconImg: require('../../assets/amazon.png'),
                    ratingIcon: require('../../assets/rating.png'),
                    img: require('../../assets/shirtTwo.png')
                },
                {
                    id: 3,
                    rating: 4.4,
                    name: 'Men Solid Round Neck Polyester Black T-Shirt',
                    price: require('../../assets/priceThree.png'),
                    brand: 'EyeBogler',
                    iconImg: require('../../assets/myntra.png'),
                    ratingIcon: require('../../assets/rating.png'),
                    img: require('../../assets/shirtThree.png')
                }
            ]
        }
    },
    methods: {
        handleProductDetails() {
            this.$router.push('/product-spec')
        },
        openProduct(item) {
            if (item.id === 2) {
                this.$router.push('/product-spec')
            }
        },
        showMessage() {
            setTimeout(() => {
                this.showMessage1 = false;
                this.showMessage2 = true;
                setTimeout(() => {
                    this.showMessage2 = false;
                    this.showComponent = true;
                }, 1000);
            }, 1000);
        }
    },
    mounted() {
        this.showMessage();
    }
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
.messageOne-container {
    display: flex;
    padding: 35px;
}
.messageOne {
    color: rgba(218, 218, 218, 1);
    margin: 0;
    padding: 6px 0 0 8px;
}
.messageTwo-container {
    display: flex;
    align-items: center;
    padding: 35px;
}
.messageTwo {
    color: rgba(218, 218, 218, 1);
    font-size: 22px;
    margin: 0 0 0 8px;
}
.shoppingPage-inner-container {
    height: 100%;
    display: grid;
    position: relative;
}
.shoppingHeader-bar-container {
    padding: 20px 35px;
}
.shopping-page-header {
    color: rgba(255, 255, 255, 1);
    font-size: 30px;
    font-weight: 500;
    margin: 0 0 20px 0;
}
.header-btn {
    display: flex;
}
.btn-container {
    background-color: rgba(44, 44, 44, 1);
    width: max-content;
    height: max-content;
    border-radius: 20px;
    margin-right: 15px;
}
.btn-content {
    color: rgba(250, 249, 246, 0.5);
    margin: 0;
    padding: 12px;
}
.content-one {
    color: rgba(255, 255, 255, 1) !important;
}
.product-parent-container {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    gap: 25px;
    padding: 0 35px 20px 35px;
}
.child-container {
    position: relative;
    background-size: cover;
    background-position: center;
    height: 430px;
    border-radius: 8px;
    cursor: pointer;
}
.icon-image {
    padding: 20px;
}
.product-details-container {
    position: absolute;
    bottom: 0;
    padding: 20px;
}
.rating-container {
    background-color: rgba(250, 249, 246, 1);
    width: max-content;
    padding: 4px;
    border-radius: 20px;
    width: 40px;
    margin-bottom: 10px;
}
.rating {
    margin: 0;
    text-align: center;
}
.product-brand {
    margin: 0 0 10px 0;
    color: rgba(227, 227, 227, 1);
    font-size: 12px;
}
.product-name-content {
    color: rgba(250, 249, 246, 1);
    font-size: 20px;
    margin: 0 0 10px 0;
}
.price-container {
    display: flex;
    justify-content: space-between;
}
.product-price {
    height: 22px;
    width: auto;
    align-self: center;
}
.shop-btn {
    background-color: rgba(250, 249, 246, 0.2);
    border-radius: 20px;
}
.shop-btn-content {
    color: rgba(255, 255, 255, 1);
    margin: 0;
    padding: 8px;
}
.shop-btn-container {
    align-self: flex-end;
    place-items: center;
    display: grid;
    width: 80%;
    margin-bottom: 20px;
}
.shop-now-btn {
    background: none;
    color: rgba(248, 248, 248, 1);
    border: 1px solid rgba(58, 58, 58, 1);
    width: 230px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
}
.img-star {
    margin-right: 5px;
}
.input-tag-container {
    margin: 20px 35px;
}
@media screen and (max-width:992px) {
    .product-parent-container {
        grid-template-columns: 30% 30% 30%;
    }
    .shop-btn-container {
        width: 97%;
    }
}
@media screen and (max-width:768px) {
    .product-parent-container {
        grid-template-columns: 48% 48%;
    }
}
@media screen and (max-width:576px) {
    .product-parent-container {
        grid-template-columns: 100%;
    }
    .header-btn{
        display: flex ;
        flex-direction: column;
    }
    .btn-container{
        margin-bottom: 12px;
    }
}
</style>
