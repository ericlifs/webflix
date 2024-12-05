## Getting Started

Before starting this challenge, please ensure you have cloned this repository and can run it locally.
You will be using your own environment.

To run the project:

```bash
npm install
npm run dev
```

You will need to view requirements on Figma - Please make an account and login [Here](https://www.figma.com/design/8IrWHW2aUQZN6ILycX6ug7/Liteflix-Challenge?node-id=0-1&node-type=canvas)

## Liteflix - Live Coding Challenge


### UI Section
In this challenge, you will implement the desktop main landing page showing "La Casa de Papel" at [Figma design](https://www.figma.com/design/8IrWHW2aUQZN6ILycX6ug7/Liteflix-Challenge?node-id=0-1&node-type=canvas).

You will be using pure css (the `index.css` file).

Buttons and links are to be implemented visually with no effects (no redirects or behaviors).

To handle the endpoint's images correctly, please refer to the developer documentation: https://developer.themoviedb.org/docs/image-basics


### API
To fetch the current movies in the apis, you will need to implement the api endpoints `api/featured` & `api/popular` and parse and provide the results, as well as fetching it from the client.

You are also expected to store all movies fetched from the api into the database, which uses Prisma and sqlite to store data.

### Tips & Tricks
- We want to see an implementation as pixel perfect as possible.
- The project uses Next.js Pages & Prisma. Leveraging its specific features is available but not required
- You may consult outside sources like Google or AI but absolutely cannot copy-paste code of any sort.

### Database

This project uses prisma & sqlite.

You can view the database with
```
npx prisma studio
```
Documentation for Prisma is viewable at https://www.prisma.io/docs
