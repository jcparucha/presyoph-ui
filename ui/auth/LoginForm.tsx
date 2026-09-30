"use client";

import { loginUserAction } from "@/actions/auth";
import Form from "@/components/Form";
import FormInputText from "@/components/FormInput";
import FormSubmitButton from "@/components/FormSubmitButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

interface StateValues {
    username: string | null;
    password: string | null;
}

export default function LoginForm() {
    const router = useRouter();
    const [state, formActions] = useActionState(loginUserAction, {
        message: "",
        errors: {},
        values: {
            username: "",
            password: "",
        },
    });

    useEffect(() => {
        if (state?.success) {
            toast.success(state.message);

            // Optional: Redirect to Dashboard
            const timeout = setTimeout(() => {
                toast("Redirecting to dashboard!", {
                    duration: 4000,
                    position: "top-center",
                    icon: "🏃‍♂️‍➡️",
                });
                router.push("/dashboard");
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [state, router]);

    return (
        <div className="m-auto shadow-lg shadow-slate-600 border border-slate-600 rounded-md max-w-sm p-4 space-y-2 bg-slate-800/20">
            <Form
                title="User Login"
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
