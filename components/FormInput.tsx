"use client";

import { useFormContext } from "./Form";

interface FormInputTextProps {
    id: string;
    label: string;
    placeholder: string;
    type: "text" | "password";
    isRequired: boolean;
    // errors?: string[];
}

export default function FormInputText({
    id,
    label,
    placeholder,
    type,
    // errors,
    isRequired = false,
}: FormInputTextProps) {
    const { errors, values } = useFormContext();

    const fieldErrors = errors?.[id];
    const hasError = fieldErrors && fieldErrors.length > 0;

    const fieldColor = hasError
        ? "shadow-red-400 border-red-400"
        : "shadow-slate-400 border-slate-600";

    return (
        <div>
            <label htmlFor={id}>
                {label}
                {isRequired ? "*" : null}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                required={isRequired}
                defaultValue={values?.[id] ?? ""}
                className={`shadow w-full p-2 rounded-md border ${fieldColor}`}
            />
            {hasError &&
                fieldErrors.map((error, index) => (
                    <p
                        key={index}
                        className="text-red-400 text-sm text-center mt-2"
                    >
                        {error}
                    </p>
                ))}
        </div>
    );
}
