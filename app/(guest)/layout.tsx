import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="p-4 w-full h-full">
      <Link href="/" className="text-slate-500">
        Back to home
      </Link>

      <div className="mt-16">{children}</div>
    </section>
  );
}
