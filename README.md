# 📝 Mini ToDo List en JavaScript

Une petite application web pour gérer une **liste de tâches**. Développée en **HTML, CSS et JavaScript pur**, elle permet d’ajouter, supprimer et marquer des tâches comme terminées. Les données sont **sauvegardées automatiquement** grâce à `localStorage`.

## 🚀 Installation

# Cloner le dépôt et entrer dans le dossier
git clone https://github.com/assidikh/to-do-app.git
cd to-do-app
# Ouvrir index.html dans un navigateur moderne

## ⚙️ Usage

- Ajouter une tâche : saisir le texte et cliquer sur "Ajouter"  
- Supprimer une tâche : cliquer sur le bouton ❌  
- Marquer comme terminée : cliquer sur la tâche pour barrer/débarrer  
- Les tâches restent même après un refresh grâce à `localStorage`

## 🧩 Structure du projet

index.html  
style.css  
script.js  
README.md

## 👨‍💻 Git workflow

- `main` → code stable  
- Branches features → nouvelles fonctionnalités  
  - `feature/base-styles`  
  - `feature/js-persist-tasks`  

## 🧪 Tests

- Ajouter, supprimer et toggler des tâches  
- Rafraîchir la page → toutes les tâches et leur état sont conservés
