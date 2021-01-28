//agregar una nueva tarea
document.getElementById("btn_aceptar").addEventListener('click',() =>{    

let Tarea = document.getElementById('agregar');
let tareaValor = Tarea.value;

let Fecha = document.getElementById('fecha').value;
let fechaValor = new Date(Fecha).toLocaleDateString()

console.log(fechaValor);


if(Tarea.value ==='' || Fecha.value ===''){
    return false;
}

var nuevaTarea = {
    Tarea: tareaValor,
    Fecha: fechaValor, 
    }
    console.log(nuevaTarea);
    generarTemplate(nuevaTarea);
    
    Tarea.value = ''
    Fecha.value = ''   
    
})

  
//generar html y agregar el objeto
const lista = document.querySelector('.to-dos');

const generarTemplate = tareaNueva =>{
    const html =  
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${tareaNueva.Tarea}  ${tareaNueva.Fecha}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;
    lista.innerHTML +=html;
};

//borrar tareas
lista.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

/*
   Trabajar el formato del  date
1-Busca moment.js
2-convierte el date en toLocaleString(), toma los 10 primeros con slice , con slipt separa lo por '/' y lo construyes a tu manera en una cadena
3-Busca en Google los formatos que te da dateTimePicker, junto con jquery puedes establecer el formato que desees recuperar.
*/
