"use client";
import Image from "next/image";
import { useState } from "react";
import Summary from "./Summary";
export default function Home() {
  // a state that will hold the user's input
  const [symptoms, setSymptoms] = useState({
    pain: 0,
    fatigue: 0,
    mood: "",
    additional: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  // a function that will update the state when the user types
  const handleChange = (e) => {
    setSymptoms({ ...symptoms, [e.target.name]: e.target.value });
    console.log(symptoms);
  };
  // a function that will submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the symptoms
    console.log(symptoms);
    setIsOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Symptom Checker</h1>
      <Image
        src="/symptom.png"
        alt="logo"
        width={200}
        height={200}
        className="p-5"
      />
      <p className="text-xl text-center">
        Check your symptoms and see if you need to see a doctor.
      </p>
      entering symptoms such as pain level, fatigue, mood, and any additional
      relevant information.
      <form className="flex flex-col items-center justify-between p-24">
        <label className="text-xl font-bold">Pain Level</label>
        <input
          type="number"
          name="pain"
          id="pain"
          className="border-2 border-gray-200 rounded-lg p-2"
          onChange={handleChange}
        />
        <label className="text-xl font-bold">Fatigue</label>
        <input
          type="number"
          name="fatigue"
          id="fatigue"
          className="border-2 border-gray-200 rounded-lg p-2"
          onChange={handleChange}
        />
        <label className="text-xl font-bold">Mood</label>
        <input
          type="text"
          name="mood"
          id="mood"
          className="border-2 border-gray-200 rounded-lg p-2"
          onChange={handleChange}
        />
        <label className="text-xl font-bold">Additional Information</label>
        <textarea
          name="additional"
          id="additional"
          className="border-2 border-gray-200 rounded-lg p-2"
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg mt-4"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {isOpen && (
        <Summary symptoms={symptoms} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </main>
  );
}
