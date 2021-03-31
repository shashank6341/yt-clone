import React from "react";
import { Helmet } from "react-helmet";

const CustomHelmet = ({
  title = "Youtube Clone - SV",
  description = "A project with Youtube API and React JS",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
         <meta property='og:locale' content='en_US' />
         <meta property='og:type' content='website' />
         <meta property='og:title' content={title} />
         <meta property='og:description' content={description} />
    </Helmet>
  );
};

export default CustomHelmet;
