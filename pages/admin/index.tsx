"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { db } from "../../firebase/config";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import * as XLSX from "xlsx";

import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const router = useRouter();

  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // PROTECT ROUTE — Only logged-in admins can access
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login"); // redirect if not logged in
      }
    });
  }, []);

  // Fetch applications from Firestore
  const fetchApplications = async () => {
    setLoading(true);

    const querySnapshot = await getDocs(collection(db, "applications"));
    const list: any[] = [];

    querySnapshot.forEach((docSnap) => {
      list.push({ id: docSnap.id, ...docSnap.data() });
    });

    setApplications(list.reverse()); // latest first
    setLoading(false);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Delete Application
  const deleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    await deleteDoc(doc(db, "applications", id));
    fetchApplications();
  };

  // Approve or Reject Application
  const updateStatus = async (id: string, status: string) => {
    await updateDoc(doc(db, "applications", id), { status });
    fetchApplications();
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(applications);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");
    XLSX.writeFile(workbook, "biskay-applications.xlsx");
  };

  return (
    <>
      <Navbar />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white p-8 shadow-xl rounded-2xl">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-green-700">
              Admin Dashboard — Applications
            </h1>

            <button
              onClick={exportToExcel}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800"
            >
              Export Excel
            </button>
          </div>

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search by name, class or email..."
            className="w-full p-3 border rounded-lg mb-6"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />

          {loading ? (
            <p className="text-center text-lg">Loading applications...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Class</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Passport</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {applications
                    .filter((a) =>
                      JSON.stringify(a).toLowerCase().includes(search)
                    )
                    .map((app) => (
                      <tr key={app.id} className="border-b">
                        <td className="p-3">{app.fullName}</td>
                        <td className="p-3">{app.classApplying}</td>
                        <td className="p-3">{app.email}</td>
                        <td className="p-3">{app.phone}</td>

                        <td className="p-3">
                          <a
                            href={app.passport}
                            target="_blank"
                            className="text-blue-600 underline"
                          >
                            View
                          </a>
                        </td>

                        <td className="p-3 font-bold">
                          <span
                            className={
                              app.status === "approved"
                                ? "text-green-600"
                                : app.status === "rejected"
                                ? "text-red-600"
                                : "text-gray-600"
                            }
                          >
                            {app.status ? app.status : "Pending"}
                          </span>
                        </td>

                        <td className="p-3 space-x-2">
                          <button
                            onClick={() => updateStatus(app.id, "approved")}
                            className="px-3 py-1 bg-green-600 text-white rounded"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() => updateStatus(app.id, "rejected")}
                            className="px-3 py-1 bg-red-600 text-white rounded"
                          >
                            Reject
                          </button>

                          <button
                            onClick={() => deleteApplication(app.id)}
                            className="px-3 py-1 bg-gray-600 text-white rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
