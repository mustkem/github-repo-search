import React from "react";
import ContentLoader from "react-content-loader";

const HelpLinksLoader = (props: any) => (
  <ContentLoader
    width={"100%"}
    height={300}
    viewBox="0 0 1200 350"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="0" y="100" rx="6" ry="6" width="1200" height="15" />
    <rect x="0" y="200" rx="6" ry="6" width="1200" height="15" />
    <rect x="0" y="300" rx="6" ry="6" width="1200" height="15" />
  </ContentLoader>
);

export default HelpLinksLoader;
