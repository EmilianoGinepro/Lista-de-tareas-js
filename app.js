// agregar una nueva tarea
documento . getElementById ( "btn_aceptar" ) . addEventListener ( 'hacer clic' , ( )  => {    

deje  Tarea  =  documento . getElementById ( 'agregar' ) ;
let  tareaValor  =  Tarea . valor ;

deje  Fecha  =  documento . getElementById ( 'fecha' ) . valor ;
let  fechaValor  =  nueva  fecha ( Fecha ) . toLocaleDateString ( )

if ( Tarea . valor  === ''  ||  Fecha . valor  === '' ) {
    devolver  falso ;
}

var  nuevaTarea  =  {
    Tarea : tareaValor ,
    Fecha : fechaValor , 
    }
  
    generarTemplate ( nuevaTarea ) ;
    
    Tarea . valor  =  ''
    Fecha . valor  =  ''   
    
} )

  
// generar html y agregar el objeto
 lista  constante =  documento . querySelector ( '.to-dos' ) ;

const  generarTemplate  =  tareaNueva  => {
    const  html  =  
    `<li class =" lista-grupo-elemento d-flex justificar-contenido-entre alinear-elementos-centro ">
        <span> $ { tareaNueva . Tarea }   $ { tareaNueva . Fecha } </span>
        <i class = "far fa-trash-alt delete"> </i>
    </li> ` ;
    lista . innerHTML  + = html ;
} ;

// borrar tareas
lista . addEventListener ( 'clic' ,  e => {
    if ( p . target . classList . contiene ( 'eliminar' ) ) {
        e . objetivo . parentElement . eliminar ( ) ;
    }
} )
