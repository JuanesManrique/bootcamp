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
            <div class="contfoot">
                <div class="row comentarios justify-content-center">
                    <div class="col-12">
                        <form action="" class="form_comentarios d-flex justify-content-end flex-wrap">
                            <textarea name="" id="" placeholder="Comentario"></textarea>
                            <button class="btn" type="button">Subir</button>
                        </form>
                        <div class="media d-flex justify-content-space-betweem">
                            <div>
                                <img src="https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg" width="64" heigth="64">
                            </div>
                            <div class="mediabody">
                                <p class="nombre">Neo <span>9:00am, Hoy</span></p>
                                <br>
                                <div class="comentario">
                                    salio feo el comentario, muy planillado
                                </div>
                                <br>
                                <div class="botones text-right">
                                    <a href="#">Responder</a>
                                    <a href="#">Editar</a>
                                    <a href="#">Borrar</a>
                                </div>
                            </div>
                        </div>
                        <div class="media d-flex justify-content-space-betweem">
                            <div>
                                <img src="https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg" width="64" heigth="64">
                            </div>
                            <div class="mediabody">
                                <p class="nombre">Jhon Wicht <span>10:00am, Hoy</span></p>
                                <br>
                                <div class="comentario">
                                    salio feo el comentario, muy planillado
                                </div>
                                <br>
                                <div class="botones text-right">
                                    <a href="#">Responder</a>
                                    <a href="#">Editar</a>
                                    <a href="#">Borrar</a>
                                </div>
                            </div>
                        </div>
                        <div class="media d-flex justify-content-space-betweem">
                            <div>
                                <img src="https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg" width="64" heigth="64">
                            </div>
                            <div class="mediabody">
                                <p class="nombre">Constantine <span>11:00am, Hoy</span></p>
                                <br>
                                <div class="comentario">
                                    salio feo el comentario, muy planillado
                                </div>
                                <br>
                                <div class="botones text-right">
                                    <a href="#">Responder</a>
                                    <a href="#">Editar</a>
                                    <a href="#">Borrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
.contfood {
    margin-bottom: 0px;
}
.comentarios {
    margin: 20px 0px;
}
.form_comentarios textarea {
    width: 100%;
    height: 80px;
    max-width: 100%;
    min-width: 100%;
    min-height: 80px;
    max-height: 200px;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    line-height: 30px;
    border: 1px solid 4b65d1;
    margin-bottom: 20px;
    background-color: lightblue;
}
.form_comentarios .btn {
    background: #4b65d1;
    font-family: 'Roboto', sans-serif;
    border-radius: 0;
    color: #fff;
    margin-bottom: 20px;
}
.form_comentarios .btn:hover {
    box-shadow: 0px 0px 9px rgba(0,0,0,.35);
}
.media {
    border-top: 1px solid #bfbfbf;
    padding-top: 20px;
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
.mediabody .botones {
    margin-bottom: 10px;
}
.mediabody .botones a {
    color: #acacac;
    font-size: 14px;
    margin-left: 20px;
}
</style>
    
