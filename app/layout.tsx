import { StoreProvider } from "./StoreProvider";
import { ToastContainer } from "react-toastify";

import "./../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import AxiosInterceptor from "utils/AxiosInterceptor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <ToastContainer />
          <AxiosInterceptor />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
