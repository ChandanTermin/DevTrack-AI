"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.access_token);
      alert("Login Successful!");
      router.push("/dashboard");
    } else {
      alert(data.detail);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl bg-slate-900 p-8"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg bg-slate-800 p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-lg bg-slate-800 p-3"
        />

        <button
          className="w-full rounded-lg bg-violet-600 p-3 font-bold hover:bg-violet-700"
        >
          Login
        </button>
      </form>
    </main>
  );
}