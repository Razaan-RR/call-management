import { NavLink } from "react-router-dom";
import { Home, Phone, Calendar, Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Dashboard Overview", path: "/", icon: Home },
  { name: "Call Logs", path: "/calls", icon: Phone },
  { name: "Appointments", path: "/appointments", icon: Calendar },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden text-white"
      >
        <Menu />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/40 md:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col px-5 py-6 transition-transform md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "241px",
          background:
            "linear-gradient(180deg, #0b1535 0%, #0a1a3f 100%)",
        }}
      >
        <div className="flex justify-center mb-10">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-14 h-14 rounded-2xl object-cover"
          />
        </div>

        <nav className="flex flex-col gap-5">
          {links.map(({ name, path, icon: Icon }) => (
            <NavLink key={name} to={path} onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <div className="relative">
                  {isActive && (
                    <>
                      <div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          boxShadow:
                            "0 0 0 1.2px rgba(255,255,255,0.9), 0 0 18px rgba(255,255,255,0.55)",
                        }}
                      />
                      <div
                        className="absolute left-2 right-2 -bottom-3 h-6 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
                          filter: "blur(6px)",
                        }}
                      />
                    </>
                  )}

                  <div
                    className={`relative z-10 flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium ${
                      isActive ? "text-white" : "text-white/85"
                    }`}
                    style={{
                      background: isActive
                        ? "linear-gradient(180deg, #0b1535, #0a1a3f)"
                        : "transparent",
                    }}
                  >
                    <Icon size={18} />
                    {name}
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <button className="mt-auto flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-500">
          <LogOut size={18} />
          Log Out
        </button>
      </aside>
    </>
  );
}
