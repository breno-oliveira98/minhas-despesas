import React, { useState } from "react";
import { categorias } from "../categorias/Categorias";

const LancamentoForm = () => {
    
  const [frequencyType, setFrequencyType] = useState("única");

  const [formData, setFormData] = useState({
    title: "",
    type: "receita", // Default to 'receita' (receita)
    amount: "",
    date: "",
    category: "",
    frequencia: "",
    parcelas: 0
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction Submitted:", formData);
    alert("Transação cadastrada com sucesso!");
    // Limpar o formulário
    setFormData({
      title: "",
      type: "receita",
      amount: "",
      date: "",
      category: "",
      frequencia: "",
      parcelas: ""
    });
  };

  const handleFrequencyChange = (type) => {
    // Se o usuário clicar em 'sempre' ou 'parcelado', define 'mensal' como valor da frequência
    if (type === "sempre" || type === "parcelado") {
      setFormData({ ...formData, frequencia: "mensal" });
    } else {
      setFormData({ ...formData, frequencia: "" }); // Caso contrário, limpa a frequência
    }
    setFrequencyType(type);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Cadastro de Transação
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-600 mb-1">Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex.: Salário, Aluguel..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-gray-600 mb-1">Tipo</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.type === 'receita' ? "bg-green-300" : "bg-red-300"}`}
            >
              <option value="receita">Receita</option>
              <option value="despesa">Despesa</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-gray-600 mb-1">Valor</label>
            <input
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Ex.: 2500.00"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="0.01"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-600 mb-1">
              Data de Vencimento
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categoria */}
          <div>
            <label htmlFor="category">Categoria</label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.nome}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Frequencia */}
          <div className="flex justify-between px-2">
            <button
              type="button"
              className="px-2 bg-slate-200 rounded-full"
              onClick={() => handleFrequencyChange("única")}
            >
              Não repetir
            </button>
            <button
              type="button"
              className="px-2 bg-slate-200 rounded-full"
              onClick={() => handleFrequencyChange("sempre")}
            >
              Sempre
            </button>
            <button
              type="button"
              className="px-2 bg-slate-200 rounded-full"
              onClick={() => handleFrequencyChange("parcelado")}
            >
              Parcelado
            </button>
          </div>

          {/* SEMPRE */}
          {frequencyType === "sempre" && (
            <div className="flex">
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="frequencia"
                id="sempre"
                value={formData.frequencia}
                onChange={handleChange}
              >
                <option value="mensal">Mensalmente</option>
                <option value="6meses">A cada 6 meses</option>
                <option value="anual">Anualmente</option>
              </select>
            </div>
          )}

          {/* PARCELADO */}
          {frequencyType === "parcelado" && (
            <div className="flex flex-col">
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="frequencia"
                id="parcelado"
                value={formData.frequencia}
                onChange={handleChange}
              >
                <option value="mensal">Mensalmente</option>
                <option value="6meses">A cada 6 meses</option>
                <option value="anual">Anualmente</option>
              </select>
              <label htmlFor="quantidade">Número de Parcelas</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                name="parcelas"
                value={formData.parcelas || ""}
                onChange={handleChange}
                id="quantidade"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LancamentoForm;
