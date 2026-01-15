import { ENDPOINT } from "./constants.js"// katejib men file constants,js l'etudiants
export default class Etudiant{ 
    constructor(name,age,note){
        this.name = name
        this.age = age 
        this.note = note 
    }
    // thise function to fetch all etudiants from the local server : affiche tous les etudiants
    // static allEtudiants = function() { 
    //     let etudiants = fetch(ENDPOINT)
    //                     .then(response => response.json())
    //                     .then(etudiants => console.log(etudiants))
    // }


// promises
    static allEtudiants = async function() {
        const response = await fetch(ENDPOINT)
        const etudiants = await response.json()

        return etudiants
    }

// httpp://localhost:3000/etudiants (POST)
    addEtudiant = async function() {
    const response = await fetch(ENDPOINT,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name: this.name,
            date: this.age,
            note: this.note
        })
    })
        return response
        
    }
    
    // actuiel age d'etudiants 
    getAge = () =>  new Date().getFullYear() - new Date(this.age).getFullYear()
    
    //Fct traite etudiants > 10 
    isAdmitted = () => this.note >= 10

    
// httpp://localhost:3000/etudiants/{id} (DELETE)
    static deleteEtudiant = async function (id) {
       const response = await fetch(ENDPOINT+'/'+id,{ // i can use it : fetch(`${ENDPOINT}/${id})
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        })
        return response 
    }

}
