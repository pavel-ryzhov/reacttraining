import Imm from 'immutable';

let idCounter = 0;

/**
 * Create a new todo with a unique id
 */

export function createTodo(text) {
    return Imm.Map({
        text,
        id: idCounter++,
        completed: false
    });
}
