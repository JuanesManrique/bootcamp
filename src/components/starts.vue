<template>
  <div class="box">
    <a class="ion-android-star b1"></a>
    <a class="ion-android-star b2"></a>
    <a class="ion-android-star b3"></a>
    <a class="ion-android-star b4"></a>
    <a class="ion-android-star b5"></a>
  </div>
</template>
<script>
export default {
     name: "Starts"
};

</script>
<style scoped>
/* styles stars */

@import "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
.box{
    /* position: absolute; */
    direction: rtl;
}.box a{
    font-size: 35px;
    color:#313131;
    transition: 0.3s all;
}
 .box a:hover{
     color:#f1c40f;
}
.b1:hover ~ a{
     color:#f1c40f;
}
.b2:hover ~ a{
     color:#f1c40f;
}
.b3:hover ~ a{
     color:#f1c40f;
}
.b4:hover ~ a{
     color:#f1c40f;
}
.b5:hover ~ a{
     color:#f1c40f;
}
</style>