"use server";

import { redirect } from "next/navigation";

export async function loginUserAction(
    initialState: object,
    formData: FormData,
) {
    const payload = {
        username: formData.get("username"),
        password: formData.get("password"),
    };

    try {
        const response = await fetch(`${process.env.API_URL}/v1/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                message: data.message,
                errors: data.errors,
                values: payload,
            };
        }

        // TODO add token handling
        // Set HTTP-only cookie if Laravel returns a token
        // if (data.token) {
        // const cookieStore = await cookies();
        // cookieStore.set("auth_token", data.token, {
        //   httpOnly: true,
        //   secure: process.env.NODE_ENV === "production",
        //   sameSite: "lax",
        //   path: "/",
        // maxAge: 60 * 60 * 24 * 7, // Optional: 7 days expiration in seconds
        // });
        // }
    } catch (error: any) {
        console.error("LOGIN_ACTION_ERROR:", error);

        return {
            message: error?.message ?? "Something went wrong",
            errors: {
                system: [
                    `ERROR: ${error?.cause?.message ?? "Something went wrong"}`,
                ],
            },
        };
    }

    redirect("/dashboard");
}
