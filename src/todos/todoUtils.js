let idCounter = 0;

/**
 * Create a new todo with a unique id
 */
export function createTodo(text) {
    return {
        text,
        id: idCounter++,
        completed: false
    }
}
