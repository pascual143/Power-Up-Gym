$(document).ready(function(){
    $("#frmEmail").submit(function(){
        $("#mail").html('Felicidades, ha ganado un descuento del 50% en su primer mes.');
        
        return false; // Le pongo esto, porque el formulario no tiene a donde ir
    })
    
    // Los submenus
    $("li.dropdown a.abre").bind('click',function(){
        if(!$(this).hasClass('abierto'))
        {
            $(this).addClass('abierto');
            $(this).parent().find('ul').slideDown();
        }else
        {
            $(this).removeClass('abierto');
            $(this).parent().find('ul').hide();
        }
        return false;
    })
    
    $("li.dropdown").bind('mouseleave',function(){
        $(this).find('ul').hide();
        $(this).find('a').removeClass('abierto');
    })
    
    // Menu responsivo
    $("#menu .abre-menu-responsivo").click(function(){
        if(!$(this).hasClass('menu-abierto'))
        {
            $(this).addClass('menu-abierto');
            $(this).closest('ul').find('li:not(.logo):not(.dropdown li)').addClass('abierto');
        }
        else
        {
            $(this).removeClass('menu-abierto');
            $(this).closest('ul').find('li:not(.logo):not(.dropdown li)').removeClass('abierto');
        }
    })
    
    // Fancy
    $("a.fancy").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        padding: 5,
        helpers: {
            title: {
                type: 'over'
            }
        }
    });
    
    Plugins();
})

function Plugins()
{
    $(".datepicker").datepicker({
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true
    });
}

function isMobile() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}