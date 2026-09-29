"use client";

import React, { createContext, useContext } from "react";

interface FormProps {
    children: React.ReactNode;
    title: string; // note sure what to put here
    errors?: Record<string, string[]> | undefined;
    values?: Record<string, string | null> | undefined;
    action: (payload: FormData) => void;
    // onSubmit: (e: SubmitEvent<HTMLFormElement>) => Promise<void>;
}

const FormContext = createContext<{
    errors?: Record<string, string[]>;
    values?: Record<string, string | null>;
}>({});

export const useFormContext = () => useContext(FormContext);

export default function Form({
    children,
    errors,
    values,
    title,
    action,
}: FormProps) {
    return (
        <FormContext value={{ errors, values }}>
            <form action={action} className="space-y-4">
                <h1 className="font-extralight text-center text-2xl mb-4">
                    {title}
                </h1>
                {errors &&
                    errors["system"]?.map((error, index) => (
                        <p
                            key={index}
                            className="bg-red-400/8 text-red-400 text-center py-2 px-2 rounded-md"
                        >
                            {error}
                        </p>
                    ))}
                {children}
            </form>
        </FormContext>
    );
}
