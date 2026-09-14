import { FacebookIcon, InstagramIcon, PinterestIcon } from "@/components/icons";

import Signature from "./signature";

const socialLinks = [
  {
    label: "Liftoff on Facebook",
    href: "https://www.facebook.com/",
    Icon: FacebookIcon,
  },
  {
    label: "Liftoff on Pinterest",
    href: "https://www.pinterest.com/",
    Icon: PinterestIcon,
  },
  {
    label: "Liftoff on Instagram",
    href: "https://www.instagram.com/",
    Icon: InstagramIcon,
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative flex justify-center pb-12 md:pb-18">
      <ul role="list" className="flex items-center gap-8">
        {socialLinks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="v-focus-ring text-muted hover:text-accent focus-visible:text-accent block motion-safe:transition-colors"
            >
              <Icon className="size-6" />
            </a>
          </li>
        ))}
      </ul>
      <Signature />
    </footer>
  );
}
