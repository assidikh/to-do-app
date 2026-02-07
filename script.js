//Créer le tableau de tâches
let tasks = []

//Fonction pour créer une nouvelle tâche
function createTask(taskText){
    return {
        task: taskText,
        done: false
    }
}

//Fonction pour afficher les tâches
function renderTasks(){
    taskList.innerHTML = ""
    for(let i=0; i<tasks.length; i++){

        let li = document.createElement("li") //on crée une balise li vide
        li.textContent = tasks[i].task //on insère la valeur de la propriété task de notre objet numéro i du tableau tasks
        taskList.appendChild(li) //on insère la balise li dans la balise ul

    }
}




//Récupération des éléments html
const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

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
    renderTasks()


    console.log("Tâches: ", tasks)

    //Réinitialisatin du champ
    taskInput.value = ""

})