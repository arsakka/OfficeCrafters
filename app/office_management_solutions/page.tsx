import ContactUs from "@/src/components/shared/contact";
import PageHeader from "@/src/components/shared/pageHeader";
import ServicesList from "@/src/components/shared/servicesList";
import { OfficeManagementSolutionsList } from "@/src/constants/OfficeManagementSolutionsList";
import React from "react";

function page() {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <PageHeader
                    title="Office Management Solutions"
                    model="smol_ame_in_an_upcycled_terrarium_hololiveen.glb"
                    fov={2.2}
                    rotation={[0.1, -0.5, 0]}
                    scale={1}
                />
                <div className="max-w-[1400px] mx-auto p-4 grid gap-4">
                    <div>
                        <p className="text-main-black text-lg leading-8">
                            Managing your office space effectively is essential
                            for maximizing productivity, efficiency, and
                            employee satisfaction. At OfficeCrafters, we offer a
                            range of office management solutions designed to
                            streamline your operations and create a seamless
                            workplace experience.
                        </p>
                    </div>
                    <ServicesList
                        title="Here's how we can help:"
                        list={OfficeManagementSolutionsList}
                    />
                    <ContactUs />
                </div>
            </div>
        </React.Fragment>
    );
}

export default page;
