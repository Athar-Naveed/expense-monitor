import type {Metadata} from "next";

import "./globals.css";
import React from "react";
import {Toaster} from "react-hot-toast";
export const metadata: Metadata = {
  title: "Project Monitor & Expense Monitor",
  description:
    "Project Monitor is an Application to monitor our collaborative ongoing projects, there are 2 roles one is of the project giver and the other who has done the project. You just have to login.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
