import React from "react";

interface props {
  title: string;
}

function SectionHeader({ title }: props) {
  return (
    <div>
      <h2 className="text-main-green text-2xl font-bold my-4 lg:my-6">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
