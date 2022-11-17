# Next.js Starter Template

This is a [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) - you can create your own with this one-liner:

```sh
npx create-next-app my-app-name --example https://github.com/echo-health/nextjs-starter
```

- [Getting Started](#getting-started)
- [What's Included](#whats-included)
- [What's Not Included](#whats-not-included)
    - [State Management](#state-management)
    - [Data Fetching: gRPC](#data-fetching-grpc)
    - [Data Fetching: GraphQL](#data-fetching-graphql)
    - [Staff Authentication](#staff-authentication)

## Getting Started

Once the usual kubernetes configuration has been put in place, you'll need to configure a few aspects of your production environments. 

> First things first, you'll want to rename your app in `package.json` to something a little snazzier.

### Configure CI

Github secrets are used to configure the deployment of the app. The following secrets are required, some of which you may get for free from org-wide secrets:

| Secret | Scope | Description |
| --- | --- | -- |
| `APP_NAME` | Repo | Application name used for both Sentry and our Docker builds |
| `GITHUB_TOKEN` | Org | A Github token with access to the repository |
| `SENTRY_AUTH_TOKEN` | Org | A Sentry auth token with access to your repo |

### Sentry

You'll need to create a new Sentry project for your app, once you've done that, come back here and run all the magic with the following:

```sh
npx @sentry/wizard -i nextjs
```

### Deployment and Semantic Versioning

We use `anothrNick/github-tag-action` to bump our app version in `package.json` on every merge to `main`. This version tag is used in a few of places:

- You can display it to the user with `process.env.NEXT_PUBLIC_APP_VERSION`
- We will use it in our Sentry release tagging
- Git tags will be created for each release

> By default, the version will be bumped as a patch release. You can override this by adding a `#major`, `#minor` or `#patch` to your merge commit message.

## What's Included

- A configured setup of our recommended Framework, [Next.js](https://nextjs.org/)
- Our core [design system](http://github.com/echo-health/design-system) packages
- Sentry error reporting, [see configuration](#sentry) options

## What's Not Included

- [State Management](#state-management)
- [Data Fetching: gRPC](#data-fetching-grpc)
- [Data Fetching: GraphQL](#data-fetching-graphql)
- [Staff Authentication](#staff-authentication)

### State Management

Our tooling attempts to be agnostic of your choices when it comes to state management, however, before rolling with your favourite library, consider if you even really need a state management library, or if you can get away with using vanilla [React Contexts and Reducers](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context).

There are few React-ish, lightweight state management libraries kicking around which won't impose too much on your app architecture:

- https://recoiljs.org/
- https://jotai.org/
- https://github.com/pmndrs/zustand

### Data Fetching: gRPC

The [grpc-web-react](https://github.com/echo-health/design-system/tree/main/packages/utilities/grpc-web-react) package contains utilities for interacting with our backend gRPC services.

```sh
npm i @echo-health/grpc-web-react@latest
```

### Data Fetching: GraphQL

For our patient-facing apps, we use [Apollo Client](https://www.apollographql.com/docs/react/) to fetch data from our GraphQL API. 

### Staff Authentication

The [react-auth](https://github.com/echo-health/design-system/tree/main/packages/patterns/react-auth) package allows you to quickly add staff authentication and authorisation to internal tools.

```sh
npm i @echo-health/react-aut@latest
```
