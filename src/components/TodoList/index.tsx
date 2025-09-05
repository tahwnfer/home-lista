import { useContext } from 'react';
import { themeConfig } from '../contexts/theme';
import { ThemeContext } from '../contexts/ThemeContext'
import type { Todo } from '../../hooks/useTdo';
import IconCheck from '../../../public/images/icon-check.svg'

export interface TodoListProps {
    todoList: Todo[];
    toggleTodoCompleted: (id: number) => void;
    setFilter: (filter: "all" | "active" | "completed") => void;
    filter: "all" | "active" | "completed";
    clearCompleted: () => void;
}


const TodoList = ({ todoList, toggleTodoCompleted, setFilter, filter, clearCompleted }: TodoListProps) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`${themeConfig[theme].todo.backgroundColor}  rounded-md`}>
                <ul>

                    {todoList.map((todo) => (
                        <li key={todo.id}
                            className={` p-6 boder-b ${themeConfig[theme].todo.boderColor}`}>

                            <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]">

                                    <button
                                        onClick={() => toggleTodoCompleted(todo.id)}
                                        className={`w-full h-full  border ${themeConfig[theme].todo.boderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor}
                                ${todo.completed ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]' : ""}`}>

                                        {todo.completed && <img src={IconCheck} alt="icone marcado" className='h-4 w-8 m-auto' />}

                                    </button>
                                </span>
                                <p
                                    className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}>
                                    {todo.text}
                                </p>
                            </div>

                        </li>
                    ))}
                </ul>


                <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor} cursor-pointer `}>

                    <p>{todoList.length} items total </p>

                    <div className="hidden sm:flex gap-4">

                        <button
                            onClick={() => setFilter("all")}
                            className={`${filter === "all" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}>all

                        </button>

                        <button
                            onClick={() => setFilter("active")}
                            className={`${filter === "active" ? " text-bright-blue" : ""} cursor-pointer
                            ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}>active

                        </button>

                        <button
                            onClick={() => setFilter("completed")}
                            className={`${filter === "completed" ? " text-bright-blue" : ""}  cursor-pointer 
                            ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}>completed

                        </button>

                    </div>
                    <button
                    onClick={clearCompleted}
                    className={`cursor-pointer
                        ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"

                        }`}
                    >
                        clear completed
                    </button>
                </div >
            </div>

            <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 py-4 mt-4 rounded-md sm:hidden `}>
                <button
                    onClick={() => setFilter("all")}
                    className={`${filter === "all" ? "text-bright-blue" : ""}  cursor-pointer 
                    ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}>all

                </button>

                <button
                    onClick={() => setFilter("active")}
                    className={`${filter === "active" ? " text-bright-blue" : ""}  cursor-pointer 
                    ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}>active
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={`${filter === "completed" ? "text-bright-blue" : ""}   cursor-pointer
                    ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}>completed
                </button>
            </div>

        </>
    );
};

export default TodoList;