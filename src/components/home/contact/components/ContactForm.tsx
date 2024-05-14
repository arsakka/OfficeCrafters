"use client";
import { GreenButton } from "@/src/constants/styles";
import React from "react";

function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4">
                    <label
                        htmlFor="full_name"
                        className="text-lg text-main-black font-medium capitalize drop-shadow"
                    >
                        full name
                    </label>
                    <input
                        type="text"
                        className="py-2 px-4 bg-main-white rounded text-main-black placeholder:capitalize resize-none shadow"
                        placeholder="full name"
                        name="full_name"
                        id="full_name"
                    />
                </div>

                <div className="grid gap-4">
                    <label
                        htmlFor="email_address"
                        className="text-lg text-main-black font-medium capitalize drop-shadow"
                    >
                        email address
                    </label>
                    <input
                        type="text"
                        className="py-2 px-4 bg-main-white rounded text-main-black placeholder:capitalize resize-none shadow"
                        placeholder="email address"
                        name="email_address"
                        id="email_address"
                    />
                </div>

                <div className="grid gap-4">
                    <label
                        htmlFor="business_name"
                        className="text-lg text-main-black font-medium capitalize drop-shadow"
                    >
                        business name
                    </label>
                    <input
                        type="text"
                        className="py-2 px-4 bg-main-white rounded text-main-black placeholder:capitalize resize-none shadow"
                        placeholder="business name"
                        name="business_name"
                        id="business_name"
                    />
                </div>

                <div className="grid gap-4">
                    <label
                        htmlFor="message"
                        className="text-lg text-main-black font-medium capitalize drop-shadow"
                    >
                        message
                    </label>
                    <textarea
                        rows={5}
                        className="py-2 px-4 bg-main-white rounded text-main-black placeholder:capitalize resize-none shadow"
                        placeholder="message"
                        name="message"
                        id="message"
                    />
                </div>

                <div className="flex justify-end">
                    <button className={GreenButton}>Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;
