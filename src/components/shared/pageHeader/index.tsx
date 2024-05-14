import React from "react";
import PageModel from "./components/PageModel";

interface props {
    title: string;
    model: string;
}

function PageHeader({ title, model }: props) {
    return (
        <React.Fragment>
            <div className="py-10 px-20 grid gap-4 grid-cols-2 bg-gradient-to-br from-main-green to-transparent">
                <div className="flex items-center">
                    <h1 className="text-main-white text-4xl font-bold drop-shadow">
                        {title}
                    </h1>
                </div>
                <div>
                    <PageModel model={model} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default PageHeader;
