import React, { useState } from "react";
import { Link } from "react-router-dom";


const LoginForm = () => {
  // Estado para armazenar os valores dos campos de login
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados ao backend
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo Senha */}
          <div className="mb-5">
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2 mb-2">
            <input type="checkbox" name="" id="lembrar" />
            <label htmlFor="lembrar">Lembrar-me</label>
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full mb-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Entrar
          </button>
          <div className="text-center">
            <span>
                Ainda não tem uma conta? Cadastre-se <Link to={"/registrar"} className="underline">aqui</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
