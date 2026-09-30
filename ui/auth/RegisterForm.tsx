"use client";

import { registerUserAction } from "@/actions/auth";
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
    password_confirmation: string | null;
}

export default function RegisterForm() {
    const router = useRouter();
    const [state, formActions] = useActionState(registerUserAction, {
        message: "",
        errors: {},
        values: {
            username: "",
            password: "",
            password_confirmation: "",
        },
    });

    useEffect(() => {
        if (state?.success) {
            toast.success("Registered successfully!");

            // Optional: Redirect to Dashboard
            const timeout = setTimeout(() => {
                toast("Redirecting to login!", {
                    icon: "🏃‍♂️‍➡️",
                    duration: 4000,
                    position: "top-center",
                });
                router.push("/login");
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [state, router]);

    return (
        <div className="m-auto shadow-lg shadow-slate-600 border border-slate-600 rounded-md max-w-sm p-4 space-y-2 bg-slate-800/20">
            <Form
                title="Registration"
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
                <FormInputText
                    id="password_confirmation"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    type="password"
                    isRequired
                />
                <FormSubmitButton>Register</FormSubmitButton>
                <Link
                    href="/login"
                    className="text-center text-blue-400 w-full block"
                >
                    Already have an account?
                </Link>
            </Form>
        </div>
    );
}
