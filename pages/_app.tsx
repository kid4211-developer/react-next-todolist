import { AppProps } from "next/app";
import Header from "@components/Header";
import GlobalStyle from "@styles/GlobalStyle";
import Footer from "@components/Footer";
import { wrapper } from "@store/index";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

// wrapper를 사용하여 redux store를 component에 전달 할 수 있게됨
export default wrapper.withRedux(app);
