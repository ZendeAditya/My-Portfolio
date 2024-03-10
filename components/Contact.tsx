"use client";
import React, { FormEvent, SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const Contact = () => {
  const [Subject, setSubject] = useState<string>("");
  const [Message, setMessage] = useState<string>("");

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <main
      id="Contact"
      className="flex items-center justify-center gap-10 flex-col lg:flex-row py-5 w-screen min-h-screen lg:px-80"
    >
      <form onSubmit={handleForm}>
        <div className="text-center p-4  text-3xl">
          <h2>Contact Me!</h2>
        </div>
        <div>
          <Label htmlFor="SubjectId" className="text-lg font-semibold">
            Subject
          </Label>
          <Input
            type="text"
            id="SubjectId"
            placeholder="Type Your Subject"
            className="w-96 outline-none py-4"
            value={Subject}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setSubject(e.currentTarget.value)
            }
          />
        </div>
        <div className="py-5">
          <Label htmlFor="message" className="text-lg font-semibold py-7">
            Your message
          </Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            value={Message}
            onChange={(e: FormEvent<HTMLTextAreaElement>) =>
              setMessage(e.currentTarget.value)
            }
          />
        </div>
        <div>
          <button
            type="submit"
            className="py-3 w-72  border-2 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
