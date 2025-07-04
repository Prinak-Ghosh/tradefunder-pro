
const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#262626] py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-bold text-xl mb-4">TradeFunder</div>
            <p className="text-[#a1a1aa] text-sm mb-4 max-w-sm">
              The gamified social finance platform where trading creators monetize exclusive insights and users discover profitable strategies.
            </p>
            <div className="text-xs text-[#666] max-w-sm">
              <p className="mb-2">Risk Warning: Trading involves substantial risk and may result in loss of capital.</p>
              <p>Not investment advice. Past performance doesn't guarantee future results.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-[#a1a1aa]">
              <li><a href="/creators" className="hover:text-white transition-colors">For Creators</a></li>
              <li><a href="/traders" className="hover:text-white transition-colors">For Traders</a></li>
              <li><a href="/performance" className="hover:text-white transition-colors">Top Performers</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-[#a1a1aa]">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/legal" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#262626]">
          <div className="text-xs text-[#666] mb-4 md:mb-0">
            © 2024 TradeFunder. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1a1a1a] border border-[#262626] rounded-lg flex items-center justify-center hover:bg-[#262626] transition-colors"
            >
              <img 
                src="https://framerusercontent.com/images/y3g3pFoLtRaMd0MeTnOnHJMt3Q.svg" 
                alt="LinkedIn" 
                className="w-5 h-5"
              />
            </a>
            <a 
              href="https://x.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1a1a1a] border border-[#262626] rounded-lg flex items-center justify-center hover:bg-[#262626] transition-colors"
            >
              <img 
                src="https://framerusercontent.com/images/uBvuzMmo9iqLQb8FnTlgHYlJWU.svg" 
                alt="Twitter" 
                className="w-5 h-5"
              />
            </a>
            <a 
              href="https://discord.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1a1a1a] border border-[#262626] rounded-lg flex items-center justify-center hover:bg-[#262626] transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
