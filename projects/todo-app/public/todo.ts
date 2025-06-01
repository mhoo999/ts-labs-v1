const dateTitle = document.getElementById("date-title");

const getDate = (): string => {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekday = ['일', '일', '일', '일', '일', '일', '일'][date.getDay()];

    return `${year}. ${month}. ${day} (${weekday})`;

}

dateTitle!.textContent = getDate();

type Todo = {
    checkBox: HTMLInputElement,
    title: HTMLSpanElement,
    editBtn: HTMLButtonElement,
    deleteBtn: HTMLButtonElement
}

const taskCount = document.getElementById("task-count");
const todoList = document.getElementById("todo-list");
const addForm = document.getElementById("add-form") as HTMLFormElement;
const addInput = document.getElementById("add-input") as HTMLInputElement;

let todoCount = 0;
setTaskCount();

addForm?.addEventListener("submit", addTodo);

function addTodo(event:Event) {
    event.preventDefault();

    const todoText = addInput.value.trim();
    
    const newTodo = createTodoItem(todoText);
    todoList?.appendChild(newTodo);

    addInput.value = "";
}

function setTaskCount() {
    taskCount!.textContent = `${todoCount} tasks left`;
}

function createTodoItem(text: string): HTMLLIElement {
    todoCount++;
    setTaskCount();

    const listItem = document.createElement("LI") as HTMLLIElement;
    listItem.className = "todo-item";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    
    const title = document.createElement("span");
    title.className = "todo-title";
    title.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.1 2.3l2.6 2.6-9.1 9.1-2.7.1.1-2.7 9.1-9.1z"></path></svg>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="13" y2="13"></line><line x1="13" y1="4" x2="4" y2="13"></line></svg>`;

    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            title.style.textDecoration = "line-through";
            todoCount--;
        } else {
            title.style.textDecoration = "none";
            todoCount++;
        }
        setTaskCount();
    });
    editBtn.addEventListener("click", () => {
        checkBox.style.visibility = "hidden";
        editBtn.style.visibility = "hidden";
        deleteBtn.style.visibility = "hidden";

        const currentText = title.textContent || "";
        
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = currentText;
        editInput.className = "edit-input";
        
        title.replaceWith(editInput);
        editInput.focus();
        editInput.select();
        
        const finishEdit = () => {
            const newText = editInput.value.trim();
            if (newText) {
                title.textContent = newText;
            } else {
                title.textContent = currentText;
            }
            editInput.replaceWith(title);

            checkBox.style.visibility = "visible";
            editBtn.style.visibility = "visible";
            deleteBtn.style.visibility = "visible";
        };
        
        editInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                finishEdit();
            } else if (e.key === "Escape") {
                title.textContent = currentText;
                editInput.replaceWith(title);
                
                checkBox.style.visibility = "visible";
                editBtn.style.visibility = "visible";
                deleteBtn.style.visibility = "visible";
            }
        });
        
        editInput.addEventListener("blur", finishEdit);
    });
    deleteBtn.addEventListener("click", () => {
        if (!checkBox.checked) {
            todoCount--;
            setTaskCount();
        }

        listItem.remove();
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(title);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    return listItem;
}