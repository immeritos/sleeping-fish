export default function Home() {
  return (
    <div className="mx-auto px-8 pt-32 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Welcome to My
          <span className="text-primary"> Personal Website</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          This is where I put the thoughts I&apos;m exploring, the things I&apos;m working on, and the moments I would like to remember.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/projects"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View Projects
          </a>
          <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            About <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}