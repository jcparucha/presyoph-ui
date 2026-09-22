import Link from "next/link";

export default function Register() {
  return (
    <div className="m-auto shadow-lg shadow-slate-600 border border-slate-600 rounded-md max-w-sm p-4 space-y-2 bg-slate-800/20">
      <h1 className="font-extralight text-center text-2xl mb-4">
        Registration
      </h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Insert Username"
            className="shadow shadow-slate-400 w-full p-2 rounded-md border border-slate-600"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Insert password"
            className="shadow shadow-slate-400 w-full p-2 rounded-md border border-slate-600"
          />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm password"
            className="shadow shadow-slate-400 w-full p-2 rounded-md border border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="rounded-md  border border-blue-400 bg-blue-500/80 w-full py-2"
        >
          Register
        </button>
        <Link href="/login" className="text-center text-blue-400 w-full block">
          Already have an account?
        </Link>
      </form>
    </div>
  );
}
