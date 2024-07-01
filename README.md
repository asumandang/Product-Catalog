# Product Catalog

This is an application that displays list of products.

## Table of Contents

- [Features](#features)
- [Tech Used](#tech-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Build for production](#build-for-production)
- [Bundler](#bundler)
- [Project Tag](#project-tags)
- [Project Visualization](#explore-the-project-graph)
- [Generating New Library](#generating-new-library)
- [Improvements](#improvements)
- [Troubleshooting](#troubleshooting)

## Features

- View product list and details
- Search product
- View NX graph for project visualization

## Tech Used

This application uses the following technologies/tools

- Frontend: Angular, Ionic
- Monorepo Management: NX
- State management: RxAngular

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:

```bash
# git
git clone https://github.com/asumandang/Product-Catalog.git

# github cli
gh repo clone asumandang/Product-Catalog
```

2. Install the monorepo dependencies

```bash
npm install
```

## Running the application

Before starting the application, make sure you have the [prerequisites](#prerequisites) in your machine followed the [installation](#installation) process in the README.md

### Web Application

1. Run `npx nx serve product-catalog` to start the application.

## Build for production

Run `npx nx build product-catalog` to build the application. The build artifacts are stored in the output directory (`dist/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```shell
npx nx run-many -t <target1> <target2>

# example
npx nx run-many -t lint --fix
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

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
