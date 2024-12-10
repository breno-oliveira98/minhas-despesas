import { RiAddBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { lancamentos } from "../../../database/lancamentos";
import { formatToBRL } from "../../../utils/BRL";
import { capitalizeWords } from "../../../utils/CapitalizeWords";
import { formatDateToBrazilian } from "../../../utils/Date";
import { TbEdit, TbTrash } from "react-icons/tb";
import { Tooltip } from "react-tooltip";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline, IoMdTime } from "react-icons/io";

export const Despesas = () => {
  const despesas = lancamentos.filter((lancamento) => lancamento.type === 'despesa').map((lancamento) => lancamento)
  return (
    <div>
      
        {despesas.length > 0 ? (
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
                  <th className="px-4 py-2 text-left border-b">Status</th>
                <th className="px-4 py-2 text-left border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map((conta) => (
                <tr className="hover:bg-gray-50" key={conta.id}>
                  <td className="px-4 py-2 border-b">{conta.title}</td>
                  <td className="px-4 py-2 border-b">{capitalizeWords(conta.type)}</td>
                  <td className="px-4 py-2 border-b">{formatToBRL(conta.amount)}</td>
                  <td className="px-4 py-2 border-b">{formatDateToBrazilian(conta.date)}</td>
                  <td className="px-4 py-2 border-b">{conta.category}</td>
                  <td className="px-4 py-2 border-b">{capitalizeWords(conta.frequencia)}</td>
                  <td className="px-4 py-2 border-b">{conta.parcelas}</td>
                  <td className="px-4 py-2 border-b">
                    <div className="flex">
                      <button className="my-check">
                        <IoMdCheckmarkCircleOutline size={24} fill="green" />
                        <Tooltip
                          anchorSelect=".my-check"
                          content="Pago"
                        />
                      </button>
                      <button className="my-time">
                      <IoMdTime size={24} fill="orange" />
                        <Tooltip
                          anchorSelect=".my-time"
                          content="No prazo"
                        />
                      </button>
                      <button className="my-alert">
                      <IoAlertCircleOutline size={24} color="red" />
                        <Tooltip
                          anchorSelect=".my-alert"
                          content="Vencida"
                        />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">
                    <div className="flex gap-2">
                      <TbEdit onClick={() => alert(`item ${conta.id} editado`)} size={22} className="cursor-pointer hover:text-yellow-300" />
                      <TbTrash onClick={() => alert(`item ${conta.id} excluido`)} size={22} className="cursor-pointer hover:text-red-600"/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        ) : (
          <div className="flex justify-center h-screen items-center">
          <div className="text-center">
            <strong>Não há despesas cadastradas neste mês</strong>
            <button className="w-[300px] mt-2 flex items-center justify-center gap-2 bg-gray-500 text-cyan-500 font-semibold rounded p-2">
              <RiAddBoxFill size={20}/>
              <Link to={"/lancamento"}>Cadastrar despesa</Link>
            </button>
          </div>
      </div>
        )}
    </div>
  );
};
