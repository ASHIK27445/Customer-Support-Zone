import FooterCopyRight from "./FooterCopyRight";
import FooterDiv from "./FooterDiv";

const Footer = () => {
  return (
      <footer className=" bg-neutral text-neutral-content p-10 font-inter ">
        <FooterDiv></FooterDiv>
        <FooterCopyRight></FooterCopyRight>
      </footer>
  );
};
export default Footer;
