<template>
    <div class="details">
        <div class="container">
            <h1 class="text-primary text-center">{{title}}</h1>
        </div>
        <div class="col-md-12" v-for="(product,index) in items" :key="index">
            <div v-if="proId == product.productId">
                <h1>{{product.name}}</h1>
                <img :src="product.img" class="img-fluid">
                <p>{{product.about}}</p>
        </div>

     
        </div>
    </div>
</template>
<script>
export default {
    name:'details',
    data(){
        return{
            proId: this.$route.params.Pid,
            title:"details",
             items:[
                {
                    img:require("@/assets/car-1.jpg"),
                    name: "benx",
                    productId:1,
                    about:"this house is really good for sale"
                },
                {
                    img:require("@/assets/car-2.jpg"),
                     name: "benx",
                    productId:2,
                      about:"this house is really good for sale"
                },
                {
                   img:require("@/assets/car-3.jpg"),
                    name: "benx",
                    productId:3,
                      about:"this house is really good for sale"
                },

            ],
        }
    }
}
</script>