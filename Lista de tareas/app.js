//agregar una nueva tarea
document.getElementById("btn_aceptar").addEventListener('click',() =>{    

let Tarea = document.getElementById('agregar');
let tareaValor = Tarea.value;

let Fecha = document.getElementById('fecha').value;
let fechaValor = new Date(Fecha).toLocaleDateString()

if(Tarea.value ==='' || Fecha.value ===''){
    return false;
}

var nuevaTarea = {
    Tarea: tareaValor,
    Fecha: fechaValor, 
    }
  
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

