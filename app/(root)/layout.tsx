import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <NavigationBar />
      <div className="root-container">
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
