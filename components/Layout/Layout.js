import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
