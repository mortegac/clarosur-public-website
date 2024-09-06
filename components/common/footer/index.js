import styled from "styled-components";
import PropTypes from "prop-types";

import FooterList from "./subComponents/FooterList/FooterList";
import SocialLinks from "./subComponents/SocialLinks/SocialLinks";
import TrustPilot from "./subComponents/TrustPilot";
import Logo from "./subComponents/Logo/Logo";
import FooterCopyright from "./subComponents/FooterCopyright/FooterCopyright";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 64px 24px;
  min-height: 250px;
  // padding: 48px 24px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};
  
  @media (max-width: 760px) {
    padding:0px;
    padding-top:48px;
  }
`;

const FooterItemsContainer = styled.div`
  width: 45%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 760px) {
    flex-direction: column;
    margin:0px;
    padding:0px;
  }
`;

const Footer = ({
  items,
}) => {
  const { data: { data }, data: { textrights } } = items
  return (
    <FooterWrapper backgroundColor={"#0B3954"}>
      <FooterItemsContainer>
        <FooterCopyright copyrightText="CLAROSUR © 2023 , Inc. Todos los derechos reservados." />
        <FooterList title={""} items={items} />
        <SocialLinks socialTitle={" "} />
      </FooterItemsContainer>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  // logo: PropTypes.string,
  // copyrightText: PropTypes.string,
  // backgroundColor: PropTypes.string,
  // columnTitle: PropTypes.string,
  // items: PropTypes.array,
  // socialTitle: PropTypes.string,
};

Footer.defaultProps = {
  // logo: "/logo.svg",
  // copyrightText:
  //   "m-elevadores © 2023 , Inc. Todos los derechos reservados.",
  // backgroundColor: "gray",
  // columnTitle: "Electro Move",
  // socialTitle: "Follow us",
};

export default Footer;
