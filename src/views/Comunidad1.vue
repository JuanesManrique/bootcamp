<template lang="">
    <div class="Video p-4">
        <div class="video-container w-full flex justify-center mb-3">
            <video class="rounded" src="https://camilo9497.github.io/videos-alcaldia/assets/21-05-20%20DON%20DANIEL.mp4" style="width:80%;"></video>
        </div>
        <div class="description-container mb-5">
            <div class="">
                <div>
                    <h1 class="font-bold mb-4" style="font-size: 20px; color: #2B5AC4;">Apoyo a la comunidad en el barrio playa rica, contrucion de espacio cultural y bilioteca</h1>
                </div>
                <div>
                    <p>Use only one cookie for all transactions that are joined using a pipe ( “|” ) 
                    symbol in order to avoid assigning a cookie to each transaction. Now, 
                    the ongoing transaction ID will be added to this newly created transaction cookie every 
                    time a transaction is sent to Google Analytics.</p>
                </div>
                
            </div>
            <div class="fecha-estrella-container px-3">
                <div class="fecha">
                    <h1 class="font-bold">23/09/2021</h1>
                </div>
                <div class="strats">
                    <Starts/>
                </div>
            </div>
        </div>
        <div class="contfoot">
            <div class="row comentarios justify-content-center">
                <div class="col-12">
                    <form action="" class="form_comentarios d-flex justify-content-end flex-wrap">
                        <textarea name="" id="" placeholder="Comentario" class="rounded mb-4"></textarea>
                        <button class="btn" type="button">Subir</button>
                    </form>

                    <div class="media">
                        <div>
                            <img src="https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg" width="64" heigth="64">
                        </div>
                        <div class="mediabody">
                            <p class="nombre">Neo <span>9:00am, Hoy</span></p>
                            
                            <div class="comentario">
                                salio feo el comentario, muy planillado
                            </div>
                        </div>
                            
                        <div class="botones">
                            <a href="#">Responder</a>
                            <a href="#">Editar</a>
                            <a href="#">Borrar</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Starts from '@/components/Starts.vue'

export default {
    name:"Video",
    components: {
        Starts,
    }
}
</script>
<style scoped>

.description-container {
        display: flex;
        flex-direction: column-reverse;
    }

    .fecha-estrella-container {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

.contfood {
    margin-bottom: 0px;
}
.comentarios {
    margin: 20px 0px;
}
.form_comentarios textarea {
    width: 80%;
    height: 80px;
    max-width: 100%;
    min-width: 100%;
    min-height: 80px;
    max-height: 200px;
    padding: 10px;
    line-height: 30px;
    border: 1px solid #4b65d1;
    background-color: white;
    outline:none;
}
.form_comentarios .btn {
    background: #4b65d1;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 20px;
}
.form_comentarios .btn:hover {
    box-shadow: 0px 0px 9px rgba(0,0,0,.35);
}
.media {
    width:100%;
    border-top: 1px solid #bfbfbf;
    padding-top: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto ;
}
.media img {
    margin-right: 20px;
}
.mediabody .nombre {
    color: #4b65d1;
    margin-bottom: 0;
}
.mediabody .nombre span {
    font-size: 12px;
    color: #464646;
    margin-left: 10px;
}
.mediabody .comentario {
    margin-top: 10px;
}
.botones {
    display: flex;
    align-items: flex-end;
    /* justify-content: flex-end; */
}
.botones a {
    color: #acacac;
    font-size: 14px;
    margin-left: 20px;
}

</style>