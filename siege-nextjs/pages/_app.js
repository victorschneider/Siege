import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {RecoilRoot} from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
