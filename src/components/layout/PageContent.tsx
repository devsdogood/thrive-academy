import React from "react";

type Props = {
    backgroundImage: string;
};

const PageContent: React.FC<Props> = ({ backgroundImage, children }) => {
    return (
        <section className="section"        >
            {children}
        </section>
    );
};

export default PageContent;



