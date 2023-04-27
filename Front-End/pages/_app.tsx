import Layout from '../components/Layout';
import "../styles/globals.css";

const Myapp = ({Component , pageProps}) => {
  return (
    <Layout>
         <Component {...pageProps}/>
    </Layout>
  )
}

export default Myapp;