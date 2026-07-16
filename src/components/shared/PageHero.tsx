import type { PageHeroProps } from '@/interfaces/PageHeroProps';

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <>
      <h1 className="text-foreground sm:tet 3xl mb-1 text-2xl font-semibold sm:text-3xl">
        {title}
      </h1>
      <p className="text-muted-foreground mb-8 text-sm">{subtitle}</p>
    </>
  );
}
