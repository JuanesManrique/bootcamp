<template lang="">
    <div class="Video">
        <div class="contbody">
            <iframe width="100%" height="50%" src="https://www.youtube.com/watch?v=9IZTss4ud1k&ab_channel=GameSpot"  allowfullscreen></iframe>
        </div>
            <div class="contbody">
                <div class="contgrid">
                    <div>
                        <h1>Titulo</h1>
                    </div>
                    <div>
                        <h1>Fecha</h1>
                    </div>
                </div>
            </div>
            <div class="contbody">
                <div class="contgrid">
                    <div>
                        <h1>Descripcion</h1>
                    </div>
                    <div>
                        <h1>Valoracion</h1>
                    </div>
                </div>
            </div>
            <div class="contbody">
                comentarios
            </div>
        </div>
</template>
<script>
export default {
    name:"Video",
    components: {
    }
}
</script>
<style scoped>
.contbody {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
}
.contgrid {
    display: flex;
    justify-content: space-between;
    margin: 0%;
    width: 100%;
    
}
</style>
    
