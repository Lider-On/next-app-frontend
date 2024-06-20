'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect (() => {
    if (user !== "" && password !== "") {
      setDisable(false)
    } else (
      setDisable(true)
    )
  }, [user, password])

  return (
    <form className="h-96 w-96 flex flex-col justify-center items-center bg-white rounded-2xl p-5 gap-5 shadow-md" autoComplete="new-password">
      <h1 className="font-bold text-4xl text-justify mb-4">
        PKBOW<br></br> CARDS
      </h1>

      <input
        type="text" 
        placeholder="user" 
        className="border-b-2 h-10 p-3"
        onChange={(e) => setUser(e.target.value)}
        
      />
      <input
        type="password"
        placeholder="password"
        className="border-b-2 h-10 p-3"
        onChange={(e) => setPassword(e.target.value)} 
      />
      <div className="flex flex-col gap-3 justify-center items-center">
        <button className="w-40 h-12 bg-blue-500 disabled:opacity-75 rounded-2xl font-bold text-white text-2xl" disabled={disable}>
          LOGIN
        </button>

        <p className="hover:underline">
          <Link href="/signup">or create an account</Link>
        </p>
      </div>
    </form>
  );
}
