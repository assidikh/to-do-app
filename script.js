//Récupération des éléments html
const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

//Créer le tableau de tâches
let tasks = []

// Charger depuis localStorage si disponible
const savedTasks = localStorage.getItem("tasks")
if (savedTasks) {
    tasks = JSON.parse(savedTasks)
}

// Affichage initial
renderTasks()


//Fonction pour créer une nouvelle tâche
function createTask(taskText){
    return {
        taskDescription: taskText,
        done: false
    }
}

//Fonction pour afficher la liste des tâches
function renderTasks(){
    taskList.innerHTML = ""
    for(let i=0; i<tasks.length; i++){

        let li = document.createElement("li") //on crée une balise li vide
        li.textContent = tasks[i].taskDescription //on y insère la valeur de la propriété taskDescription de notre objet numéro i du tableau tasks
        if(tasks[i].done){ //Si la tâche est faite
            li.classList.add("done") //on ajoute une classe done à notre balise li
        }
        li.addEventListener("click", () => { //Au moment du click sur cette tâche
            tasks[i].done = !tasks[i].done //On inverse la valeur de done
            renderTasks() //Et on affiche la nouvelle liste
        })

        let deleteBtn = document.createElement("button") //on crée le boutton associé à la tâche numéro i
        deleteBtn.textContent = "❌"
        deleteBtn.addEventListener("click", (event) => { //Au moment du click sur ce bouton
            event.stopPropagation() //On empêche le toggle
            tasks.splice(i, 1) //On supprime 1 tâche dont la tâche numéro i
            renderTasks() //Et on affiche la nouvelle liste des tâches
        })

        li.appendChild(deleteBtn) //on insère le bouton dans la balise li
        taskList.appendChild(li) //on insère la balise li dans la balise ul

    }

    //Sauvegarde ici, à la fin de renderTasks()
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


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