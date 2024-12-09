import React from "react";
import { Link, useLocation } from "react-router-dom";
import { lancamentos } from "../../../database/lancamentos";


const Navbar = () => {
  const location = useLocation();


   // Filtra as receitas e despesas corretamente
  const valorReceitas = lancamentos.filter((lancamento) => lancamento.type === 'receita').map((lancamento) => lancamento.amount);
  const valorDespesas = lancamentos.filter((lancamento) => lancamento.type === 'despesa').map((lancamento) => lancamento.amount);

  // Calcula o total das receitas e despesas
  const totalReceitas = valorReceitas.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0);
  const totalDespesas = valorDespesas.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0);

  // Calcula o balanço
  const totalBalanco = totalReceitas - totalDespesas;




  // Função para verificar se a rota está ativa
  const isActive = (path) => location.pathname === `/darhboard/${path}`;

  return (
    
      <div>
        <section className="grid grid-cols-2">
          <div className="col-span-3 text-center">
            <p>Balanço do mês</p>
            <p>{totalReceitas}</p>
            </div>
          <div className="col-span-3 text-center">2</div>
          <div className="col-span-3 text-center">3</div>
        </section>
        <nav className="bg-gray-100 flex items-center justify-center mb-2 h-16">
          <div className="flex justify-center gap-20">
            {/* Link Todos */}
            <Link
              to="/dashboard/todos"
              className={`text-current hover:bg-gray-200 text-lg font-medium ${isActive("/todos") ? "border-gray-600 border-b-2 font-semibold text-grayborder-gray-600"
                            : "border-none"}`}
            >
              Todos
            </Link>
            {/* Link Receitas */}
            <Link
              to="/dashboard/receitas"
              className={`text-current hover:bg-gray-200 text-lg font-medium ${isActive("/receitas") ? "border-gray-600 border-b-2 font-semibold text-grayborder-gray-600"
                            : "border-none"}`}
            >
              Receitas
            </Link>
            {/* Link Despesas */}
            <Link
              to="/dashboard/despesas"
              className={`text-current hover:bg-gray-200 text-lg font-medium ${isActive("/despesas") ? "border-gray-600 border-b-2 font-semibold text-grayborder-gray-600"
                            : "border-none"}`}
            >
              Despesas
            </Link>
          </div>
        </nav>
      </div>

  );
};

export default Navbar;
