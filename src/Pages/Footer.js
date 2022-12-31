import FooterComponent from "../Components/Footer";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const footerCardData = [
    {
      header: "WHAT WE DO",
      body: "ePackBook is a powerfull software to manage relocation business online. ePackBook allows their user to manage all enquiries, Notify survey date & Time, Follow ups reminder, Create and Send Quotations in stylish tamplets, Jobs reminder, Download Reports, Manage customers profile & Their Moves and many more...",
    },
    {
      header: "this is a header",
      socialMediaIcons: [
        {
          icon: <BsFacebook color="#012A5E" size={30} />,
          path: "#",
        },
        {
          icon: <BsFacebook color="#012A5E" size={30} />,
          path: "#",
        },
        {
          icon: <BsFacebook color="#012A5E" size={30} />,
          path: "#",
        },
        {
          icon: <BsFacebook color="#012A5E" size={30} />,
          path: "#",
        },
      ],
    },
    {
      header: "this is a header",
      body: "this is a body",
    },
    {
      header: "this is a header",
      body: "this is a body",
    },
  ];
  return <FooterComponent footerCardData={footerCardData} />;
};

export default Footer;
