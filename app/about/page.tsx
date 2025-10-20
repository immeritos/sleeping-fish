import Image from 'next/image'
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

export default function About() {
  return (
    <div className="mx-auto px-4 pt-20 pb-16 max-w-2xl">
      <div className="flex flex-col items-center space-y-8">
        {/* Portrait */}
        <Image
          src="/placeholder.svg"
          alt="Portrait"
          width={192}
          height={192}
          className="h-48 w-48 rounded-full"
        />
        
        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="mailto:your-email@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <EnvelopeClosedIcon className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitHubLogoIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Bio text */}
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Daymoon comes from those rare moments when you see the moon shining in the daytime — simple, quiet, and a little magical. This is where I put the thoughts I&apos;m exploring, the things I&apos;m working on, and the moments I would like to remember. I hope that in sharing them, I can grow a little myself, and it may be helpful to others.
          </p>
        </div>
      </div>
    </div>
  )
}