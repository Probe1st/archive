import Footer from "./template/Footer";
import Header from "./template/Header";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
