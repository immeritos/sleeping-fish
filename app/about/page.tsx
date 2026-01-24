import Image from 'next/image'
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'About Me - Sleeping Fish',
  description: 'About Sleeping Fish',
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 mx-auto px-4 pt-24 md:pt-32 max-w-2xl">
        <div className="flex flex-col items-center space-y-8">
        {/* Portrait */}
        <Image
          src="/images/portrait.JPG"
          alt="Portrait"
          width={192}
          height={192}
          className="h-48 w-48 rounded-full"
        />
          
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="mailto:immeritos@gmail.com"
              className="text-foreground hover:opacity-60 transition-opacity"
              aria-label="Email"
            >
              <EnvelopeClosedIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/immeritos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-60 transition-opacity"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ye-dai-113a98232/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-60 transition-opacity"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Bio text */}
          <div className="max-w-none font-inter font-light">
            <p className="text-sm md:text-base leading-loose text-foreground">
              This is where I put the thoughts I&apos;m exploring, the things I&apos;m working on, and the moments I would like to remember. I hope that in sharing them, I can grow a little myself, and it may be helpful to others.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}