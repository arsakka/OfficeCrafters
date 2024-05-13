import React from "react";
import SectionHeader from "../../shared/sectionHeader";
import MoonModel from "./components/MoonModel";
import ContactForm from "./components/ContactForm";

function ContactUs() {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <SectionHeader title="Contant Us" />
                <div>
                    <h3>Get in Touch with OfficeCrafters</h3>
                    <p>
                        Have questions or ready to get started on your office
                        journey? We&apos;re here to help! Contact us today to speak
                        with one of our expert advisors and explore how
                        OfficeCrafters can assist you with all your office
                        needs.
                    </p>
                </div>
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <div>
                        <ContactForm />
                    </div>
                    <div>
                        <MoonModel />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactUs;
