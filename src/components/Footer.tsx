import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[linear-gradient(180deg,#ffffff,rgba(251,250,247,0.95))]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 font-mono text-xs uppercase tracking-wide">
          <a href={profile.github} className="hover:text-signal transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} className="hover:text-signal transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-signal transition-colors">
            Email
          </a>
          <a href="https://medium.com/@nikhilbarot" className="hover:text-signal transition-colors">
            Medium
          </a>
          <a href="https://ieeexplore.ieee.org/document/11607667" className="hover:text-signal transition-colors">
            IEEE Xplore
          </a>
        </div>
      </div>
    </footer>
  );
}
