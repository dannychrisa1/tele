<template>
 <div>
   <div class="bgimg d-block d-md-block"
   :style="{backgroundImage: `url(${backgroundUrl})`}">
    <div class="overlay"></div>
     <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div class="col-md-8 ftco-animate text-center">
            <h1 class="mb-4">No Nation Can Prosper In Life Without Education</h1>
            <p><a href="#" class="btn btn-primary px-4 py-3">Apply Now</a> <a href="#" class="btn btn-secondary px-4 py-3">View Courses</a></p>
          </div>
        </div>
      </div>

   </div>
   <section>
     <div class="container">
       <div class="row">
         <div class="col-sm-6 col-xs-12 col-md-4 col-lg-3" v-for="person in persons" :key="person">
           <img :src="person.image" class="img-fluid">
           <h4>{{person.details}}</h4>
         </div>
     </div>
     </div>
   </section>
 
  </div>
  
  
  


 

 
 
</template>

<script>
  import backgroundUrl from "@/assets/telecommbg3.jpeg";
  import car from "@/assets/car-4.jpg";

  export default {
    name: 'Home',
    data(){
      return{
            backgroundUrl,
            car,
        items:[
          {
            name:"Nestor's Villa",
            img:require("@/assets/car-1.jpg"),
            details:"Located at the heart of the city",
            btn:"Rent now"
          },
            {
            name:"Danny's Villa",
           img:require("@/assets/car-2.jpg"),
           details:"Located at the heart of the city",
          btn:"Rent now"
          },
            {
            name:"Rex House",
             img:require("@/assets/car-3.jpg"),
              details:"Located at the heart of the city",
              btn:"Rent now"
          },
           {
            name:"Banana lodge",
             img:require("@/assets/car-3.jpg"),
              details:"Located at the heart of the city",
              btn:"Rent now"
          },
        
        ],
        persons:[
          {
            image: require("@/assets/person_1.jpg"),
            details:"Web Developer"
          },
          {
            image: require("@/assets/person_2.jpg"),
            details:"Web Developer"
          },
          {
            image: require("@/assets/person_3.jpg"),
            details:"Web Developer"
          },
          {
            image: require("@/assets/person_4.jpg"),
            details:"Web Developer"
          },

        ],
        colors: [
          'indigo',
          'red',
          'blue',
          'green',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],

        
      }
    }
  }
</script>
