/**
 * Gestionnaire de tâches TODO pour l'application météo
 * Permet d'ajouter, supprimer, marquer comme terminées et persister les tâches
 */

// Éléments DOM
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');

// Stockage des tâches
let todos = [];

/**
 * Charge les tâches depuis localStorage
 */
function loadTodos() {
  const storedTodos = localStorage.getItem('weatherAppTodos');
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }
  renderTodos();
}

/**
 * Sauvegarde les tâches dans localStorage
 */
function saveTodos() {
  localStorage.setItem('weatherAppTodos', JSON.stringify(todos));
}

/**
 * Génère un ID unique pour une nouvelle tâche
 */
function generateId() {
  return Date.now() + Math.random().toString(36).substr(2, 9);
}

/**
 * Ajoute une nouvelle tâche
 */
function addTodo() {
  const text = todoInput.value.trim();
  
  if (text === '') {
    alert('Veuillez saisir une tâche');
    return;
  }

  const newTodo = {
    id: generateId(),
    text: text,
    completed: false,
    createdAt: new Date().toISOString()
  };

  todos.unshift(newTodo); // Ajoute au début de la liste
  todoInput.value = '';
  saveTodos();
  renderTodos();
}

/**
 * Marque une tâche comme terminée/non terminée
 */
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

/**
 * Supprime une tâche
 */
function deleteTodo(id) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
  }
}

/**
 * Affiche les tâches dans le DOM
 */
function renderTodos() {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.className = 'todo-empty';
    emptyMessage.textContent = 'Aucune tâche pour le moment';
    emptyMessage.style.textAlign = 'center';
    emptyMessage.style.color = '#888';
    emptyMessage.style.fontStyle = 'italic';
    emptyMessage.style.padding = '2rem';
    todoList.appendChild(emptyMessage);
  } else {
    todos.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
      
      todoItem.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} 
               onchange="toggleTodo('${todo.id}')">
        <span class="todo-text">${escapeHtml(todo.text)}</span>
        <button class="todo-delete" onclick="deleteTodo('${todo.id}')" title="Supprimer">
          🗑️
        </button>
      `;
      
      todoList.appendChild(todoItem);
    });
  }

  updateTodoCount();
}

/**
 * Met à jour le compteur de tâches
 */
function updateTodoCount() {
  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  
  let countText;
  if (totalCount === 0) {
    countText = '0 tâche';
  } else if (totalCount === 1) {
    countText = completedCount === 1 ? '1 tâche terminée' : '1 tâche';
  } else {
    countText = `${completedCount}/${totalCount} tâches terminées`;
  }
  
  todoCount.textContent = countText;
}

/**
 * Échappe les caractères HTML pour éviter les injections
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Initialise les événements
 */
function initTodoEvents() {
  // Bouton d'ajout
  addTodoButton.addEventListener('click', addTodo);
  
  // Entrée au clavier
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
  
  // Charge les tâches au démarrage
  loadTodos();
}

// Expose les fonctions globalement pour les événements inline
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;

// Initialise quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTodoEvents);
} else {
  initTodoEvents();
}