type Todo = {
    title: string;
    desc: string;
    completed: boolean;
}

const todo: Readonly<Todo> = {
    title: 'correr',
    desc: 'saúde etc',
    completed: false
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
    return {...todo, ...fieldsToUpdate}
}


const todo2 = updateTodo(todo, {completed: true})
todo.completed = true;

// PICK
type TodoPreview = Pick<Todo, 'title' | 'desc'>
const todo3: TodoPreview = {
    title: 'correr',
    desc: 'rápido'
}

// OMIT
type TodoOmit = Omit<Todo, 'desc'>
const todo4: TodoOmit = {
    title: 'correr',
    completed: true,
}