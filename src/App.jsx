import { useState, useEffect } from 'react'
import { 
  Globe, 
  Mail, 
  ExternalLink, 
  Sun, 
  Moon, 
  Sparkles,
  Hexagon
} from 'lucide-react'
import avatarImg from './assets/avatar.png'
import bgDark from './assets/bg-dark.png'
import bgLight from './assets/bg-light.png'

// Custom inline SVG components for brand icons since Lucide v4 removed them
const GithubIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const DiscordIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
)

const TelegramIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.017c.24-.213-.054-.334-.373-.12l-6.869 4.325-2.962-.924c-.643-.204-.658-.643.136-.953l11.57-4.46c.536-.2 1.008.123.824 1.06z" />
  </svg>
)

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeShimmer, setActiveShimmer] = useState(null)

  // Apply dark/light theme properties to documentElement
  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

  const profile = {
    name: "Muheez",
    avatar: avatarImg,
    bio: "Building @AstraHQ_ | Vibecoder",
    email: "muftaumuheez6@gmail.com"
  }

  const links = [
    {
      label: "My GitHub",
      url: "https://github.com/Muheez001",
      icon: <GithubIcon className="w-5 h-5" />
    },
    {
      label: "Follow on X",
      url: "https://x.com/_mprime/",
      icon: <TwitterIcon className="w-5 h-5" />
    },
    {
      label: "Discord",
      url: "https://discord.com/users/919513603755888680",
      icon: <DiscordIcon className="w-5.5 h-5.5" />
    },
    {
      label: "Telegram",
      url: "http://t.me/prime_1m",
      icon: <TelegramIcon className="w-5 h-5" />
    }
  ]

  return (
    <div className={`min-h-screen relative flex items-center justify-center p-4 transition-colors duration-500 overflow-hidden ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
      
      {/* Background Wallpaper Layer (10% Blurred) */}
      <div 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-cover bg-center bg-no-repeat transition-all duration-500 blur-[2px] scale-[1.01]"
        style={{ 
          backgroundImage: `url(${isDarkMode ? bgDark : bgLight})`
        }}
      />

      {/* Glossy Glass Sheen Overlay */}
      <div 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-gradient-to-tr from-white/15 via-transparent to-white/25 mix-blend-overlay backdrop-brightness-105"
      />

      {/* Floating Header Actions (Theme Toggle in Top-Right) */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-3 rounded-xl border backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer ${
            isDarkMode 
              ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20' 
              : 'bg-black/5 border-black/10 text-slate-600 hover:bg-black/10 hover:border-black/20'
          }`}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      <main key={isDarkMode} className={`w-full max-w-md border rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative z-10 transition-all duration-500 animate-slide-up ${
        isDarkMode 
          ? 'bg-gradient-to-b from-white/[0.07] to-white/[0.03] border-white/[0.12] shadow-black/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-b from-white/95 to-white/80 border-white/60 shadow-slate-300/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]'
      }`}>
        
        {/* Profile Info */}
        <div className="flex flex-col items-center text-center mb-8 relative">
          
          {/* Avatar Container with Sleek Border */}
          <div className="relative group mb-5 opacity-0 animate-slide-up" style={{ animationDelay: '80ms', animationFillMode: 'forwards' }}>
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className={`relative w-28 h-28 rounded-full object-cover border-2 shadow-xl ${
                isDarkMode ? 'border-white/10' : 'border-slate-200'
              }`}
            />
            <a 
              href={`mailto:${profile.email}`}
              className={`absolute bottom-0 right-0 p-2.5 rounded-full border shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-900 border-white/10 text-gray-300 hover:text-white hover:border-white/20' 
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
              title="Send an email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Name */}
          <h1 className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-2 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent' 
              : 'text-slate-900'
          } opacity-0 animate-slide-up`} style={{ animationDelay: '160ms', animationFillMode: 'forwards' }}>
            {profile.name}
          </h1>

          {/* Bio */}
          <p className={`text-sm md:text-base leading-relaxed max-w-sm mb-6 ${
            isDarkMode ? 'text-gray-400' : 'text-slate-600'
          } opacity-0 animate-slide-up`} style={{ animationDelay: '240ms', animationFillMode: 'forwards' }}>
            {profile.bio}
          </p>

        </div>

        {/* Links Section */}
        <div className="space-y-4 relative">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setActiveShimmer(index)
                setTimeout(() => setActiveShimmer(null), 850)
              }}
              style={{ 
                animationDelay: `${320 + index * 120}ms`,
                animationFillMode: 'forwards'
              }}
              className={`flex items-center justify-between p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 group opacity-0 animate-slide-up ${
                activeShimmer === index ? 'shimmer-effect' : ''
              } ${
                isDarkMode 
                  ? 'bg-white/[0.04] border-white/[0.08] text-gray-200 hover:bg-white/[0.09] hover:border-white/[0.22] hover:text-white hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.3)]' 
                  : 'bg-white/80 border-slate-200/50 text-slate-800 hover:bg-white hover:border-slate-300 hover:text-black hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.06)]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/[0.05] text-gray-300 group-hover:bg-white/10 group-hover:text-white' 
                    : 'bg-slate-50 text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-900'
                }`}>
                  {link.icon}
                </div>
                <span className="font-semibold text-sm md:text-base tracking-wide">
                  {link.label}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className={`mt-8 text-center text-xs tracking-wider font-semibold opacity-30`}>
          &copy; {new Date().getFullYear()} {profile.name} &bull; Shipped with Vibe
        </footer>

      </main>
    </div>
  )
}

export default App
