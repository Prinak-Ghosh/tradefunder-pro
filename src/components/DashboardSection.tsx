
import { motion } from "framer-motion";

const DashboardSection = () => {
  return (
    <section className="w-full py-12 px-6 relative overflow-visible">
      <div className="max-w-screen-xl mx-auto">
        {/* Gradient background image */}
        <div 
          className="absolute inset-0 w-full h-full -mb-[200px]"
          style={{
            backgroundImage: 'url(/lovable-uploads/a6d750ce-ddca-401d-8a91-2077ddd4bb92.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative rounded-full">
          <div className="bg-[#1a1a1a] shadow-2xl overflow-hidden border border-[#262626] rounded-3xl">
            <img 
              alt="Dashboard interface showing financial management tools" 
              className="w-full h-auto object-cover object-top" 
              src="/lovable-uploads/d6c89680-1f12-4034-858c-dffeb2ad0b24.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
