const addbtn = document.querySelector('.add-btn')
addbtn.addEventListener('click', function(){
    window.location.href = '../Add/index.html'
})

/*const instrucciones = document.querySelector('.instrucciones')
const instrucciones_box = document.querySelector('.instrucciones-box')
instrucciones.addEventListener('click', function(){
    instrucciones_box.style.display = 'block'
})

const cerrar_inst = document.querySelector('.close-button')
cerrar_inst.addEventListener('click', function(){
    instrucciones_box.style.display = 'none'
})*/

async function getData(){
    const response = await fetch('http://localhost:8080/api/recetas/') 
    const data = await response.json();
    console.log(data)
    putData(data)
}

function putData(data){
    const recetas_template = document.querySelector('#recetas-template')
    const contenedor = document.querySelector('.recetas-container')
    contenedor.innerHTML = '';
    data.forEach(recipe => {
        const template = document.importNode(recetas_template.content, true)

        const receta_nombre = template.querySelector('.nombre-receta')
        receta_nombre.textContent = recipe.nombre
        const tipo_cocina = template.querySelector('.tc')
        tipo_cocina.textContent = recipe.tipo_cocina
        const ingredientes = template.querySelector('.ingredientes')
        ingredientes.textContent = recipe.ingredientes.toLowerCase()
        console.log(template)
        const instrucciones_button =  template.querySelector('.instrucciones')
        const close_btn = template.querySelector('.close-button')
        instrucciones_button.addEventListener('click', function(){
            const caja = document.querySelector('.instrucciones-box')
            caja.style.display = 'block'
            const text_ins = document.querySelector('.text-ins')
            const instrucciones_num = recipe.instrucciones.split(';')
            text_ins.textContent = ''
            for(x = 1; x <= instrucciones_num.length; x++){
                console.log(`${x}.- ${instrucciones_num[x-1]}`)
                text_ins.textContent += `${x}.- ${instrucciones_num[x-1]}\n`
            }
        })
        close_btn.addEventListener('click', function(){
            const caja = document.querySelector('.instrucciones-box')
            caja.style.display = 'none'
        })
        contenedor.appendChild(template)
    });
}
getData()