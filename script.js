//Créer le tableau de tâches
let tasks = []

//Fonction pour créer une nouvelle tâche
function createTask(taskText){
    return {
        task: taskText,
        done: false
    }
}

//Tester la fonction
tasks.push(createTask("My first task")) //insérer une tâche dans le tableau tasks
tasks.push(createTask("My second task")) //insérer une deuxième tâche dans le tableau tasks
console.log(tasks) //Afficher mon tableau tasks dans la console


//Récupération des éléments html
const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")

//On écoute la soumission du formulaire
taskForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const taskText = taskInput.value.trim() //Récupération du texte saisie dans le champ taskInput

    //Validation
    if(taskText === ""){
        console.log("Erreur: Le champs est vide !")
        return
    }

    //Création et ajout de la tâche
    const newTask = createTask(taskText)
    tasks.push(newTask)

    console.log("Tâches: ", tasks)

    //Réinitialisatin du champ
    taskInput.value = ""

})