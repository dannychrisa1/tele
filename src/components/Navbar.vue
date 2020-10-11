<template>
<div class="navo">
 
        <!-- nav-section -->
 

 <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html"><i class="flaticon-university"></i>rexio <br><small></small></a>
      <div class="nav-switch  d-block">
            <a href="#" onclick="openSlideMenu()"><i class="fa fa-bars menu" aria-hidden="true"></i></a>
    </div>

      <div class="collapse navbar-collapse" id="ftco-nav">
           <ul class="navbar-nav ml-auto">
                   <li v-for="item in items" :key="item.id" class="nav-item">
                    <router-link class="nav-link" :to="`${item.page}`">{{item.text}}</router-link>
                    
                    
                </li>
                 <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
                <li class="nav-item login">
                    <router-link class="nav-link" to="/signIn"><button class="btn btn login-button">Login</button></router-link>
                </li>
              
                    <li class="nav-item signup">
                        <router-link class="nav-link" to="/signUp"><button class="btn btn signup-button">Sign Up</button></router-link>

                     </li>

           </ul>
      </div>
    </div>
  </nav>

    <div id="side-menu" class="side-nav">
                 <a href = "#" class="btn-close" onclick="closeSlideMenu()">&times;</a>
               <li v-for="item in items" :key="item.id" class="nav-item-mobile"  onclick="closeSlideMenu()">
                    <router-link class="nav-link" :to="`${item.page}`">{{item.text}}</router-link>
                </li>
                
                <li class="nav-item-mobile"  onclick="closeSlideMenu()"> 
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>

              
            </div>
  

    


</div>






</template>

<script>
export default{
    name:'Navbar',
    props:{
        msg:String
    },
    data(){
        return{
            items:[
                {id:0, text:'Home', page:'/home', icon:'<i class="fa fa-home">'},
                {id:1, text:'About', page:'/about', icon:'<i class="fa fa-user">'},
               
                

        ]
    }
},
    
}
</script>


<style>
nav a.router-link-active{
    /* background-color: palevioletred; */
    color:#3583ba !important;
  
}

</style>