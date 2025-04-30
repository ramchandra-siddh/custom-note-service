import React, { useState } from "react";
import { saveNote } from "../utils/storage";

function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      saveNote({ title, content });
      onNoteAdded();
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to save note.");
    } finally {
      setSaving(false);
    }
  };
  //useState + this submit handler: Simple controlled input pattern with state-local handling.

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 ">
      {error && <div className="text-red-500">{error}</div>}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Add a New Note</h2>
        <input
          className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-gray-300 p-3 w-full rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          className={`w-full text-center font-medium px-4 py-3 rounded-md transition-colors ${
            saving
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          disabled={saving}
        >
          {saving ? "Saving..." : "Add Note"}
        </button>
      </div>
    </form>
  );
}

export default AddNote;
