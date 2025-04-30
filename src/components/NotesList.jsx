import React, { useEffect, useState } from "react";
import { getNotes } from "../utils/storage";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);
  //useEffect to sync storage → state: Read once on mount, since notes are persisted in localStorage.
  return (
    <div className="p-4 space-y-4">
      {notes.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          <p className="text-xl font-medium">📝 No notes yet</p>
          <p className="text-sm mt-2">Start by creating your first note!</p>
        </div>
      )}
      {notes.map((note, idx) => (
        <div key={idx} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{note.title}</h2>
          <p className="text-gray-700 ">{note.content} ...</p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
