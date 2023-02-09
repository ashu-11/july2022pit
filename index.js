// <!-- to crate a todo applicatio 


// 1 --list of item that we are going to add 
// 2--- do excerise, perpare breakfast
// 3--- array =[]
// 4--- what data we will store inside array
// title:"excexise"
// completed: false
// id:Date.now()     -->

let   todoItems=[];

// function expression
const addTodo=(text)=> {
  // define the structure of data
  const todo ={
    text, 
    checked:false,
    id: Date.now()
  }

  todoItems.push(todo);
  console.log("Array Items",todoItems);
   renderTodo(todo)
}

function toggleDone(key){

  // findIndex in the key whose key is this key
  const index = todoItems.findIndex(item=>item.id===Number(key))

  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);

}


// capture a submit event in js

const form  = document.querySelector('.js-form');
// Add a submit event listner on form
form.addEventListener('submit',event=>{
  //  avoid relaoding of the page
  event.preventDefault();

  // refrence of input tag
  const input = document.querySelector('.js-todo-input');
  // trim removes the whitespaces
  const text = input.value.trim();
// ===,==
  if(text!==''){
    addTodo(text);
    input.value='';
    input.focus();

  }

})

// function decleration
// showing the data in the UI screen
/*  
1   DO ex    X
2   pre Bre  X
3   DO ex    X


*/
function renderTodo(todo) {
  //  get the refrence to the list
  const list = document.querySelector('.js-todo-list');

  const item = document.querySelector(`[data-key='${todo.id}']`)

    // Use the ternary operator to check if `todo.checked` is true
  // if so, assign 'done' to `isChecked`. Otherwise, assign an empty string
  const isChecked = todo.checked ? 'done': '';
  // Create an `li` element and assign it to `node`
  const node = document.createElement("li");
  // Set the class attribute
  node.setAttribute('class', `todo-item ${isChecked}`);
  // Set the data-key attribute to the id of the todo
  node.setAttribute('data-key', todo.id);
  // Set the contents of the `li` element created above
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    x
    </button>
  `;

  if (item) {
    // replace it
    list.replaceChild(node, item);
  } else {
  // Append the element to the DOM as the last child of
  // the element referenced by the `list` variable
  list.append(node);
  }

}

// select the entire list

const list = document.querySelector('.js-todo-list');

// add a click listner on the list and it's child item
list.addEventListener('click',event=>{

  if(event.target.classList.contains('js-tick')){
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
})