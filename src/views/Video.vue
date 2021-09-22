<template lang="">
    <div class="Video">
        <div class="contbody">
            Videos
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
                <br>
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
    margin: 50px;
}
.contgrid {
    display: flex;
    justify-content: space-between;
    
}
</style>
    
