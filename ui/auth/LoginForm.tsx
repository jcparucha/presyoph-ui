"use client";

import { loginUserAction } from "@/actions/auth";
import Form from "@/components/Form";
import FormInputText from "@/components/FormInput";
import FormSubmitButton from "@/components/FormSubmitButton";
import Link from "next/link";
import { useActionState } from "react";

interface StateValues {
    username: string | null;
    password: string | null;
}

export default function LoginForm() {
    const [state, formActions] = useActionState(loginUserAction, {
        message: "",
        errors: {},
        values: {
            username: "",
            password: "",
        },
    });

    return (
        <div className="m-auto shadow-lg shadow-slate-600 border border-slate-600 rounded-md max-w-sm p-4 space-y-2 bg-slate-800/20">
            <Form
                title="Administrative Login"
                errors={state?.errors}
                values={
                    state?.values as Record<keyof StateValues, string | null>
                }
                action={formActions}
            >
                <FormInputText
                    id="username"
                    label="Username"
                    placeholder="Insert username"
                    type="text"
                    isRequired
                />
                <FormInputText
                    id="password"
                    label="Password"
                    placeholder="Insert password"
                    type="password"
                    isRequired
                />
                <FormSubmitButton>Login</FormSubmitButton>
                <Link
                    href="/register"
                    className="text-center text-blue-400 w-full block"
                >
                    Create an account
                </Link>
            </Form>
        </div>
    );
}
