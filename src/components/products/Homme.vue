<template>
    <div>
        <div v-if="!products.isLoaded" class="loading">
            <div class="loading-circle"></div>
            اصبر دقيقة و توصل السلعة
        </div>
        <div v-else class="products-wrapper">
            <div v-for="(product) in products.products" class="product-card" :key="product.id">
                <div class="product-info">
                    <h2>{{ product.title }}</h2>
                    
                    <div>Rating: <span class="rating">{{ product.rating.rate }}</span> ({{ product.rating.count }} Reviews)</div>
                    <div class="img-wrapper"><img :src="product.image" alt="product"></div>
                    <div class="price">{{ product.price }}<span>$</span></div>
                    <div class="category"> {{ product.category }} </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useProductsStore } from "@/stores/shoes";

const products = useProductsStore()
if(!products.isLoaded){
    products.loadData()
}
</script>
<style scoped>
.products-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    padding: 20px;
}
.product-card{
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .1);
    transition: transform .5s, box-shadow .3s;

    &:hover{
        box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .3);
        transform: translateY(-10px);
    }
}
.product-info{
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
}
.product-info h2{
    margin: 0 0 10px;
    text-wrap: balance
}
.rating{
    font-size: 20px;
    font-weight: bold;
}
.img-wrapper{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    transition: scale .3s;
    z-index: -1;
}
.product-card:hover .img-wrapper{
    scale: 1.1;
}
.products-wrapper img{
    max-width: 100%;
    max-height: 400px;
}
.price{
    font-size: 25px;
    color: green;
    font-weight: bold;

    & span{
        font-size: 20px;
        font-weight: normal;
        margin-left: 3px;
    }
}
.category{
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #777;
}

/* Loading circle */
.loading{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.loading-circle{
    width: 70px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 5px solid ;
    border-color: aqua aqua transparent;
    animation: rotate 1s infinite linear;
    margin-bottom: 5px;
}
@keyframes rotate {
    to{
        rotate: 1turn;
    }
}
</style>