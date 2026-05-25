export default function NavBar({ links }) {
  return (
    <div className="w-full bg-[#efefef] border-t border-b border-[#dddddd]">
      <nav
        aria-label="Main"
        className="w-full px-4 md:px-8 lg:px-10 flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar"
      >
        {links.map((link) => {
          const isActive = link.active === true;
          return (
            <a
              key={link.label}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className="relative py-4 text-[15px] font-semibold whitespace-nowrap transition-colors"
              style={{ color: isActive ? "#1167c4" : "#2f2f2f" }}
            >
              <span className="inline-flex items-center gap-2">
                {link.label}
                {link.dropdown && (
                  <svg
                    width="13" height="13" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </span>

              {/* Active indicator — blue bars above AND below, spanning the link width */}
              {isActive && (
                <>
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "3px",
                      backgroundColor: "#1167c4",
                      borderBottomLeftRadius: "2px",
                      borderBottomRightRadius: "2px",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "3px",
                      backgroundColor: "#1167c4",
                      borderTopLeftRadius: "2px",
                      borderTopRightRadius: "2px",
                    }}
                    aria-hidden="true"
                  />
                </>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
