import ContactUs from "@/src/components/shared/contact";
import PageHeader from "@/src/components/shared/pageHeader";
import ServicesList from "@/src/components/shared/servicesList";
import { OfficeSpaceLeasingList } from "@/src/constants/OfficeSpaceLeasingList";
import React from "react";

function index() {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <PageHeader
                    title="Office Space Leasing"
                    model="modern_minimal_lowpoly_office_table_set.glb"
                    fov={3}
                    rotation={[0.1, 0.5, 0]}
                />
                <div className="max-w-[1400px] mx-auto p-4 grid gap-4">
                    <div>
                        <p className="text-main-black text-lg leading-8">
                            Finding the perfect office space is crucial for the
                            success of your business. At OfficeCrafters, we
                            offer a diverse range of office spaces tailored to
                            your specific needs. Whether you&apos;re a startup,
                            a growing business, or an established corporation,
                            we have the expertise and resources to help you find
                            the ideal workspace.
                        </p>
                    </div>
                    <ServicesList
                        title="Here's what you can expect from our office leasing services:"
                        list={OfficeSpaceLeasingList}
                    />
                    <ContactUs />
                </div>
            </div>
        </React.Fragment>
    );
}

export default index;
