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