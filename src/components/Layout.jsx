import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container w-4/5 mx-auto p-2">{children}</div>
    </>
  );
};

export default Layout;
