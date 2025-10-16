export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-border/50 p-8 md:p-12 backdrop-blur-sm bg-white/5">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            <div className="flex-shrink-0">
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Matthieu
                <br />
                Laurin
              </h2>
            </div>

            <div className="flex flex-col gap-8 sm:flex-row sm:gap-16 md:gap-20 lg:gap-32">
              <div>
                <h3 className="mb-4 text-lg font-medium text-foreground md:text-xl border-b border-white/20 inline-block pb-1">
                  Explore
                </h3>
                <ul className="mt-3 space-y-3 text-muted-foreground">
                  <li>
                    <a
                      href="#home"
                      className="transition-colors hover:text-foreground"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="transition-colors hover:text-foreground"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="transition-colors hover:text-foreground"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium text-foreground md:text-xl border-b border-white/20 inline-block pb-1">
                  Let&apos;s Connect
                </h3>
                <ul className="mt-3 space-y-3 text-muted-foreground">
                  <li>
                    <a
                      href="mailto:matthieu@email.com"
                      className="transition-colors hover:text-foreground"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/matthieulaurin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/matthieulaurin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between px-2 text-sm text-white/50 text-muted-foreground md:text-base">
          <p>© {new Date().getFullYear()}</p>
          <p>Matthieu Laurin</p>
        </div>
      </div>
    </footer>
  );
}
