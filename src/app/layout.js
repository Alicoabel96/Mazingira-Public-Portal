import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "eMazingira — Environmental Management Information System",
  description:
    "Tanzania's platform for accessing a wide range of environmental data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.variable}>
      <body
        className="font-jost min-h-screen flex flex-col antialiased"
        suppressHydrationWarning
      >
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
