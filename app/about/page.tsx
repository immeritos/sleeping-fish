export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          About Me
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-6">
            Welcome to my personal website! I'm a passionate developer who loves creating
            beautiful and functional web applications.
          </p>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-6">
            This site showcases my work, thoughts, and photography. Built with modern
            technologies including Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Skills & Technologies
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>shadcn/ui & Radix UI</li>
            <li>Node.js</li>
            <li>And much more...</li>
          </ul>
        </div>
      </div>
    </div>
  )
}