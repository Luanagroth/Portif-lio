import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="text-muted mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-[--line] px-5 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="text-main font-medium">
          {profile.name} © {new Date().getFullYear()}
        </p>
        <p>Interfaces com direção visual, base técnica e evolução contínua.</p>
      </div>
    </footer>
  );
}
