export const metadata = {
  title: "Zfx - Portfolio ",
  description: "Software Engineering student crafting crisp, user-centric apps.",
};

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="gradient-blue">
        {children}
      </body>
    </html>
  );
}
