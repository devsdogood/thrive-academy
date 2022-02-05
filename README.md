# thrive-academy

This repo powers the website for Thrive Academy at [https://thrive-academy.vercel.app/](https://thrive-academy.vercel.app/). It is a TypeScript project using [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The theme is based on [Educenter from Themefisher](https://demo.themefisher.com/educenter/). The CMS data comes from [Contentful](https://app.contentful.com/spaces/4iktejpje112/home).

## Prerequisites

- Node.js (14.0 or newer recommended)
- GitHub access
- Contentful access
- Editor (VS Code recommended)
- optional: Vercel access

## Getting Started

First, install dependencies using:

```bash
npm install
```

Next, create a .env.local file in the root of the repository with the
following secrets defined (the tokens are blank, fill them in with your own
token):
```bash
CONTENTFUL_SPACE_ID=4iktejpje112
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN=
```

Last, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When running the dev server, the website auto-updates as you edit the file for
the most part. For most changes you make in Contentful, you'll need to 
manually refresh. If you make changes to the Site Settings or Navigation Menu
in contentful, you'll need to restart the dev server (those are pulled only
at startup time).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

When you open a Pull Request, a preview build will be deployed to a development server on Vercel automatically.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.
