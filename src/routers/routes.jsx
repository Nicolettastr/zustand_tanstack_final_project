import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Login,
  ProtectedRoute,
  ConfiguracionTemplate,
  Verdadobebida,
} from "../index";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute accessBy="non-authenticated">
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path="/configuracion/verdadobebida"
          element={
            <ProtectedRoute accessBy="authenticated">
              <Verdadobebida />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute accessBy="authenticated">
              <ConfiguracionTemplate />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
