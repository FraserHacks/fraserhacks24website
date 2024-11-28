"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Attendance() {
    const { data: session, status } = useSession();
    const [accommodations, setAccommodations] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Loading state
    if (status === "loading") {
        return (
            <div className="flex justify-center items-center h-full text-white">
                Loading...
            </div>
        );
    }

    // Handle accommodations submission
    const handleSubmit = async () => {
        if (!accommodations.trim()) {
            alert("Please enter your accommodations before submitting.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/attendance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: session?.user?.email,
                    accommodations,
                }),
            });

            if (response.ok) {
                alert("Accommodations submitted successfully!");
                setAccommodations("");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error submitting accommodations:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Check if email is a gmail account
    const isGmailAccount = session?.user?.email?.endsWith("@gmail.com");

    return (
        <div className="w-full max-w-md mx-auto bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
            {/* Gmail Warning */}
            {isGmailAccount && (
                <div className="bg-red-600/20 border-b border-red-600 p-4 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <p className="text-red-300 text-lg">
                        Please sign in with your school account, not a personal Gmail account.
                    </p>
                </div>
            )}

            {/* Authentication Section */}
            <div className="p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-gray-800">
                {!session ? (
                    <div className="text-center">
                        <button
                            onClick={() => signIn("google", { callbackUrl: "/" })}
                            className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg
              transition-all duration-300 hover:bg-purple-700 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        >
                            Sign in with PDSB Account
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3 text-center">
                        <p className="text-white">
                            Signed in as{" "}
                            <span className="font-semibold text-purple-400">
                {session.user?.email}
              </span>
                        </p>
                        <button
                            onClick={() => signOut()}
                            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg
              transition-all duration-300 hover:bg-red-700
              focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Sign out
                        </button>
                    </div>
                )}
            </div>

            {/* Accommodations Section */}
            {session && (
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-white text-lg font-medium mb-2">
                            Accommodations
                        </label>
                        <input
                            type="text"
                            value={accommodations}
                            onChange={(e) => setAccommodations(e.target.value)}
                            placeholder="Enter any special requirements"
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200
              rounded-lg border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-purple-600
              transition-all duration-200 placeholder-gray-500"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 
            ${
                            isSubmitting
                                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                        }`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Accommodations"}
                    </button>
                </div>
            )}
        </div>
    );
}