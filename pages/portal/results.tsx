// pages/portal/results.tsx
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { db } from "../../firebase/config";
import { collection, addDoc, query, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

type Result = {
  id?: string;
  studentId: string;
  studentName?: string;
  subject: string;
  score: number;
  maxScore: number;
  term: string;
  session: string;
  teacherId?: string;
  comment?: string;
};

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [form, setForm] = useState<Result>({
    studentId: "",
    studentName: "",
    subject: "",
    score: 0,
    maxScore: 100,
    term: "Term 1",
    session: "2025/2026",
    comment: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "results"));
    const unsub = onSnapshot(q, (snap) => {
      const arr: Result[] = [];
      snap.forEach((d) => arr.push({ id: d.id, ...(d.data() as any) }));
      setResults(arr);
    });
    return () => unsub();
  }, []);

  const createOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateDoc(doc(db, "results", editingId), form as any);
      setEditingId(null);
    } else {
      await addDoc(collection(db, "results"), form as any);
    }
    setForm({
      studentId: "",
      studentName: "",
      subject: "",
      score: 0,
      maxScore: 100,
      term: "Term 1",
      session: "2025/2026",
      comment: "",
    });
  };

  const edit = (r: Result) => {
    setForm(r);
    setEditingId(r.id || null);
  };

  const remove = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this result?")) return;
    await deleteDoc(doc(db, "results", id));
  };

  const exportExcel = () => {
    const sheet = XLSX.utils.json_to_sheet(results.map((r) => ({
      studentId: r.studentId, studentName: r.studentName, subject: r.subject, score: r.score, maxScore: r.maxScore, term: r.term, session: r.session, comment: r.comment
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, "results");
    XLSX.writeFile(wb, `results-${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  return (
    <>
      <Navbar />
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-wine">Student Results</h2>
            <div className="space-x-2">
              <button onClick={exportExcel} className="bg-green-700 text-white px-4 py-2 rounded">Export XLSX</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Form */}
            <form onSubmit={createOrUpdate} className="bg-green-50 p-6 rounded shadow">
              <div className="mb-3">
                <label className="block text-sm font-medium">Student ID</label>
                <input value={form.studentId} onChange={(e)=>setForm({...form, studentId:e.target.value})} className="w-full p-2 rounded border" />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Student Name</label>
                <input value={form.studentName} onChange={(e)=>setForm({...form, studentName:e.target.value})} className="w-full p-2 rounded border" />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Subject</label>
                <input value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} className="w-full p-2 rounded border" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm">Score</label>
                  <input type="number" value={form.score} onChange={(e)=>setForm({...form, score: Number(e.target.value)})} className="w-full p-2 rounded border" />
                </div>
                <div>
                  <label className="block text-sm">Max Score</label>
                  <input type="number" value={form.maxScore} onChange={(e)=>setForm({...form, maxScore: Number(e.target.value)})} className="w-full p-2 rounded border" />
                </div>
              </div>

              <div className="mt-3">
                <label>Term</label>
                <select value={form.term} onChange={(e)=>setForm({...form, term:e.target.value})} className="w-full p-2 rounded border">
                  <option>Term 1</option><option>Term 2</option><option>Term 3</option>
                </select>
              </div>

              <div className="mt-3">
                <label>Session</label>
                <input value={form.session} onChange={(e)=>setForm({...form, session:e.target.value})} className="w-full p-2 rounded border" />
              </div>

              <div className="mt-3">
                <label>Comment</label>
                <input value={form.comment} onChange={(e)=>setForm({...form, comment:e.target.value})} className="w-full p-2 rounded border" />
              </div>

              <button type="submit" className="mt-4 bg-wine text-white px-4 py-2 rounded">
                {editingId ? "Update Result" : "Add Result"}
              </button>
            </form>

            {/* List */}
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-semibold mb-3">Results List ({results.length})</h3>
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r.id} className="p-3 border rounded flex justify-between items-start">
                    <div>
                      <div className="font-bold">{r.studentName || r.studentId} — <span className="text-sm text-gray-600">{r.subject}</span></div>
                      <div className="text-sm text-gray-700">{r.score}/{r.maxScore} • {r.term} • {r.session}</div>
                      {r.comment && <div className="text-sm mt-1 text-gray-600">Teacher: {r.comment}</div>}
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600" onClick={()=>edit(r)}>Edit</button>
                      <button className="text-red-600" onClick={()=>remove(r.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
