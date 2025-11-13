"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

type FormMode = "subscribe" | "support";
type RequestStatus = "idle" | "loading" | "success" | "error";

export default function Subscribe() {
  const [mode, setMode] = useState<FormMode>("subscribe");
  const [status, setStatus] = useState<RequestStatus>("idle");

  const [email, setEmail] = useState("");

  const [fullName, setFullName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetStates = () => {
    setStatus("idle");
    setEmail("");
    setFullName("");
    setSupportEmail("");
    setMessage("");
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("subscribers").insert([{ email }]);

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  const handleSupport = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("support_requests").insert([
      {
        full_name: fullName,
        email: supportEmail,
        message
      }
    ]);

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setStatus("success");
    setFullName("");
    setSupportEmail("");
    setMessage("");
  };

  const isSubscribeMode = mode === "subscribe";

  return (
    <section className="relative py-20 pb-2 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-fixed blur-[1px] sm:blur-[2px] opacity-90"
          style={{
            backgroundImage: "url('/images/backgrond.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-white/35" />
      </div>
      <h2 className="text-3xl font-bold mb-4">
        {isSubscribeMode ? "Get a Free Template from Axora!" : "Need Help? Contact Support"}
      </h2>
      <p className="text-gray-600 mb-6">
        {isSubscribeMode
          ? "Subscribe to the Axora Newsletter and receive an exclusive free template, early access to upcoming releases, and special discounts."
          : "Share your name, email, and message. Our support team will reach out to you as soon as possible."}
      </p>

      <div className="mb-8 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => {
            setMode("subscribe");
            resetStates();
          }}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            isSubscribeMode
              ? "bg-[#0452B0] text-white shadow-[0_10px_25px_rgba(4,82,176,0.3)]"
              : "bg-white text-gray-600 hover:text-[#0452B0] hover:shadow-md"
          }`}
        >
          Subscribe
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("support");
            resetStates();
          }}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            !isSubscribeMode
              ? "bg-[#0452B0] text-white shadow-[0_10px_25px_rgba(4,82,176,0.3)]"
              : "bg-white text-gray-600 hover:text-[#0452B0] hover:shadow-md"
          }`}
        >
          Support
        </button>
      </div>

      {isSubscribeMode ? (
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0452B0]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2 bg-[#0452B0] text-white rounded-md hover:bg-[#034599] transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSupport}
          className="mx-auto flex w-full max-w-xl flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0452B0]"
            />
            <input
              type="email"
              placeholder="Email address"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0452B0]"
            />
          </div>
          <textarea
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0452B0]"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-2 bg-[#0452B0] text-white rounded-md hover:bg-[#034599] transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      )}

      
      <div className="mt-8 flex w-full justify-end pr-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#0452B0] hover:bg-[#034599] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      {status === "success" && (
        <p className="text-green-600 mt-3">
          {isSubscribeMode ? "Subscribed successfully!" : "Message sent successfully!"}
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-3">
          {isSubscribeMode
            ? "This email may already be subscribed."
            : "We could not send your message. Please try again."}
        </p>
      )}
    </section>
  );
}
