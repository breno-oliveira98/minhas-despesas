import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaVenusMars } from 'react-icons/fa'; // Importando ícones do React Icons

const MenuProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 91234-5678",
    birthDate: "01/01/1990",
    address: "Rua das Flores, 123, São Paulo, SP",
    gender: "Masculino",
    cpf: "123.456.789-00",
    maritalStatus: "Solteiro",
    occupation: "Desenvolvedor de Software",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserInfo((prevInfo) => ({
          ...prevInfo,
          profilePhoto: e.target.result, // Atualiza com a URL da imagem carregada
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[500px]"> {/* Aumentei o tamanho do card */}
        <div className="relative w-32 h-32 mx-auto"> {/* Aumentei o tamanho da foto */}
          <img
            className="w-full h-full rounded-full border-4 border-blue-500 object-cover"
            src={userInfo.profilePhoto}
            alt="Profile"
          />
          {/* Botão de alterar foto */}
          <label
            htmlFor="profilePhotoInput"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold rounded-full opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
          >
            Alterar Foto
          </label>
          <input
            id="profilePhotoInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>
        {/* Nome */}
        <div>
          <h1 className="mt-6 text-3xl font-semibold text-gray-800 text-center"> {/* Aumentei o tamanho da fonte */}
            {isEditing ? (
              <input
                name="name"
                className="bg-slate-200 border-none outline-none rounded-md p-2 pl-4 w-full text-lg"
                type="text"
                value={userInfo.name}
                onChange={handleChange}
              />
            ) : (
              userInfo.name
            )}
          </h1>
        </div>
        {/* Email */}
        <div className="mt-6 space-y-3"> {/* Aumentei o espaçamento entre os campos */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500 text-xl" /> {/* Aumentei o tamanho do ícone */}
            {isEditing ? (
              <div>
                <label htmlFor="email" className="text-lg">Email</label> {/* Aumentei o tamanho da fonte do label */}
                <input
                  id="email"
                  name="email"
                  className="bg-slate-200 border-none outline-none rounded-md p-2 pl-4 w-full text-lg" 
                  type="text"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <span>{userInfo.email}</span>
            )}
          </div>
          {/* Telefone */}
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-500 text-xl" /> {/* Aumentei o tamanho do ícone */}
            {isEditing ? (
              <div>
                <label htmlFor="phone" className="text-lg">Telefone</label> {/* Aumentei o tamanho da fonte do label */}
                <input
                  id="phone"
                  name="phone"
                  className="bg-slate-200 border-none outline-none rounded-md p-2 pl-4 w-full text-lg"
                  type="text"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <span>{userInfo.phone}</span>
            )}
          </div>
          {/* Endereço */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500 text-xl" /> {/* Aumentei o tamanho do ícone */}
            {isEditing ? (
              <div>
                <label htmlFor="address" className="text-lg">Endereço</label> {/* Aumentei o tamanho da fonte do label */}
                <input
                  id="address"
                  name="address"
                  className="bg-slate-200 border-none outline-none rounded-md p-2 pl-4 w-full text-lg"
                  type="text"
                  value={userInfo.address}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <span>{userInfo.address}</span>
            )}
          </div>
          {/* Data de Nascimento */}
          <div className="flex items-center gap-3">
            <FaBirthdayCake className="text-blue-500 text-xl" /> {/* Aumentei o tamanho do ícone */}
            {isEditing ? (
              <div>
                <label htmlFor="birthDate" className="text-lg">Data de Nascimento</label> {/* Aumentei o tamanho da fonte do label */}
                <input
                  id="birthDate"
                  name="birthDate"
                  className="bg-slate-200 border-none outline-none rounded-md p-2 pl-4 w-full text-lg"
                  type="text"
                  value={userInfo.birthDate}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <span>{userInfo.birthDate}</span>
            )}
          </div>
          {/* Gênero */}
          <div className="flex items-center gap-3">
            <FaVenusMars className="text-blue-500 text-xl" /> {/* Aumentei o tamanho do ícone */}
            {isEditing ? (
              <div>
                <label htmlFor="gender" className="text-lg">Gênero</label> {/* Aumentei o tamanho da fonte do label */}
                <input
                  id="gender"
                  name="gender"
                  className="bg-slate-200 border-none outline-none rounded-md p-2 pl-4 w-full text-lg"
                  type="text"
                  value={userInfo.gender}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <span>{userInfo.gender}</span>
            )}
          </div>
        </div>

        <div className="mt-8 flex gap-6"> {/* Aumentei o espaçamento entre os botões */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-md shadow hover:bg-blue-600 transition"
          >
            {isEditing ? "Salvar" : "Editar"}
          </button>
          <button className="flex-1 bg-red-500 text-white py-3 px-6 rounded-md shadow hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuProfile;
