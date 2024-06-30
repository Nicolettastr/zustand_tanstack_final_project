import { MyRoutes, Light, Dark, AuthContextProvider } from "./index";

import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export const ThemeContext = createContext(null);
function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
       <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MyRoutes />
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </QueryClientProvider>
     
    </>
  );
}

export default App;
