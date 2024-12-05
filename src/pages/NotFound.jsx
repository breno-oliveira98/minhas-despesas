import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! Página não encontrada.</p>
        <p className="text-gray-500 mt-2">A página que você está procurando não existe ou foi movida.</p>
        <div className="mt-6">
          <a href="/dashboard" className="text-gray-600 hover:text-gray-800 font-semibold">
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
