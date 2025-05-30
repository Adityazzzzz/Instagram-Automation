import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold">Slide</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
        </div>
        
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
          <Link href="/dashboard">Login</Link>
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Transform Your<br />
          Instagram Engagement<br />
          <span className="text-blue-400">with Slide</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
          Slide revolutionizes how you connect with your audience on Instagram. Automate 
          responses and boost engagement effortlessly, turning interactions into valuable business 
          opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
            Learn More
          </Button>
        </div>
        
        {/* Profile Images */}
        <div className="flex justify-center space-x-6 mt-8">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="User 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="User 2" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="User 3" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="User 4" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-300">Select the perfect plan to boost your Instagram engagement</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
              <p className="text-gray-300">Perfect for getting started</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-300 ml-1">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">Boost engagement with target responses</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">Automate comment replies to enhance audience interaction</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">Turn followers into customers with targeted messaging</span>
              </div>
            </div>

            <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Smart AI Plan */}
          <div className="bg-white/15 backdrop-blur-sm rounded-lg p-8 border border-white/30 relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Smart AI Plan</h3>
              <p className="text-gray-300">Advanced features for power users</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-300 ml-1">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">All features from Free Plan</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">AI-powered response generation</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">Advanced analytics and insights</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">Priority customer support</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">Custom branding options</span>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </div>
    
  );
}