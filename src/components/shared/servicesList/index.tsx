import React from "react";
import SectionHeader from "../sectionHeader";
import { ServicesListInterface } from "../interfaces/ServicesListInterface";

interface props {
    title: string;
    list: ServicesListInterface[];
}

function ServicesList({ title, list }: props) {
    return (
        <React.Fragment>
            <div className="grid gap-4">
                <SectionHeader title={title} />
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className="bg-main-white shadow-md rounded-md py-8 px-6 grid gap-6 relative"
                        >
                            <h3 className="text-lg text-center font-medium text-main-green">
                                {item.name}
                            </h3>
                            <div>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ServicesList;
