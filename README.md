# Weather App

## Location Provider

React makes component reuse easy with concepts like `Context`, `HOC`s, and `renderProps`.
This simple application demonstrates a `LocationProvider` based on the native `navigator.geolocation` API.

### To Use

Wrap your app in `LocationProvider` and export any components that need location using `withLocation`.
Components will be injected with the `location` prop, which is an array of Lat, Lon coordinates.

## Hooks

This application also demonstrates the use of the 16.7 alpha feature, hooks.  Hooks are used to provide AJAX effects.
The approach is similar to `effects` when using `ngrx` with `Angular`.