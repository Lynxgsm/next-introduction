import Topbar from "@/components/Topbar";
import "./globals.css";

export const metadata = {
  title: "E-Vidy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-800 text-white">
        <Topbar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
