import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Função para verificar se a rota está ativa
  const isActive = (path) => location.pathname === `/darhboard/${path}`;

  return (
    
    <div>
      <nav className="bg-gray-100 flex items-center justify-center h-16">
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
