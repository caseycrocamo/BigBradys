import React, { useState } from "react";
import { getBackofficeContactForms } from "../Service/contactForm";
import Card from "../Components/Card";

type ContactFormSubmission = {
    _id?: string;
    firstName?: string;
    lastName?: string;
    petName?: string;
    email?: string;
    phoneNumber?: string;
    subject?: string;
    message?: string;
};

export default function Backoffice() {
    const [password, setPassword] = useState("");
    const [submissions, setSubmissions] = useState<ContactFormSubmission[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState("");
    const [expandedId, setExpandedId] = useState<string | number | null>(null);

    const formatName = (s: ContactFormSubmission) => {
        const name = `${s.firstName || ""} ${s.lastName || ""}`.trim();
        const pet = (s.petName || "").trim();
        if (!name && !pet) return "—";
        return pet ? `${name || "Owner"} (${pet})` : name;
    };

    const val = (v?: string) => (v?.trim() || "—");

    const handleLock = () => {
        setIsAuthenticated(false);
        setSubmissions([]);
        setPassword("");
        setError("");
    };

    const handleUnlock = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const res = await getBackofficeContactForms(password);
            setSubmissions(Array.isArray(res.data) ? res.data : []);
            setIsAuthenticated(true);
        } catch (err: any) {
            setError(err?.response?.status === 401 ? "Wrong password" : "Failed to load");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="max-w-lg w-2/6">
                    <div className="h-1 bg-gradient-to-r from-purple to-purple-light rounded-t" />
                    <form onSubmit={handleUnlock} className="bg-white rounded-b shadow-lg p-6">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-light focus:border-transparent"
                            autoFocus
                            required
                        />
                        {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-4 block w-full py-2 bg-purple text-white text-sm font-medium rounded hover:bg-purple-dark focus:outline-none focus:ring-2 focus:ring-purple-light focus:ring-offset-2 disabled:opacity-50"
                        >
                            {isLoading ? "..." : "Unlock"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const tableContent = (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wide">
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Email</th>
                        <th className="px-4 py-3 font-medium">Phone</th>
                        <th className="px-4 py-3 font-medium">Subject</th>
                        <th className="px-4 py-3 font-medium">Message</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {submissions.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="px-4 py-12 text-center text-gray-400">
                                No submissions
                            </td>
                        </tr>
                    ) : (
                        submissions.map((s, i) => (
                            <tr key={s._id || i}>
                                <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {formatName(s)}
                                </td>
                                <td className="px-4 py-4 text-gray-600 font-mono text-xs whitespace-nowrap">
                                    {val(s.email)}
                                </td>
                                <td className="px-4 py-4 text-gray-600 font-mono text-xs whitespace-nowrap">
                                    {val(s.phoneNumber)}
                                </td>
                                <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                                    {val(s.subject)}
                                </td>
                                <td 
                                    className={`px-4 py-4 text-gray-600 max-w-md cursor-pointer ${expandedId === (s._id || i) ? '' : 'truncate'}`}
                                    onClick={() => setExpandedId(expandedId === (s._id || i) ? null : (s._id || i))}
                                >
                                    {val(s.message)}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="px-4">
            {/* Hero - same pattern as About.tsx */}
            <div className="relative bg-purple-dark">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-purple-dark mix-blend-multiply bg-opacity-40" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="flex items-start justify-between">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Contact Form Submissions
                        </h1>
                        <button
                            onClick={handleLock}
                            className="mt-2 px-4 py-2 text-sm font-medium text-purple-dark bg-white hover:bg-purple-lightest rounded-md shadow"
                        >
                            Lock
                        </button>
                    </div>
                </div>
            </div>

            {/* Table in Card component */}
            <Card 
                header={`${submissions.length} ${submissions.length === 1 ? "Submission" : "Submissions"}`}
                body={tableContent}
            />
        </div>
    );
}
