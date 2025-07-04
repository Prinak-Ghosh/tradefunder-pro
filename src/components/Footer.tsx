
const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#262626] py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="text-white font-bold text-xl">Webfluin</div>
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
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1a1a1a] border border-[#262626] rounded-lg flex items-center justify-center hover:bg-[#262626] transition-colors"
            >
              <img 
                src="https://framerusercontent.com/images/ge13pW7aBY1YGhQS3U3ugGEUE.svg" 
                alt="YouTube" 
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
