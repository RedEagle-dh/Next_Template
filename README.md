# Next.js Template Repository

This is a Next.js template repository equipped with a set of pre-configured dependencies to kickstart your project, including Prisma as an ORM. It incorporates a modern tech stack ensuring a robust and developer-friendly environment.

## Features

- **Next.js**: A powerful React framework that provides fast rendering and server-side functionality.
- **Prisma**: An ORM that helps you manage and interact with your database.
- **Next Auth**: An easy-to-use solution for authentication in Next.js applications.
- **React Icons**: Utilize popular icons in your React projects with ease.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Environment Setup

Next.js allows you to configure environment-specific settings using `.env` files. You should create the following files in your project root, based on your environment:

- `.env.local` - Stores your local environment variables. It's loaded in all environments except for when running production builds. This file should not be committed to your repository.
- `.env.development` - Contains environment variables for your development environment. Next.js automatically loads this file when you run `next dev`.
- `.env.production` - Holds environment variables for your production environment. This file is loaded when you run `next start`.
- `.env.test` - This file is used to define environment variables for your testing environment.

When you run `next dev`, Next.js will load `.env.local` and `.env.development`. For production builds, only `.env.production` is used.

It's important to never commit your `.env.local` file to your repository, as it may contain sensitive information specific to your local environment.

## Dependencies

Below are the main dependencies included in this template:

### Main Dependencies

- `next`: ^14.1.3
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `@nextui-org/react`: ^2.2.10
- `framer-motion`: ^11.0.14
- `next-auth`: ^4.24.7
- `react-icons`: ^5.0.1

### Development Dependencies

- `typescript`: ^5.4.2
- `@types/node`: ^20.11.28
- `@types/react`: ^18.2.67
- `@types/react-dom`: ^18.2.22
- `eslint`: ^8.57.0
- `eslint-config-next`: ^14.1.3
- `autoprefixer`: ^10.4.18
- `postcss`: ^8.4.36
- `tailwindcss`: ^3.4.1

## Getting Started

To get started with this template, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-name>
npm install
```

To run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to view your project.


## Contribution

Contributions are always welcome! Please read the contribution guidelines first.


## License

MIT

Feel free to clone and modify the repo as you want, but don't forget to add a reference back to this project!

## Using Prisma

This template uses Prisma as its ORM. Ensure you configure your Prisma schema file according to your database setup and include necessary migration commands in your workflow. For more details on using Prisma, visit the [Prisma documentation](https://www.prisma.io/docs/).

## For your information

Remember to set up your `.env` files according to the needs of your project. For more details on environment variables in Next.js, refer to the [official documentation](https://nextjs.org/docs/basic-features/environment-variables).