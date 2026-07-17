import Link from "next/link";
import { navItems, profile, socialLinks } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-canvas">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-4xl leading-[1.05] md:text-6xl">{profile.name}</p>
            <p className="mt-6 max-w-md text-canvas/60">{profile.positioning}</p>
            <p className="mt-8 font-display text-2xl italic text-olive-soft">{profile.motto}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Footer">
              <h2 className="text-sm text-canvas/60">Menu</h2>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-canvas/80 transition-colors hover:text-olive-soft">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm text-canvas/60">Contact</h2>
              <ul className="mt-5 space-y-3 text-canvas/80">
                <li>
                  <a href={`mailto:${profile.email}`} className="break-all transition-colors hover:text-olive-soft">
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${profile.phoneUAE.replace(/\s+/g, "")}`} className="transition-colors hover:text-olive-soft">
                    {profile.phoneUAE}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm text-canvas/60">Elsewhere</h2>
              <ul className="mt-5 space-y-3">
                {socialLinks.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="text-canvas/80 transition-colors hover:text-olive-soft"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-canvas/20 pt-8 text-sm text-canvas/60 sm:flex-row">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
