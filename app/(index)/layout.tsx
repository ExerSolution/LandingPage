import "../css/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <main className="bg-white">
    {children}
   </main>
  )
}
  