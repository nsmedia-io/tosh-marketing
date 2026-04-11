import { useState } from "react";
import { contactWorkerEndpoint, tenantId } from "@/contact.config";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("loading");

    try {
      const payload = {
        text: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          timestamp: new Date().toISOString(),
        },
      };

      const response = await fetch(contactWorkerEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(tenantId && { "X-Client-Id": tenantId }),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.statusText}`);
      }

      setSubmitStatus("success");
      resetForm();
      setTimeout(() => setSubmitStatus("idle"), 10000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-divider bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-secondary/40 focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-text-secondary">
            Name <span className="text-accent-purple">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-text-secondary">
            Email <span className="text-accent-purple">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-text-secondary">
          Phone <span className="text-text-secondary/40">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-text-secondary">
          Message <span className="text-accent-purple">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="What's on your mind?"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="w-full rounded-full bg-accent-green px-10 py-3.5 text-sm font-semibold tracking-[0.15em] text-text-heading transition-all hover:shadow-[0_0_20px_rgba(45,106,79,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitStatus === "loading" ? "SENDING..." : "SEND MESSAGE"}
      </button>

      {submitStatus === "success" && (
        <p className="text-center text-sm text-accent-green">
          Thanks! Your message was sent. I'll be in touch soon.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
