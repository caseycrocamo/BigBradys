import React, { useState } from "react";
import { getBackofficeContactForms } from "../Service/contactForm";

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

    const loadSubmissions = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const response = await getBackofficeContactForms(password);
            setSubmissions(Array.isArray(response.data) ? response.data : []);
            setIsAuthenticated(true);
        } catch (err: any) {
            setIsAuthenticated(false);
            if (err?.response?.status === 401) {
                setError("Incorrect password.");
            } else {
                setError("Unable to load submissions right now.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 sm:p-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold text-warm-gray-900">Backoffice</h1>
                        <p className="mt-2 text-sm text-warm-gray-500">
                            Enter the shared password to view contact form submissions.
                        </p>
                    </div>
                </div>

                {!isAuthenticated ? (
                    <form className="mt-8 max-w-xl" onSubmit={loadSubmissions}>
                        <label htmlFor="backoffice-password" className="block text-sm font-medium text-warm-gray-900">
                            Password
                        </label>
                        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                            <input
                                id="backoffice-password"
                                type="password"
                                className="block w-full rounded-md border-warm-gray-300 shadow-sm focus:border-purple focus:ring-purple-light"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple focus:outline-none focus:ring-2 focus:ring-purple-light focus:ring-offset-2"
                            >
                                {isLoading ? "Checking..." : "Unlock"}
                            </button>
                        </div>
                        {error && (
                            <div className="mt-4 rounded-md bg-red-50 p-3">
                                <p className="text-sm font-medium text-red-800">{error}</p>
                            </div>
                        )}
                    </form>
                ) : (
                    <div className="mt-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h2 className="text-lg font-semibold text-warm-gray-900">Contact submissions</h2>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsAuthenticated(false);
                                    setSubmissions([]);
                                    setPassword("");
                                    setError("");
                                }}
                                className="mt-3 sm:mt-0 inline-flex items-center justify-center rounded-md border border-warm-gray-300 bg-white px-4 py-2 text-sm font-medium text-warm-gray-700 shadow-sm hover:bg-warm-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-light focus:ring-offset-2"
                            >
                                Lock
                            </button>
                        </div>

                        <div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-warm-gray-50">
                                    <tr>
                                        <th className="py-3.5 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wider text-warm-gray-600 sm:pl-6">Name</th>
                                        <th className="px-3 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-warm-gray-600">Email</th>
                                        <th className="px-3 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-warm-gray-600">Phone</th>
                                        <th className="px-3 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-warm-gray-600">Subject</th>
                                        <th className="px-3 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-warm-gray-600">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {submissions.map((submission, index) => (
                                        <tr key={submission._id || index}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-warm-gray-900 sm:pl-6">
                                                {(submission.firstName || "").trim()} {(submission.lastName || "").trim()}
                                                {submission.petName ? (
                                                    <span className="ml-1 text-warm-gray-500">({submission.petName})</span>
                                                ) : null}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-warm-gray-700">{submission.email || "-"}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-warm-gray-700">{submission.phoneNumber || "-"}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-warm-gray-700">{submission.subject || "-"}</td>
                                            <td className="px-3 py-4 text-sm text-warm-gray-700 max-w-md">{submission.message || "-"}</td>
                                        </tr>
                                    ))}
                                    {submissions.length === 0 && (
                                        <tr>
                                            <td className="px-3 py-8 text-center text-sm text-warm-gray-500" colSpan={5}>
                                                No submissions yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
