import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://zhumengzhiren.github.io";

function Seo({ title, description, path = "/", children }) {
    const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;

    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Yuanfan Chen" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta name="twitter:card" content="summary" />
            {children}
        </Helmet>
    );
}

export default Seo;
