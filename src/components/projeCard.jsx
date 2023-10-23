import React from "react";

const ProjeCard = ({ proje }) => {
  return (
    <>
      <div className="w-full h-auto p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all transform duration-500">
        {proje.resimDosya && (
          <img
            className="w-full h-60 object-cover rounded-t-md"
            src={require(`../images/${proje.resimDosya}`)}
            alt={proje.baslik}
          />
        )}

        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-700">{proje.baslik}</h1>
          <p className="text-sm mt-2 text-gray-700"> {proje.aciklama}</p>
          {proje.siteLink && (
            <div className="mt-4 mb-2 flex justify-between ">
              <button className="text-lg block font-semibold py-2 px-6 text-white hover:bg-orange-600 bg-orange-400 rounded-lg shadow hover:shadow-md transition duration-300">
                <a href={proje.siteLink}>Code...</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjeCard;
