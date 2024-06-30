# Product

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve product` to start the development server. Happy coding!

## Build for production

Run `npx nx build product` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

## Bundler

Because of `esbuild` not supported by Ionic, `webpack` is used for bundling. See [Github Issue](https://github.com/ionic-team/ionic-framework/issues/27251#issuecomment-1516406255)

To debug bundle sizes, you may run:

```shell
# for visualizing source maps using `source-map-explorer`
npx nx run product-catalog:visualize-bundles:analysis
```

## Project Tags

All projects should adhere to the tag prefix below to make the workspace manageable:

- `type` - signifies what the library type
  - `app` - the application itself; it can only depend on other library but cannot be imported by other
  - `ui` - contains dumb or reusable components
  - `feature` - contains smart components (usually contains state)
  - `shell` - entrypoint of a bounded context / functions as an orchestrator of applications
  - `data-access` - contains utilities for data fetching
  - `dto` - data types (types, interface, etc.)
- `bc` (bounded context) - signifies the domain / bounded context the project is (e.g. `product`, `user`, etc.)

To visualize the projects' dependencies, see [project graph](#explore-the-project-graph)

The folder structure is heavily inspired by [Shell Library Patterns with NX and Monorepo Architecture](https://angularindepth.com/posts/1117/the-shell-library-patterns-with-nx-and-monorepo-architectures)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Generating New Library

Run the following commands when generating a new library

```shell
npx nx g @nx/angular:library --name=<library-name> --directory=libs/<bounded-context>/<library-name> --tags=<type-tag>,<bc-tag> # see project tags in the README.md to determine what tags to add
npx nx g nx-stylelint:configuration --project=<library_name>
```

### Generation sample
```shell
# Shell 
npx nx g @nx/angular:library --name=product-shell --directory=libs/product/shell --tags=type:shell,bc:product

# Feature
npx nx g @nx/angular:library --name=product-home --directory=libs/product/feature-product-home --tags=type:feature,bc:product

# Data Access
npx nx g @nx/angular:library --name=product-data-access --directory=libs/product/data-access --tags=type:data-access,bc:product

# DTO
npx nx g @nx/angular:library --name=shared-dto --directory=libs/shared/dto --tags=type:dto,bc:shared
```

Alternatively, you can install [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) to install libraries/projects with UI.

## Improvements

- Create configuration for immutable web app
- Create generator to add default caching when configuring nx-stylelint

## Troubleshooting

- NX Issues

Reset nx cache by using command `npx nx reset` or delete `.cache` and `node_modules/.cache`.
