import ContactUs from "@/src/components/shared/contact";
import PageHeader from "@/src/components/shared/pageHeader";
import ServicesList from "@/src/components/shared/servicesList";
import { VirtualOfficeServicesList } from "@/src/constants/VirtualOfficeServicesList";
import React from "react";

function page() {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <PageHeader
                    title="Virtual Office Services"
                    model="robot_rocket.glb"
                    fov={4}
                    rotation={[0.1, -0.5, 0]}
                    scale={1}
                />
                <div className="max-w-[1400px] mx-auto p-4 grid gap-4">
                    <div>
                        <p className="text-main-black text-lg leading-8">
                            Establishing a professional presence has never been
                            easier with our virtual office services. At
                            OfficeCrafters, we offer a range of virtual office
                            solutions designed to help you project a
                            professional image and enhance your business
                            reputation, without the need for a physical office
                            space.
                        </p>
                    </div>
                    <ServicesList
                        title="Here's how we can assist you:"
                        list={VirtualOfficeServicesList}
                    />
                    <ContactUs />
                </div>
            </div>
        </React.Fragment>
    );
}

export default page;
