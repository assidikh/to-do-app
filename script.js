//Créer le tableau de tâches
let task = []

//Fonction pour créer une nouvelle tâche
function createTask(taskText){
    return {
        task: taskText,
        done: false
    }
}

//Tester la fonction
task.push(createTask("My first task")) //insérer une tâche dans le tableau task
task.push(createTask("My second task")) //insérer une deuxième tâche dans le tableau task
console.log(task) //Afficher mon tableau task dans la console


//Récupération des éléments html
const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")

//On écoute la soumission du formulaire
taskForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const taskText = taskInput.value
    console.log(taskText)
})