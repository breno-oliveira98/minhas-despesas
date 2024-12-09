import { RiAddBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Despesas = () => {
  const despesas = [];
  return (
    <div className="flex justify-center h-screen items-center">
      {despesas.length > 0 ? (
        despesas
      ) : (
        <div className="text-center">
          <strong>Não há despesas cadastradas neste mês</strong>
          <button className="w-[300px] mt-2 flex items-center justify-center gap-2 bg-gray-500 text-cyan-500 font-semibold rounded p-2">
            <RiAddBoxFill size={20}/>
            <Link to={"/lancamento"}>Cadastrar despesa</Link>
          </button>
        </div>
      )}
    </div>
  );
};
