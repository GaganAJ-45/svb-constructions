import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_ID = "mwvzzvde";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { text: "+91 9035911632 (Sachin G S)", href: "tel:+919035911632" },
      { text: "+91 63616 38075 (Sanjay K S)", href: "tel:+916361638075" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [{ text: "svbrconstructions@gmail.com", href: "mailto:svbrconstructions@gmail.com" }],
  },
  {
    icon: MapPin,
    label: "Address",
    lines: [{ text: "Shree Veerabhadreshwara Constructions, Gandhi Rd, Nyamati, Karnataka 577223", href: "https://www.google.com/maps/search/?api=1&query=Shree+Veerabhadreshwara+Constructions%2C+Gandhi+Rd%2C+Nyamati%2C+Karnataka+577223" }],
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.ok) { setStatus("success"); reset(); setTimeout(() => setStatus("idle"), 7000); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass = (hasError) =>
    `w-full bg-white border ${hasError ? "border-red-400" : "border-[#E2E8F0]"} rounded-lg px-4 py-3 text-[#0F172A] text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/20 transition-all duration-200`;

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.3em] mb-4">Reach Out</p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] mb-5">Get In Touch</h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            Let's discuss your next construction project. Our team is ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sora font-bold text-2xl text-[#001F3F] mb-8">
              Let's Build Something Amazing
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} data-testid={`contact-${info.label.toLowerCase()}`} className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#C8A96B]/10 border border-[#C8A96B]/20 flex items-center justify-center">
                      <Icon size={18} color="#C8A96B" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-xs uppercase tracking-wider mb-1">{info.label}</p>
                      {info.lines.map((line) => (
                        <a
                          key={line.text}
                          href={line.href}
                          className="block text-[#0F172A] text-sm font-medium hover:text-[#C8A96B] transition-colors duration-200"
                        >
                          {line.text}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm" data-testid="contact-map">
              <iframe
                title="Shree Veerabhadreshwara Constructions location on Google Maps"
                src="https://maps.google.com/maps?q=Shree+Veerabhadreshwara+Constructions%2C+Gandhi+Rd%2C+Nyamati%2C+Karnataka+577223&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8"
          >
            <h3 className="font-sora font-bold text-xl text-[#001F3F] mb-6">Send Us a Message</h3>

            {/* Success / Error banners */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="contact-success-msg"
                className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 text-sm"
              >
                <CheckCircle size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-green-700 mt-0.5">We'll contact you within 24 hours.</p>
                </div>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="contact-error-msg"
                className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 text-sm"
              >
                <AlertCircle size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Something went wrong.</p>
                  <p className="text-red-700 mt-0.5">Please try again or call us directly.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    data-testid="contact-input-name"
                    {...register("name")}
                    className={inputClass(errors.name)}
                    placeholder="Your Full Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Email *</label>
                  <input
                    data-testid="contact-input-email"
                    type="email"
                    {...register("email")}
                    className={inputClass(errors.email)}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Phone *</label>
                  <input
                    data-testid="contact-input-phone"
                    type="tel"
                    {...register("phone")}
                    className={inputClass(errors.phone)}
                    placeholder="+91 XXXXXXXXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Project Type *</label>
                  <select
                    data-testid="contact-select-project-type"
                    {...register("projectType")}
                    className={inputClass(errors.projectType)}
                  >
                    <option value="">Select project type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Project Budget</label>
                <select
                  data-testid="contact-select-budget"
                  {...register("budget")}
                  className={inputClass(false)}
                >
                  <option value="">Select budget range (optional)</option>
                  <option value="Less than 10 Lakh">&lt; 10 Lakh</option>
                  <option value="10-25 Lakh">10–25 Lakh</option>
                  <option value="25-50 Lakh">25–50 Lakh</option>
                  <option value="50+ Lakh">50+ Lakh</option>
                  <option value="Not Decided">Not Decided</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Message *</label>
                <textarea
                  data-testid="contact-textarea-message"
                  rows={5}
                  {...register("message")}
                  className={inputClass(errors.message)}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>


              <motion.button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={status === "submitting"}
                whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                className="w-full bg-[#C8A96B] text-[#001F3F] py-4 font-semibold text-sm uppercase tracking-widest rounded-lg hover:bg-[#b8974f] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96B]/30"
              >
                {status === "submitting" ? "Sending Message..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
