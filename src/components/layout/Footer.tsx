export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#FAFAF7] mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mono text-lg mb-4">SKNKWX</h3>
            <p className="text-sm opacity-70">
              Stealth-style innovation studio spinning up AI-native, B2B go-to-market products.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-sm mb-4">Clearance Levels</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#E62325] rounded-full mr-2" />
                Top Secret
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF9E2C] rounded-full mr-2" />
                Secret
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#1DB954] rounded-full mr-2" />
                Declassified
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/projects" className="hover:text-[#FF9E2C] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-[#FF9E2C] transition-colors">
                  Become a Test Pilot
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm opacity-70">
          © {new Date().getFullYear()} SKNKWX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
