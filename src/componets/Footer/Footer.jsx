import React from "react";
import Logo from "../../assets/logo.png";
import css from "./Footer.modual.css";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
function Footer() {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" width={50} />
          <span>Footer</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
