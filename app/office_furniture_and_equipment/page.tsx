import ContactUs from "@/src/components/shared/contact";
import PageHeader from "@/src/components/shared/pageHeader";
import ServicesList from "@/src/components/shared/servicesList";
import { OfficeFurnitureAndEquipmentList } from "@/src/constants/OfficeFurnitureAndEquipmentList";
import React from "react";

function page() {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <PageHeader
                    title="Office Furniture and Equipment"
                    model="mfp_office_printer.glb"
                    fov={10}
                    rotation={[0.1, 0.5, 0]}
                    scale={0.08}
                />
                <div className="max-w-[1400px] mx-auto p-4 grid gap-4">
                    <div>
                        <p className="text-main-black text-lg leading-8">
                            Furnishing your office with the right furniture and
                            equipment is essential for creating a comfortable,
                            functional, and inspiring work environment. At
                            OfficeCrafters, we offer a wide selection of
                            high-quality furniture, technology solutions, and
                            office supplies to meet all your needs.
                        </p>
                    </div>
                    <ServicesList
                        title="Here's what sets us apart:"
                        list={OfficeFurnitureAndEquipmentList}
                    />
                    <ContactUs />
                </div>
            </div>
        </React.Fragment>
    );
}

export default page;
