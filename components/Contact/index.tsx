"use client";

import dynamic from "next/dynamic";

const ContactMotion = dynamic(() => import("./ContactMotion"), { ssr: false });

const Contact = () => {
  return <ContactMotion />;
};

export default Contact;
