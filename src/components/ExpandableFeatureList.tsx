import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ExpandableFeatureList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(prev => prev === itemId ? null : itemId);
  };

  const features = [
    {
      id: "expert-knowledge",
      title: "Expert Local Knowledge",
      description: "",
      expandedContent: "We provide detailed market analysis, neighborhood insights, and pricing strategies tailored to your specific location and property type."
    },
    {
      id: "hassle-free",
      title: "Hassle-Free Transactions",
      description: "",
      expandedContent: "We handle all the paperwork, coordinate with lenders, inspectors, and other parties involved in your transaction to ensure a smooth process from start to finish."
    },
    {
      id: "comprehensive-support",
      title: "Comprehensive Support",
      description: "",
      expandedContent: "Our support extends beyond the transaction with ongoing assistance, market updates, and guidance for future real estate needs and investment opportunities."
    }
  ];

  return <div className="flex flex-col gap-3">
      {features.map((feature, index) => <div key={feature.id}>
          <Collapsible open={openItem === feature.id} onOpenChange={() => toggleItem(feature.id)}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between gap-3 cursor-pointer">
                <div className="text-left flex-1">
                  <div className="text-[#09090B] text-xl font-medium leading-[26px]">
                    {feature.title}
                  </div>
                  {feature.description}
                </div>
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-2">
              <div className="text-[#717179] text-sm font-normal leading-[18.2px]">
                {feature.expandedContent}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {index < features.length - 1 && <div className="h-px bg-[#52525A] opacity-20 my-3" />}
        </div>)}
    </div>;
};

export default ExpandableFeatureList;
