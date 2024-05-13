import { GreenButton } from "@/src/constants/styles";
import React from "react";

function ContactForm() {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <div className="grid gap-4">
                    <label htmlFor="" className="text-lg text-main-black font-medium capitalize">full name</label>
                    <input type="text" className="py-2 px-4 bg-main-white rounded text-main-black" />
                </div>

                <div className="grid gap-4">
                    <label htmlFor="" className="text-lg text-main-black font-medium capitalize">email address</label>
                    <input type="text" className="py-2 px-4 bg-main-white rounded text-main-black" />
                </div>

                <div className="grid gap-4">
                    <label htmlFor="" className="text-lg text-main-black font-medium capitalize">business name</label>
                    <input type="text" className="py-2 px-4 bg-main-white rounded text-main-black" />
                </div>

                <div className="grid gap-4">
                    <label htmlFor="" className="text-lg text-main-black font-medium capitalize">message</label>
                    <textarea rows={5} className="py-2 px-4 bg-main-white rounded text-main-black" />
                </div>

                <div className="flex justify-end">
                    <button className={GreenButton}>
                        Submit
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactForm;
