import Spinner from "./Spinner";

export default function Button({
    children,
    type = "button",
    variant = "primary",
    disabled = false,
}: {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    variant?: "primary";
    disabled: boolean;
}) {
    const vColor =
        variant === "primary" ? "border-blue-400 bg-blue-500/80" : "";

    const disabledColor = "border-blue-400/60 bg-blue-500/60 text-white/80";

    return (
        <button
            type={type}
            className={`rounded-md border w-full py-2 ${disabled ? disabledColor : vColor}`}
            disabled={disabled}
        >
            <div className="flex flex-row justify-center items-center">
                {disabled && <Spinner />}
                {children}
            </div>
        </button>
    );
}
