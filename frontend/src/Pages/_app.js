import Page from '../components/Page'
import '../App.css'

export default function App({Component, pageProps}) {
  return (
    <Page>
      <Component {...pageProps}/>
    </Page>
  );
};

