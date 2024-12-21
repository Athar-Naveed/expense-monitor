import type {Metadata} from "next";
import "./styles.css";
import React from "react";
import Sidebar from "./components/global/Sidebar";
import ReactQueryProvider from "./components/global/ReactQuery";
export const metadata: Metadata = {
  title: "Project Monitor & Expense Monitor",
  description:
    "Project Monitor is an Application to monitor our collaborative ongoing projects, there are 2 roles one is of the project giver and the other who has done the project. You just have to login.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 block md:flex gap-5">
        <ReactQueryProvider>
          <Sidebar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
