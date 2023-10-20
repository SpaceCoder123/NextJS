import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav>Hello this is a navbar</nav>
        {children}
      </body>
    </html>
  );
}
