import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/NavigationBar.scss";
import "../styles/Footer.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
