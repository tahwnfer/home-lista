import { useContext, type FormEvent } from 'react';
import { themeConfig } from '../contexts/theme'
import { ThemeContext } from '../contexts/ThemeProvaider'

interface TodoInputProps {
    addTodo: (event: FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({addTodo}:TodoInputProps) => {
    const { theme } = useContext(ThemeContext) as { theme: keyof typeof themeConfig };

    return (
        <form className=" relative mb-10 " onSubmit={addTodo}>
            <span
                className={`absolute w-6 h-6 border ${themeConfig[theme].todo.boderColor} top-1/2 transform -translate-1/2 rounded-full left-6`}></span>

            <input
                type="text"
                placeholder="criando novo todo" name="todo"
                className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg`}
            />
        </form>
    );
};

export default TodoForm;