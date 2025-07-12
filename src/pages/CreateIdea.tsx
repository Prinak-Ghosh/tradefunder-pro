import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
  Upload,
  DollarSign,
  Calendar,
  Target,
  BarChart3
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CreateIdea = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    target: "",
    description: "",
    longDescription: "",
    tags: [] as string[],
    entryCriteria: "",
    exitStrategy: "",
    riskManagement: "",
    timeline: [] as { date: string; event: string }[],
    agreeToTerms: false
  });
  const [newTag, setNewTag] = useState("");
  const [newTimelineEvent, setNewTimelineEvent] = useState({ date: "", event: "" });

  const categories = [
    "Stocks",
    "Crypto",
    "Options",
    "Forex",
    "Commodities",
    "Futures",
    "ETFs"
  ];

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      });
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const addTimelineEvent = () => {
    if (newTimelineEvent.date && newTimelineEvent.event) {
      setFormData({
        ...formData,
        timeline: [...formData.timeline, { ...newTimelineEvent }]
      });
      setNewTimelineEvent({ date: "", event: "" });
    }
  };

  const removeTimelineEvent = (index: number) => {
    setFormData({
      ...formData,
      timeline: formData.timeline.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = async () => {
    // TODO: Implement idea creation with Supabase
    console.log("Creating idea:", formData);
    
    // Simulate API call
    setTimeout(() => {
      navigate("/ideas");
    }, 1500);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.title && formData.category && formData.target;
      case 2:
        return formData.description && formData.longDescription;
      case 3:
        return formData.entryCriteria && formData.exitStrategy && formData.riskManagement;
      case 4:
        return formData.agreeToTerms;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/ideas")}
            className="bg-[#262626] border-[#333] text-white hover:bg-[#333]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Create Trading Idea</h1>
            <p className="text-[#717179]">Share your strategy with the community</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= step ? "bg-[#4a9489] text-white" : "bg-[#262626] text-[#717179]"
              }`}>
                {step}
              </div>
              {step < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? "bg-[#4a9489]" : "bg-[#262626]"
                }`} />
              )}
            </div>
          ))}
        </div>

        <Card className="bg-[#1a1a1a] border-[#262626]">
          <CardContent className="p-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Basic Information</h2>
                  <p className="text-[#717179] mb-6">Start by providing the essential details about your trading strategy.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-white">Strategy Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., TSLA Breakout Strategy"
                      className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-white">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger className="bg-[#262626] border-[#333] text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="target" className="text-white">Funding Target</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-[#717179]" />
                      <Input
                        id="target"
                        type="number"
                        value={formData.target}
                        onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                        placeholder="5000"
                        className="pl-10 bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white">Tags</Label>
                    <div className="flex items-center space-x-2 mb-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                        className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                        onKeyPress={(e) => e.key === 'Enter' && addTag()}
                      />
                      <Button onClick={addTag} size="sm" className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-[#262626] text-[#717179]">
                          {tag}
                          <button
                            onClick={() => removeTag(tag)}
                            className="ml-2 hover:text-white"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Description */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Strategy Description</h2>
                  <p className="text-[#717179] mb-6">Explain your trading strategy in detail.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description" className="text-white">Short Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief overview of your strategy..."
                      className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="longDescription" className="text-white">Detailed Description</Label>
                    <Textarea
                      id="longDescription"
                      value={formData.longDescription}
                      onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                      placeholder="Comprehensive explanation of your strategy, including methodology, approach, and key concepts..."
                      className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      rows={8}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Strategy Details */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Strategy Details</h2>
                  <p className="text-[#717179] mb-6">Define your entry, exit, and risk management rules.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="entryCriteria" className="text-white">Entry Criteria</Label>
                    <Textarea
                      id="entryCriteria"
                      value={formData.entryCriteria}
                      onChange={(e) => setFormData({ ...formData, entryCriteria: e.target.value })}
                      placeholder="Describe your entry conditions, signals, and criteria..."
                      className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="exitStrategy" className="text-white">Exit Strategy</Label>
                    <Textarea
                      id="exitStrategy"
                      value={formData.exitStrategy}
                      onChange={(e) => setFormData({ ...formData, exitStrategy: e.target.value })}
                      placeholder="Describe your take profit and stop loss levels..."
                      className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="riskManagement" className="text-white">Risk Management</Label>
                    <Textarea
                      id="riskManagement"
                      value={formData.riskManagement}
                      onChange={(e) => setFormData({ ...formData, riskManagement: e.target.value })}
                      placeholder="Explain your position sizing, risk per trade, and overall risk management approach..."
                      className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label className="text-white">Timeline</Label>
                    <div className="space-y-2">
                      {formData.timeline.map((event, index) => (
                        <div key={index} className="flex items-center space-x-2 p-2 bg-[#262626] rounded">
                          <Calendar className="h-4 w-4 text-[#717179]" />
                          <span className="text-white text-sm">{event.date}</span>
                          <span className="text-[#717179] text-sm">-</span>
                          <span className="text-white text-sm">{event.event}</span>
                          <button
                            onClick={() => removeTimelineEvent(index)}
                            className="ml-auto text-[#717179] hover:text-white"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2">
                        <Input
                          type="date"
                          value={newTimelineEvent.date}
                          onChange={(e) => setNewTimelineEvent({ ...newTimelineEvent, date: e.target.value })}
                          className="bg-[#262626] border-[#333] text-white"
                        />
                        <Input
                          value={newTimelineEvent.event}
                          onChange={(e) => setNewTimelineEvent({ ...newTimelineEvent, event: e.target.value })}
                          placeholder="Event description"
                          className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                        />
                        <Button onClick={addTimelineEvent} size="sm" className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Review & Submit</h2>
                  <p className="text-[#717179] mb-6">Review your strategy before publishing.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#262626] rounded-lg">
                    <h3 className="text-white font-medium mb-2">{formData.title}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-[#4a9489] border-[#4a9489]">
                        {formData.category}
                      </Badge>
                      <span className="text-[#717179] text-sm">Target: ${formData.target}</span>
                    </div>
                    <p className="text-[#717179] text-sm">{formData.description}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <Label htmlFor="terms" className="text-sm text-[#717179]">
                      I agree to the terms and conditions and confirm that this strategy complies with platform guidelines.
                    </Label>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-[#262626]">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="bg-[#262626] border-[#333] text-white hover:bg-[#333] disabled:opacity-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white disabled:opacity-50"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white disabled:opacity-50"
                >
                  Publish Strategy
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CreateIdea; 