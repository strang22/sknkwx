export default function Header() {
  return (
    <header className="bg-[#0D0D0D] text-[#FAFAF7]">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="font-mono text-xl tracking-tight">SKNKWX</div>
          <div className="space-x-6">
            <a href="/projects" className="hover:text-[#FF9E2C] transition-colors">
              Projects
            </a>
            <a href="/register" className="bg-[#E62325] px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
              Become a Test Pilot
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
