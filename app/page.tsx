import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mb-4 border-b border-b-slate-800 p-8 flex flex-row justify-end space-x-4">
        <nav className="text-slate-500">
          <Link href="/register">Create account</Link>
        </nav>
        <nav className="text-blue-400">
          <Link href="/login">Login</Link>
        </nav>
      </header>

      <section className="space-y-4">
        <div>
          <h1>Presyo PH</h1>
          <p>A community-based price comparison and budgeting tool.</p>
        </div>

        <div>
          <Link href="/about-us" className="text-slate-500 text-sm">
            About Us
          </Link>
        </div>
      </section>

      <footer className="w-full absolute bottom-0 mt-4 p-8 border-t border-t-slate-800">
        <h1>This is a footer</h1>
      </footer>
    </>
  );
}
