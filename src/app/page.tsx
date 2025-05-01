import Image from 'next/image';
import { DesignShowcase } from '@/components/DesignShowcase';
import { PageLayout } from '@/components/layout/PageLayout';

export default function Home() {
  return (
    <PageLayout
      header={
        <header className="flex items-center justify-between border-b p-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
          <nav className="flex gap-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </header>
      }
      navigation={
        <nav className="space-y-2 p-4">
          <a href="/dashboard" className="block hover:underline">
            Dashboard
          </a>
          <a href="/projects" className="block hover:underline">
            Projects
          </a>
          <a href="/settings" className="block hover:underline">
            Settings
          </a>
        </nav>
      }
      main={
        <main className="space-y-6">
          <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
          <DesignShowcase />
        </main>
      }
      sidebar={
        <aside className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <h3 className="mb-2 font-medium">Quick Links</h3>
            <div className="space-y-2">
              <a
                className="flex items-center gap-2 hover:underline"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/file.svg" alt="Learn" width={16} height={16} />
                Learn Next.js
              </a>
              <a
                className="flex items-center gap-2 hover:underline"
                href="https://vercel.com/templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/window.svg"
                  alt="Examples"
                  width={16}
                  height={16}
                />
                View Examples
              </a>
            </div>
          </div>
        </aside>
      }
      footer={
        <footer className="flex items-center justify-center p-4 text-sm text-muted-foreground">
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Image src="/globe.svg" alt="Globe" width={16} height={16} />
            Built with Next.js
          </a>
        </footer>
      }
    />
  );
}
