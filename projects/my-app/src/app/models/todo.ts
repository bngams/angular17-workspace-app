import { ApiResponse } from "./api-response";

/**
 * Common model to map all /!\ can be used to map two todos models
 * https://dummyjson.com/todos
 * https://jsonplaceholder.typicode.com/todos
 */
export type CommonTodo = {
    id?: number;
    userId?: number;
    title?: string;
    todo?: string;
} 

/**
 * POO and inheritance approch (more robust ...)
 * => serialization / polymorphisme
 */
export type BaseTodo = {
    id: number;
    userId: number;
} 

export type DummyTodo = BaseTodo & { 
    todo: string;
} 

export type ServerTodo = BaseTodo & { 
    title: string;
} 

/**
 * Used with dummyjson service api responses
 */
export type DummyTodosApiResponse = ApiResponse & {
    todos: DummyTodo[]; 
} 