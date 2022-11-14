# NextJS Starter 

This is a [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) - you can create your own with this one-liner:

```cli
npx create-next-app my-app-name --example https://github.com/echo-health/nextjs-starter
```

## What's included

- A configured setup of our recommended Framework, [Next.js](https://nextjs.org/)
- Our various [Design System](http://github.com/echo-health/design-system) packages
- Sentry error reporting

## Things you may want to add

- [State Management](#state-management)
- [Data Fetching: gRPC](#data-fetching-grpc)
- [Data Fetching: GraphQL](#data-fetching-graphql)
- [Staff Authentication](#staff-authentication)

### State Management

Our tooling attempts to be agnostic of your choices when it comes to state management, however, before rolling with your favourite library, consider if you even really need a state management library, or if you can get away with using vanilla [React Contexts and Reducers](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context).

Try to avoid overcomplicating things with highly opinionated paradigms specific to particular libraries. There are few React-ish, lightweight state management libraries kicking around which won't impose too much on your app architecture:

- https://recoiljs.org/
- https://jotai.org/
- https://github.com/pmndrs/zustand

### Data Fetching: gRPC

The [grpc-web-react](https://github.com/echo-health/design-system/tree/main/packages/utilities/react-web-react) package containts utilities for fetching and typing data from our backend gRPC services. 

```cli
npm i @echo-health/grpc-web-react@latest
```

### Data Fetching: GraphQL

For our patient-facing apps, we use [Apollo Client](https://www.apollographql.com/docs/react/) to fetch data from our GraphQL API. 

### Staff Authentication

The [react-auth](https://github.com/echo-health/design-system/tree/main/packages/patterns/react-auth) package allows you to quickly add staff authentication and authorisation to internal tools.

```cli
npm i @echo-health/react-aut@latest
```


