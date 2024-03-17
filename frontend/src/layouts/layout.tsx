import Burger from "@/components/Burger";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
  showBurger?:boolean;
};

const Layout = ({ children,showBurger=false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showBurger && <Burger/>}
      
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
