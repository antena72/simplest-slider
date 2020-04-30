$(document).ready(function () {
    let cantElementos = $('.slider').find('.s_element').length; //busca cantidad de elementos del slider
    console.log('Cant de elem '+cantElementos);

    $('#btnAnt').click(function(){
        $('.slider').find('.s_element').each(function(index, value){
            console.log('Anterior '+index);
            if ($(value).hasClass('s_visible')) {
             
                $(value).removeClass('s_visible');
                if (index == 0) {
                    $($('.slider').find('.s_element').get(cantElementos-1)).fadeOut('slow');
                    $($('.slider').find('.s_element').get(cantElementos-1)).addClass('s_visible');
                    return false //corta el each
                }else{//ultimo elemento
            
                    $($('.slider').find('.s_element').get(index-1)).fadeOut('slow');
                    $($('.slider').find('.s_element').get(index-1)).addClass('s_visible');
                    return false //corta el each
                }
            }
            
        })

    });
    
    $('#btnSig').click(function(){
        
        $('.slider').find('.s_element').each(function(index, value){
            console.log('Siguiente '+index);
            if ($(value).hasClass('s_visible')) {
             
                $(value).removeClass('s_visible');
                if ((index +1) < cantElementos) {
                    $($('.slider').find('.s_element').get(index+1)).fadeOut('slow');
                    $($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
                    return false //corta el each
                }else{//ultimo elemento
                    $($('.slider').find('.s_element').get(0)).fadeOut('slow');
                    $($('.slider').find('.s_element').get(0)).addClass('s_visible');
                    return false //corta el each
                }
            }
            
        })
    });
});