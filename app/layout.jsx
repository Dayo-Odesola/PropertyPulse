import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <Navbar />
      <main>{children}</main>
    </html>
  );
};

export default MainLayout;
