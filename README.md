# Deliveroo Clone with REACT NATIVE!
Deliveroo Clone with REACT NATIVE! (Navigation, Redux, Tailwind CSS & Sanity.io)

<p align="row">
<img src="https://user-images.githubusercontent.com/73575643/187061336-56037bad-9d20-4a74-8aa3-4d66b14e9db1.png" width="400" >
 <img src="https://user-images.githubusercontent.com/73575643/187061351-1a291d83-35f1-4f16-b3e6-38d62d227b1e.png" width="400" >
 <img src= "https://user-images.githubusercontent.com/73575643/187061361-a18ef856-1953-4d83-b2c0-2b3116629a22.png" width="400" >
<img src= "https://user-images.githubusercontent.com/73575643/187061367-0445a611-7365-427b-9446-b4f7299c2549.png" width="400" >
 <img src= "https://user-images.githubusercontent.com/73575643/187061368-abf1d987-fd50-4a23-aa14-5d76a3c3a7c0.png" width="400" >
</p>



## Available Scripts
 Installing Expo CLI

```
npm install --global expo-cli
```
Initializing the project
```
npx create-expo-app deliveroo-clone 
cd deliveroo-clone
```

 Starting the development server
```
expo start
```
## Setup Tailwind CSS
```
npm install tailwindcss-react-native
npm install --save-dev tailwindcss
```
Tailwindcss requires a ``tailwind.config.js`` file with the content section configured to include the paths to all of your components and any other source files that contain Tailwind class names.
```
// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```
Add ``TailwindProvider`` at the top level of your application. The ``TailwindProvider`` creates the context for reactive styles and the atomic style objects.
```
import { TailwindProvider } from "tailwindcss-react-native";

function MyAppsProviders({ children }) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
```
### Configure your babel.config.js
```
// babel.config.js
module.exports = {
  plugins: ["tailwindcss-react-native/babel"],
};
```
