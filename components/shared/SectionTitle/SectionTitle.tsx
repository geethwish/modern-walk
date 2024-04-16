import React, { FC } from "react";

interface ISectionTitle {
  title: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => {
  return <h6 className="p-2 section-title mb-2 mt-2">{title}</h6>;
};

export default SectionTitle;
