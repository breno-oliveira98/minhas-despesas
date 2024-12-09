import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Painel } from "../pages/Painel/Painel";
import Registro from "../pages/Registro";
import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import { Lancamento } from "../pages/Lancamento";
import NotFound from "../pages/NotFound";
import { Layout } from "../components/layout";
import { PainelLayout } from "../components/layout/painelLayout/PainelLayout";
import { Todos } from "../pages/Painel/subpages/Todos";
import { Receitas } from "../pages/Painel/subpages/Receitas";
import { Despesas } from "../pages/Painel/subpages/Despesas";
export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<PainelLayout />}>
          <Route element={<Navigate to="todos" />} />
          <Route path="todos" element={<Todos />} />
          <Route path="receitas" element={<Receitas />} />
          <Route path="despesas" element={<Despesas />} />
        </Route>

        <Route path="/registrar" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/lancamento" element={<Lancamento />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="dashboard" />} />
    </Routes>
  );
};
