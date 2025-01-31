import {
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function ContactUs() {
  const contacts = [
    {
      title: "Call Us",
      href: "tel:636-248-8724",
      icon: <IconPhone color="#0077C0" />,
    },
    {
      title: "Email Us",
      href: "mailto:Drains.plumbingsolutions@gmail.com",
      icon: <IconMail color="#0077C0" />,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61566602241548&mibextid=JRoKGi",
      icon: <IconBrandFacebook color="#0077C0" />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/example",
      icon: <IconBrandInstagram color="#0077C0" />,
    },
  ];

  return (
    <div id="contact-us" className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-neutral-800">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto max-lg:hidden">
        {contacts.map((contact) => (
          <a
            key={contact.title}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-100"
          >
            <div className="mb-4 text-neutral-600">{contact.icon}</div>
            <span className="text-lg font-semibold text-neutral-800">
              {contact.title}
            </span>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto lg:hidden">
        {contacts.map((contact) => (
          <a
            key={contact.title}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-100 w-64 mx-auto"
          >
            <div className="mb-4 text-neutral-600">{contact.icon}</div>
            <span className="text-lg font-semibold text-neutral-800">
              {contact.title}
            </span>
          </a>
        ))}
      </div>
      <footer className="mt-10 text-sm text-neutral-600">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Drain-Solutions and Plumbing
        </p>
      </footer>
    </div>
  );
}

export default ContactUs;
