import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
}


export function Input({ title, ...rest }: InputProps) {
    return (
        <label
            className="
            w-full
            flex flex-col text-gray-300
            font-medium gap-2"
        >
            {title}
            <input
                className="
                    rounded-md p-2
                    text-gray-900
                    placeholder:text-gray-500
                    
                "
                {...rest}
            />
        </label>
    )
}