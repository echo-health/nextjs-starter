# NextJS Starter 

This is a [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can create your own with this one-liner:

```cli
npx create-next-app my-app-name --example https://github.com/echo-health/nextjs-starter
```

## What's included

- A configured setup of our recommended Framework, [Next.js](https://nextjs.org/)
- Our various [Design System](http://github.com/echo-health/design-system) packages
- Sentry error reporting

## Things not included

### State management

Our tooling attempts to be agnostic of your choices when it comes to state management, however, before rolling with your favourite library, consider if you even really need a state management library, or if you can get away with using vanilla [React Context and Reducer](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context).

Overall, try to avoid overcomplicating things with highly opinionated paradigms specific to a particular library. As of 2022, there are few React-ish, lightweight state management libraries kicking around which won't impose too much on your app architecture:

- https://recoiljs.org/
- https://jotai.org/
- https://github.com/pmndrs/zustand

### Internal tooling

You can install a few optional packages to help you get started if you are rolling a new internal tool:

- `npm i @echo-health/react-auth` to add [react-auth](https://github.com/echo-health/design-system/tree/main/packages/patterns/react-auth) to internal tools
- `npm i @echo-health/grpc-web-react` to add [grpc-web-react](https://github.com/echo-health/design-system/tree/main/packages/utilities/react-web-react) utilities for handling gRPC requests to our services




