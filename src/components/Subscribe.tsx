"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("subscribers").insert([{ email }]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="bg-gray-50 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Get a Free Template from Axora!</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to the Axora Newsletter and receive an exclusive free template, early access to upcoming releases, and special discounts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-3">Subscribed successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-3">
          This email may already be subscribed.
        </p>
      )}
    </section>
  );
}
