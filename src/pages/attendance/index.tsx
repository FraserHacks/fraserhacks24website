"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Attendance() {
    const { data: session, status } = useSession();
    const [accommodations, setAccommodations] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (status === "loading") {
        return <div className="text-white">Loading...</div>;
    }

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


    return (
        <div className="flex flex-col items-center p-6 space-y-4 bg-gray-900 rounded-lg">
            {!session ? (
                <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-purple-700"
                >
                    Sign in with your PDSB Account to confirm your attendance
                </button>
            ) : (
                <div className="text-center text-white space-y-3">
                    <p>
                        Signed in as <span className="font-semibold">{session.user?.email}</span>
                    </p>
                    <button
                        onClick={() => signOut()}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-red-700"
                    >
                        Sign out
                    </button>
                </div>
            )}

            {session && (
                <div className="mt-4 w-full max-w-md">
                    <label className="block text-white text-lg font-medium mb-2">
                        Accommodations
                    </label>
                    <input
                        type="text"
                        value={accommodations}
                        onChange={(e) => setAccommodations(e.target.value)}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Enter any accommodations"
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`mt-4 py-2 px-4 rounded-lg transition-colors duration-300 ${
                            isSubmitting
                                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Accommodations"}
                    </button>
                </div>
            )}
        </div>
    );
}
