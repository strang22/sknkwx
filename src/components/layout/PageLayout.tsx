import { ReactNode } from 'react';
import { Grid, GridItem } from '@/components/ui/grid';
import { Container } from '@/components/ui/container';

interface PageLayoutProps {
  header: ReactNode;
  navigation?: ReactNode;
  main: ReactNode;
  sidebar?: ReactNode;
  footer: ReactNode;
  /**
   * Layout variant to use
   * - default: Standard 3-column layout
   * - compact: Narrower sidebar
   * - wide: Wider main content
   */
  variant?: 'default' | 'compact' | 'wide';
}

export function PageLayout({
  header,
  navigation,
  main,
  sidebar,
  footer,
  variant = 'default',
}: PageLayoutProps) {
  // Define responsive grid areas
  const mobileAreas = [
    'header', // Header
    'nav', // Navigation (collapsible)
    'main', // Main content
    'sidebar', // Sidebar (hidden)
    'footer', // Footer
  ];

  const tabletAreas = [
    'header header', // Header spans 2 columns
    'nav main', // Nav + Main side by side
    'sidebar sidebar', // Sidebar full width below
    'footer footer', // Footer spans all
  ];

  const desktopAreas =
    variant === 'wide'
      ? [
          'header header header header', // Header spans all
          'nav main main sidebar', // Wide main content
          'footer footer footer footer', // Footer spans all
        ]
      : variant === 'compact'
        ? [
            'header header header', // Header spans all
            'nav main sidebar', // Equal columns
            'footer footer footer', // Footer spans all
          ]
        : [
            'header header header', // Default layout
            'nav main sidebar', // Standard 3-column
            'footer footer footer', // Footer spans all
          ];

  return (
    <Grid
      // Responsive grid areas
      areas={{
        default: mobileAreas,
        md: tabletAreas,
        lg: desktopAreas,
      }}
      // Responsive columns
      cols={{
        default: 1, // Mobile: Single column
        md: 2, // Tablet: Two columns
        lg: variant === 'wide' ? 4 : 3, // Desktop: 3 or 4 columns
      }}
      // Responsive gaps
      gap={{
        x: { default: 2, md: 4, lg: 6 },
        y: { default: 4, md: 6, lg: 8 },
      }}
      className="min-h-screen"
    >
      <GridItem
        area="header"
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <Container size="xl">{header}</Container>
      </GridItem>

      {navigation && (
        <GridItem
          area="nav"
          className="
            border-b bg-background/95 backdrop-blur
            supports-[backdrop-filter]:bg-background/60 md:sticky md:top-[var(--header-height)]
            md:h-[calc(100vh-var(--header-height))] md:overflow-y-auto md:border-b-0 md:border-r
          "
        >
          {navigation}
        </GridItem>
      )}

      <GridItem area="main" className="py-6">
        <Container>{main}</Container>
      </GridItem>

      {sidebar && (
        <GridItem
          area="sidebar"
          className="
            border-t py-6 lg:sticky
            lg:top-[var(--header-height)]
            lg:h-[calc(100vh-var(--header-height))] lg:overflow-y-auto lg:border-l lg:border-t-0
          "
        >
          <Container size="sm">{sidebar}</Container>
        </GridItem>
      )}

      <GridItem area="footer" className="mt-auto border-t bg-muted/50">
        <Container size="xl">{footer}</Container>
      </GridItem>
    </Grid>
  );
}
