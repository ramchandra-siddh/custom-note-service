import { useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

function App() {
  const [view, setView] = useState("add");
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => {
    setRefresh(!refresh);
    setView("view");
  };

  //this nav approach for simplicity: Minimal toggle via state avoids routing complexity.
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <nav className="flex justify-center gap-6 mb-6 ">
        <button
          onClick={() => setView("add")}
          className={`px-5 py-2 rounded-lg font-medium transition-colors ${
            view === "add"
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Add Note
        </button>
        <button
          onClick={() => setView("view")}
          className={`px-5 py-2 rounded-lg font-medium transition-colors ${
            view === "view"
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          View Notes
        </button>
      </nav>

      {view === "add" ? (
        <AddNote onNoteAdded={handleNoteAdded} />
      ) : (
        <NotesList key={refresh} />
      )}
    </div>
  );
}

export default App;
