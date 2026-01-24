import Etudiant from "./etudiants.js";

Etudiant.MAX_NOTE = 20

//console.log(Etudiant.allEtudiants())

let filterBySettings = {
    'column' : 'id',
    'desc' :true
}

const displayEtudiants = async function() {
    return Etudiant.allEtudiants().then(function(response){
        // sorting by 
        console.log(response)
        response.sort((a,b) => {
            // sorting by string : 
            if (filterBySettings.desc) {
                return b[filterBySettings.column].localeCompare(a[filterBySettings.column])
            }
            return a[filterBySettings.column].localeCompare(b[filterBySettings.column]) 
            
            // sorting by number :
            const number = typeof a[filterBySettings.column] === 'number' 
            if (number) {
                if (filterBySettings.desc) {
                    return b[filterBySettings.column] - a[filterBySettings.column]
                }
                return a[filterBySettings.column] - b[filterBySettings.column]
            }
        })
        // Mapping Objects to Classes.
        // .map kajibe data men response 
        return response.map((data) =>{
            //console.log(etudiant)
            //distracturing
            const {id,name,date,note} = data
            const etudiant = new Etudiant(name,date,note)
            return `
                <tr>
                    <td>${id}</td>
                    <td>${etudiant.name}</td>
                    <td>${etudiant.getAge()} Ans</td>
                    <td><span class="${etudiant.isAdmitted() ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-1 rounded-xl">${(etudiant.note.length > 2 ) ? etudiant.note : etudiant.note}/${Etudiant.MAX_NOTE}</span></td>
                    <td><button class="delete my-1 bg-red-600 text-white px-1 py-0.5 rounded-lg shadow hover:bg-red-500 active:scale-95 transition-all" data-id="${id}" >Supprimer</button></td>
                </tr>
            `
        })
    }) 
}
// function add etudiant : 
const addEtudiant = (event) => {
    event.preventDefault()  // annule de event ou de click, it's same the onsumbe = false
    const [name, data, note] = document.querySelectorAll('#name,#data,#note')
    const etudiant = new Etudiant(name.value,data.value,note.value)
    etudiant.addEtudiant()
}
// delete etudiants : 
window.deleteEtudiant = (id) => {
    //event.preventDefault()
    //init()
    //console.log(id)
    Etudiant.deleteEtudiant(id).then(() => alert('do you want to delete etudiant'))
}
window.refreshBtn = () => {
     const time = () => {
        window.location.href = window.location.href
        }
    setTimeout(() => time(),0.0)
}
// l'affichage d'etudiant au tableau :
const renderEtudiants = function(){
    const body = document.querySelector('.list-etudiants')
        // displayEtudiants().then((data) => {
        //     data  = data.join('')// hadi helte liya wahed problem de " , "  json we safi
        //     body.innerHTML = data
        // })
        displayEtudiants().then((data) => {
            body.innerHTML = data.join('') // hadi helte liya wahed problem de " , "
            init()// to reinitialize the delete button event listener 
        })
}
//this's pointeur ka pointe sur HTML btn : 
const init = function(){
    const refrechButton = document.getElementById('refresh')
    refrechButton.addEventListener('click',() =>{
        window.refreshBtn()
    })
    const deleteButton = document.querySelectorAll('.delete')
    // for all button :
    deleteButton.forEach((button) =>{
        button.addEventListener('click',(event) => {
            window.deleteEtudiant(button.dataset.id)
        })
    })
    const addfnt = document.getElementById('add')
    addfnt.addEventListener('click' ,(event) => {
        addEtudiant(event)
    })
    //const elements = document.querySelectorAll('.sort-id, .sort-name, .sort-age, .sort-note')
}

window.rederSort = (column) => {
   if (filterBySettings.column === column) {
    const element = document.querySelector('.sort-'+column) 
    console.log(element.innerHTML += `<button class="py-1 px-1 ml-2 text-sm text-black bg-red-400 rounded-sm" onClick='ChangeSort()' >${filterBySettings.desc ? '↓':'↑'}</button>`)
   }
}
rederSort('id')
rederSort('name')
rederSort('age')
rederSort('note')
window.ChangeSort = () => {
    if (filterBySettings.desc === true) {
     filterBySettings.desc = false  
    }
    else
        filterBySettings.desc = true
    renderEtudiants()
}

renderEtudiants()


