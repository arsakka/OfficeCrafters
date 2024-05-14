import ContactUs from "@/src/components/shared/contact";
import PageHeader from "@/src/components/shared/pageHeader";
import ServicesList from "@/src/components/shared/servicesList";
import { OfficeDesignAndBuildOutList } from "@/src/constants/OfficeDesignAndBuildOutList";
import React from "react";

function page() {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <PageHeader
                    title="Office Design and Build-out"
                    model="isometric_office.glb"
                    fov={13}
                    rotation={[0.3, -0.7, 0]}
                />
                <div className="max-w-[1400px] mx-auto p-4 grid gap-4">
                    <div>
                        <p className="text-main-black text-lg leading-8">
                            Transform your vision into reality with our office
                            design and build-out services. At OfficeCrafters, we
                            understand that your office space is more than just
                            a place to work – it&apos;s a reflection of your
                            brand, culture, and values. That&apos;s why we offer
                            comprehensive design and build-out solutions to
                            create a customized workspace that inspires
                            creativity, enhances productivity, and fosters
                            collaboration.
                        </p>
                    </div>
                    <ServicesList
                        title="Here's how we can help:"
                        list={OfficeDesignAndBuildOutList}
                    />
                    <ContactUs />
                </div>
            </div>
        </React.Fragment>
    );
}

export default page;
