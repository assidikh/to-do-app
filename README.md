📝 Mini ToDo List en JavaScript
Description

Cette application web permet de gérer une liste de tâches de manière dynamique.
Elle est développée en HTML, CSS et JavaScript pur, sans framework.
Toutes les tâches sont persistées dans le navigateur grâce à localStorage, donc elles restent même après un refresh.

Fonctionnalités :

Ajouter une tâche

Supprimer une tâche

Marquer une tâche comme terminée / non terminée

Sauvegarde automatique dans le navigateur

Interface simple et responsive

🎯 Objectifs pédagogiques

Ce projet permet de mettre en pratique :

La manipulation de tableaux et objets JavaScript

La création et modification d’éléments DOM (createElement, appendChild)

L’utilisation d’événements (click, submit)

La gestion de la persistance avec localStorage

L’organisation du code et des fonctions réutilisables

Les bases du CSS moderne (flex, classes, style conditionnel)

🚀 Installation

Cloner le dépôt :

git clone https://github.com/assidikh/to-do-app.git
cd to-do-app


Ouvrir index.html dans un navigateur moderne (Chrome, Firefox, Edge ou Safari).

Pas besoin de serveur, l’application fonctionne en local.

⚙️ Usage

Ajouter une tâche :

Saisir le texte dans le champ et cliquer sur "Ajouter".

Supprimer une tâche :

Cliquer sur le bouton ❌ à droite de la tâche.

Marquer comme terminée :

Cliquer sur la tâche pour la barrer / débarrer.

Persistance :

Les tâches et leur état sont sauvegardés automatiquement grâce à localStorage.

🧩 Structure du projet
/
├─ index.html        # Page principale
├─ style.css         # Styles CSS
├─ script.js         # JavaScript principal
└─ README.md         # Documentation

📝 Fonctionnement technique

Toutes les modifications du tableau tasks passent par renderTasks()

Chaque <li> a un bouton ❌ pour supprimer la tâche

Les clics sur la tâche toggle la propriété done

renderTasks() met à jour l’affichage et le localStorage à chaque changement

localStorage.setItem("tasks", JSON.stringify(tasks));


Au chargement de la page, le tableau est initialisé depuis localStorage :

const savedTasks = localStorage.getItem("tasks");
if (savedTasks) tasks = JSON.parse(savedTasks);

🎨 CSS

Utilisation de flex pour aligner les inputs et boutons

Liste propre, barre pour les tâches terminées

Boutons ❌ sans style de bord par défaut

👨‍💻 Git workflow conseillé

Main → code stable

Feature branches → nouvelles fonctionnalités :

feature/js-toggle-task

feature/base-styles

feature/js-persist-task

🧪 Tests à effectuer

Ajouter plusieurs tâches

Supprimer une tâche

Cliquer sur une tâche pour toggle “done”

Rafraîchir la page → tout doit être conservé

🔗 Remarques

Ce projet est idéal pour débutants qui veulent comprendre JS, DOM et localStorage

Peut être enrichi avec des fonctionnalités : filtre, compteur de tâches, drag & drop, etc.