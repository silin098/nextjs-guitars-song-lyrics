import Navbar from "./NavBar";
export default function Layout({ children }) {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
