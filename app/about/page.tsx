import Image from 'next/image'
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 mx-auto px-4 pt-20 max-w-2xl">
        <div className="flex flex-col items-center space-y-8">
        {/* Portrait */}
        <Image
          src="/portrait.png"
          alt="Portrait"
          width={192}
          height={192}
          className="h-48 w-48 rounded-full"
        />
          
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="mailto:fanjingwenvi@gmail.com"
              className="text-foreground hover:text-foreground/80 transition-colors"
              aria-label="Email"
            >
              <EnvelopeClosedIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/fanjingwenvi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/80 transition-colors"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/fanjingwenvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/80 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Bio text */}
          <div className="max-w-none">
            <p className="text-sm leading-relaxed text-foreground">
              Daymoon comes from those rare moments when you see the moon shining in the daytime — simple, quiet, and a little magical. This is where I put the thoughts I&apos;m exploring, the things I&apos;m working on, and the moments I would like to remember. I hope that in sharing them, I can grow a little myself, and it may be helpful to others.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}