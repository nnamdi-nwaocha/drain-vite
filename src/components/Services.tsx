import type React from "react";
import { cn } from "../lib/utils";
import {
  IconDroplet,
  IconTools,
  IconHome,
  IconMessageCircle,
  IconHeartHandshake,
  IconAlertTriangle,
  IconShieldCheck,
} from "@tabler/icons-react";
import Marquee from "react-fast-marquee";

export function Features() {
  const features = [
    {
      title: "Drain Cleaning",
      description:
        "Expert solutions to clear clogs and ensure smooth drainage.",
      icon: <IconDroplet color="#0077C0" />,
    },
    {
      title: "Leak Repairs",
      description: "Fixing leaks swiftly to prevent water damage and waste.",
      icon: <IconTools color="#0077C0" />,
    },
    {
      title: "Pipe Replacement",
      description: "Durable piping solutions for long-lasting performance.",
      icon: <IconDroplet color="#0077C0" />,
    },
    {
      title: "Residential Plumbing",
      description: "Reliable plumbing services for homes and apartments.",
      icon: <IconHome color="#0077C0" />,
    },
    {
      title: "Emergency Services",
      description: "24/7 support for urgent plumbing and drainage issues.",
      icon: <IconAlertTriangle color="#0077C0" />,
    },
    {
      title: "Customer Support",
      description: "Dedicated support team for all your plumbing concerns.",
      icon: <IconMessageCircle color="#0077C0" />,
    },
    {
      title: "Preventative Maintenance",
      description: "Scheduled checkups to keep your plumbing in top shape.",
      icon: <IconShieldCheck color="#0077C0" />,
    },
    {
      title: "Trusted Professionals",
      description: "Experienced and certified plumbers you can count on.",
      icon: <IconHeartHandshake color="#0077C0" />,
    },
  ];

  return (
    <div id="services" className="py-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-6 text-neutral-800">
        Expert Plumbing & Drain Solutions You Can Trust. 🚰
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-5 py-10 max-w-7xl mx-auto px-0 bg-white max-md:hidden">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <div className="block md:hidden">
        <Marquee>
          {features
            .slice(0, Math.ceil(features.length / 2))
            .map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
        </Marquee>
        <Marquee direction="right">
          {features
            .slice(Math.ceil(features.length / 2))
            .map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
        </Marquee>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-300",
        (index === 0 || index === 4) && "lg:border-l border-neutral-300",
        index < 4 && "lg:border-b border-neutral-300"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-5 px-10 text-neutral-600">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-5 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-[#0077C0] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-5 px-10">
        {description}
      </p>
    </div>
  );
};
