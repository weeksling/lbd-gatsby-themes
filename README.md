Gatsby Themes — Learning By Doing
------

This will serve as our sample repository for building our first Gatsby theme!

Implemented following [this tutorial](https://www.gatsbyjs.org/tutorial/building-a-theme/) from the great [Jason Lengstorf](https://twitter.com/jlengstorf).


# Working with this projects is slightly unique compared to traditional Node projects...

This repo is architected to use Yarn workspaces to separate the monorepo into individual packages. (Another option here might be Lerna, which we may explore later — Please fork if you'd like to help!)

Each package is referred to by name in the `./package.json`:

```
{
  ...,
  "workspaces": ["gatsby-theme-events", "site"],
  ...
}
```

These "workspaces" refer to the "name" property in the `package.json` at the root of each submodule.

To interact with these packages, you can use any `yarn` command prefixed with `yarn workspace <name> ...`

For instance, to add our gatsby dependencies to the `site` module, we would run `yarn workspace site add gatsby react react-dom gatsby-theme-events@*`

# Runing the project

To start the full site, with both the theme and the site, use `yarn workspace site develop`
To work on the theme on its own, you can use `yarn workspace gatsby-theme-events develop`
