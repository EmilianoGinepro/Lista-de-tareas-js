//agregar una nueva tarea
const addForm = document.querySelector('.add');

const lista = document.querySelector('.to-dos');

const generarTemplate = toDo =>{
    const html =  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    lista.innerHTML +=html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const nuevaTarea = addForm.add.value.trim();
    if(nuevaTarea.length){
        generarTemplate(nuevaTarea);
        addForm.reset();
    }
});

//borrar tareas
lista.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})
 