import React from "react";
import { Link, useLocation } from "react-router-dom";
import { lancamentos } from "../../../database/lancamentos";
import { formatToBRL } from "../../../utils/BRL/index";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import LancamentoForm from "../../forms/LancamentoForm";

const Navbar = () => {
  const location = useLocation();

  // Filtra as receitas e despesas corretamente
  const valorReceitas = lancamentos
    .filter((lancamento) => lancamento.type === "receita")
    .map((lancamento) => lancamento.amount);
  const valorDespesas = lancamentos
    .filter((lancamento) => lancamento.type === "despesa")
    .map((lancamento) => lancamento.amount);

  // Calcula o total das receitas e despesas
  const totalReceitas = valorReceitas.reduce(
    (acumulador, valorTotal) => acumulador + valorTotal,
    0
  );
  const totalDespesas = valorDespesas.reduce(
    (acumulador, valorTotal) => acumulador + valorTotal,
    0
  );

  // Calcula o balanço
  const totalBalanco = totalReceitas - totalDespesas;

  // Função para verificar se a rota está ativa
  const isActive = (path) => location.pathname === `/dashboard/${path}`;

  return (
    <div>
      {/* Valores */}
      <section className="grid grid-cols-2">
        <div className="col-span-3 text-center text-2xl">
          <p>Balanço do mês</p>
          <strong>{formatToBRL(totalBalanco)}</strong>
        </div>

        <div className="text-center text-xl">
          <div className="flex justify-center items-center gap-1">
            <IoMdAddCircle fill="green" />
            <p>Receitas</p>
          </div>
          <strong>{formatToBRL(totalReceitas)}</strong>
        </div>
        <div className="text-center text-xl">
          <div className="flex justify-center items-center gap-1">
            <IoMdRemoveCircle fill="red" />
            <p>Despesas</p>
          </div>
          <strong>{formatToBRL(totalDespesas)}</strong>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-gray-100 flex items-center justify-between mb-2 h-16 px-6">
        {/* Navegação centralizada */}
        <div className="flex justify-center gap-20 w-full">
          {/* Link Todos */}
          <Link
            to={"/dashboard/todos"}
            className="font-semibold text-2xl hover:text-blue-400"
          >
            <div
              className={`border-b ${
                isActive("todos")
                  ? "border-blue-400 border-b-2 font-semibold text-blue-400"
                  : "border-none"
              }`}
            >
              Todos
            </div>
          </Link>

          {/* Link Receitas */}
          <Link
            to={"/dashboard/receitas"}
            className="font-semibold text-2xl hover:text-green-400"
          >
            <div
              className={`border-b ${
                isActive("receitas")
                  ? "border-green-400 border-b-2 font-semibold text-green-400"
                  : "border-none"
              }`}
            >
              Receitas
            </div>
          </Link>

          {/* Link Despesas */}
          <Link
            to={"/dashboard/despesas"}
            className="font-semibold text-2xl hover:text-red-400"
          >
            <div
              className={`border-b ${
                isActive("despesas")
                  ? "border-red-400 border-b-2 font-semibold text-red-400"
                  : "border-none"
              }`}
            >
              Despesas
            </div>
          </Link>
        </div>

        {/* LancamentoForm à direita */}
        <div className="ml-auto my-">
          <LancamentoForm />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
