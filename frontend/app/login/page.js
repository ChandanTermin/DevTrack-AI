"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.replace("/dashboard");
    }
  }, [router]);

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

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

      if (!response.ok) {
        alert(data.detail || "Login failed.");
        return;
      }

      localStorage.setItem("token", data.access_token);

      router.replace("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B] px-6 text-white">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#111827] p-8"
      >

        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          Sign in to continue to DevTrack AI
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 outline-none transition focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 outline-none transition focus:border-blue-500"
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 p-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

      </form>

    </main>
  );
}