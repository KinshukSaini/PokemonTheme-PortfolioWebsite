import React from 'react'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';

const PokedexScreen = ({ activeSection }) => {
  const renderContent = () => {
    switch(activeSection) {
      case "Home":
        return <HomeScreen />;
      case "About":
        return <AboutScreen />;
      case "Projects":
        return <ProjectsScreen />;
      case "Contact":
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className='h-[83vh] w-[98vw] bg-gradient-to-r from-[#2B343A] to-[#0D1C23] mx-auto stroke-[1px] border-[14px] border-[#5D6BAD] rounded-[60px] flex items-center justify-center relative overflow-hidden'>
        {/* Animated Starfield Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Small fast stars */}
          <div className="absolute inset-0 animate-star-scroll-fast">
            {[...Array(50)].map((_, i) => (
              <div
                key={`fast-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 200}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Layer 2 - Medium stars */}
          <div className="absolute inset-0 animate-star-scroll-medium">
            {[...Array(30)].map((_, i) => (
              <div
                key={`medium-${i}`}
                className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 200}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 15}s`
                }}
              />
            ))}
          </div>
          
          {/* Layer 3 - Large slow stars */}
          <div className="absolute inset-0 animate-star-scroll-slow">
            {[...Array(20)].map((_, i) => (
              <div
                key={`slow-${i}`}
                className="absolute w-3 h-3 bg-white rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 200}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`
                }}
              />
            ))}
          </div>
          
          {/* Twinkling stars */}

        </div>
        
        {/* Content - maintaining original centering */}
        {renderContent()}
    </div>
  )
}

export default PokedexScreen
