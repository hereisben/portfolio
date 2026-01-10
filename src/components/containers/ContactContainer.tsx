"use client";

import { useMemo, useRef, useState } from "react";
import SelectBtn from "../buttons/SelectBtn";
import TextInput from "../typo/TextInput";

export default function ContactContainer() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [selected, setSelected] = useState<string>("Fullstack Dev");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const isValidName =
    /^[a-zA-ZÀ-ỹ\s]+$/.test(name.trim()) &&
    name.length >= 2 &&
    name.length <= 40 &&
    name.trim().length >= 2;
  const isValidEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    email.trim().length <= 254;
  const isValidMessage = message.trim().length <= 500;
  const errorClass = "text-sm text-red-400/80 absolute -bottom-7 right-0";
  const canSend = useMemo(() => {
    return (
      selected?.trim().length > 0 &&
      name?.trim().length > 0 &&
      email?.trim().length > 0 &&
      message?.trim().length > 0
    );
  }, [selected, name, email, message]);
  return (
    <div className="bg-[#121212] p-8 md:p-10 rounded-3xl border border-white/5">
      <h3 className="text-xl font-bold mb-6 text-white">
        I am interested in ...
      </h3>
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          "Web Design",
          "Fullstack Dev",
          "Interaction",
          "Game Dev",
          "Other",
        ].map((item) => (
          <SelectBtn
            key={item}
            label={item}
            onClick={() => setSelected(item)}
            isSelected={selected === item}
          />
        ))}
      </div>
      <form noValidate action="" className="space-y-6" id="contact-form">
        <input
          type="hidden"
          name="project-type"
          id="project-type"
          value={selected ? selected : ""}
        />
        <div className="relative">
          <TextInput
            type="text"
            placeHolder="Your Name"
            name="name"
            required={true}
            value={name}
            setState={setName}
            pattern="^[a-zA-ZÀ-ỹ\s]+$"
          />
          {!isValidName && name.length > 0 && (
            <p className={`${errorClass}`}>
              Name should be 2–40 characters and contain letters only.
            </p>
          )}
        </div>
        <div className="relative">
          <TextInput
            type="email"
            placeHolder="Email"
            name="email"
            value={email}
            setState={setEmail}
            required={true}
          />
          {!isValidEmail && email.length > 0 && (
            <p className={`${errorClass}`}>
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div className="relative">
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Message"
            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-primary focus:outline-none transition-colors placeholder:text-neutral-600"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p className="text-xs text-neutral-400 text-right absolute right-3 bottom-3 opacity-50">
            {message.trim().length} / 500
          </p>
        </div>
        <input
          ref={inputRef}
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setFile(file);
          }}
          type="file"
          name="attached-file"
          id="attached-file"
          hidden
        />
        <p className="w-full bg-transparent text-neutral-600 inline-flex justify-end">
          {file ? file.name : "No Attachment"}
        </p>
      </form>
      <div className="flex justify-end pt-4 gap-3">
        <button
          onClick={() => inputRef.current?.click()}
          type="button"
          className="inline-flex h-11 items-center justify-center text-sm duration-200 active:scale-95 disabled:opacity-50 shadow-lg shadow-blue-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 bg-white text-black hover:bg-primary hover:scale-105 px-8 py-3 rounded-xl font-bold transition-all cursor-pointer"
        >
          {file ? "Change File" : "Attach File"}
        </button>
        <button
          disabled={
            !canSend || !isValidName || !isValidEmail || !isValidMessage
          }
          form="contact-form"
          type="submit"
          className="inline-flex h-11 items-center justify-center text-sm duration-200 active:scale-95 bg-primary disabled:opacity-20 shadow-lg shadow-blue-500/25 disabled:bg-white text-black active:bg-primary px-8 py-3 rounded-xl font-bold transition-all active:cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
