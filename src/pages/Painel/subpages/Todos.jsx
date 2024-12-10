import { RiAddBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { formatToBRL } from "../../../utils/BRL";
import { lancamentos } from "../../../database/lancamentos";
import { capitalizeWords } from "../../../utils/CapitalizeWords";
import { formatDateToBrazilian } from "../../../utils/Date";
lancamentos


export const Todos = () => {
  

  return (
    <div>
      {lancamentos.length > 0 ? (
        <div>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left border-b">Titulo</th>
                  <th className="px-4 py-2 text-left border-b">Tipo</th>
                  <th className="px-4 py-2 text-left border-b">Valor</th>
                  <th className="px-4 py-2 text-left border-b">Vencimento</th>
                  <th className="px-4 py-2 text-left border-b">Categoria</th>
                  <th className="px-4 py-2 text-left border-b">Frequência</th>
                  <th className="px-4 py-2 text-left border-b">Parcelas</th>
              </tr>
            </thead>
            <tbody>
              {lancamentos.map((conta) => (
                <tr className="hover:bg-gray-50" key={conta.id}>
                  <td className="px-4 py-2 border-b">{conta.title}</td>
                  <td className="px-4 py-2 border-b">{capitalizeWords(conta.type)}</td>
                  <td className="px-4 py-2 border-b">{formatToBRL(conta.amount)}</td>
                  <td className="px-4 py-2 border-b">{formatDateToBrazilian(conta.date)}</td>
                  <td className="px-4 py-2 border-b">{conta.category}</td>
                  <td className="px-4 py-2 border-b">{capitalizeWords(conta.frequencia)}</td>
                  <td className="px-4 py-2 border-b">{conta.parcelas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center">
          <div className="text-center">
            <strong>Não há nenhuma conta cadastradas</strong>
            <button className="w-[300px] mt-2 flex items-center justify-center gap-2 bg-gray-500 text-cyan-500 font-semibold rounded p-2">
              <RiAddBoxFill size={20} />
              <Link to={"/lancamento"}>Cadastrar conta</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
