import { useRouter } from "next/router";
import React from "react";
import FooterContainer from "@components/style/FooterContainer";

const Footer: React.FC = () => {
  const router = useRouter();
  const isMain = router.pathname === "/";

  const movePage = () => {
    let url = isMain ? "/todo/add" : "/";
    router.push(url);
  };

  return (
    <FooterContainer>
      <button type="button" className="footer-button" onClick={() => movePage()}>
        {isMain ? "+" : "-"}
      </button>
    </FooterContainer>
  );
};

export default Footer;
