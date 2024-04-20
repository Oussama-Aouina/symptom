import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Symptom Checker</h1>
      <Image src="/symptom.png" alt="logo" width={400} height={400} />
      <p className="text-xl text-center">
        Check your symptoms and see if you need to see a doctor.
      </p>
      // genrate a form where a patient Input Fields: Include input fields for
      entering symptoms such as pain level, fatigue, mood, and any additional
      relevant information.
      <form className="flex flex-col items-center justify-between p-24">
        <label className="text-xl font-bold">Pain Level</label>
        <input
          type="number"
          name="pain"
          id="pain"
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <label className="text-xl font-bold">Fatigue</label>
        <input
          type="number"
          name="fatigue"
          id="fatigue"
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <label className="text-xl font-bold">Mood</label>
        <input
          type="text"
          name="mood"
          id="mood"
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <label className="text-xl font-bold">Additional Information</label>
        <textarea
          name="additional"
          id="additional"
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
          Submit
        </button>
      </form>
    </main>
  );
}
