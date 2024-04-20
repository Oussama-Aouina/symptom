// a component that displays the summary of the user's input
import Image from "next/image";
export default function Summary({ symptoms, isOpen, setIsOpen }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Symptom Checker</h1>
      <p className="text-xl text-center">
        Check your symptoms and see if you need to see a doctor.
      </p>
      <div className="flex flex-col items-center justify-between p-24">
        <h2 className="text-2xl font-bold">Summary</h2>
        <p>Pain Level: {symptoms.pain}</p>
        <p>Fatigue: {symptoms.fatigue}</p>
        <p>Mood: {symptoms.mood}</p>
        <p>Additional Information: {symptoms.additional}</p>
      </div>
    </main>
  );
}
