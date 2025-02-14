import { ComponentsProvider, DrawerProvider } from "../index";
import AuthProvider from "../authProvider/AuthProvider";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <DrawerProvider>
        <ComponentsProvider>
          {children}
        </ComponentsProvider>
      </DrawerProvider>
    </AuthProvider>
  );
};

export default AppProviders;
