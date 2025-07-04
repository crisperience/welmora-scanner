import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['hr', 'de'],

  // Used when no locale matches
  defaultLocale: 'hr',

  // Don't use locale prefixes for the default locale
  localePrefix: 'as-needed',
});

export const config = {
  // Match all routes except static files, Next.js internals, and Vercel
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
