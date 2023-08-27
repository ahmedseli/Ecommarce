// ------------- windo scoroll
window.onscroll = function(){
    if(window.scrollY > 0 ){
        document.querySelector(".navebare").style = 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;'

    }else{
        document.querySelector(".navebare").style = 'box-shadow: none'

    }
}