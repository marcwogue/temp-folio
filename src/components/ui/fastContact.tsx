import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import contacts from "../Json/fastContacts.json";

const iconMap: Record<string, React.ReactNode> = {
  Téléphone: <FaPhone className="text-2xl" />,
  Courriel: <FaEnvelope className="text-2xl" />,
  Linkedin: <FaLinkedin className="text-2xl" />,
  Facebook: <FaFacebook className="text-2xl" />,
  Instagram: <FaInstagram className="text-2xl" />,
  TikTok: <FaTiktok className="text-2xl" />,
  Twitter: <FaXTwitter className="text-2xl" />,
  Youtube: <FaYoutube className="text-2xl" />,
};

const FastContact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contacts.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-neutral rounded-lg hover:bg-neutral-focus transition-colors"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-content text-neutral">
            {iconMap[item.label]}
          </div>
          <div>
            <div className="font-semibold text-neutral-content">{item.label}</div>
            <div className="text-secondary">{item.value}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FastContact;
