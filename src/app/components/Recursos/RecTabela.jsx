import React from 'react';

const GridCell = ({ customStyle, children }) => (
  <div className={`bg-slate-100 rounded-xl p-4 ${customStyle}`}>
    {children}
  </div>
);

const RecTabela = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        
        <GridCell customStyle="text-red-500">
          
          
        </GridCell>
        <GridCell customStyle="text-slate-500 bg-slate-300">
          <h1 className="text-xl font-bold text-center">Sala de Aula</h1>
          
        </GridCell>

        <GridCell customStyle="text-slate-500 bg-slate-300">
          <h1 className="text-xl font-bold text-center">Outros Espaços</h1>
        </GridCell>
        <GridCell customStyle="text-green-500">
          
        <h1 className="text-xl font-bold text-center">Modelo Tradicional</h1>
        </GridCell>
        <GridCell customStyle="text-green-500">
          
          <p>Texto dummy 3.</p>
          <p>Outro texto.</p>
        </GridCell>
        <GridCell customStyle="text-green-500">
          
          <p>Texto dummy 3.</p>
          <p>Outro texto.</p>
        </GridCell>
        <GridCell customStyle="text-green-500">
          
        <h1 className="text-xl font-bold text-center">Sala de Aula Invertida</h1>
        </GridCell>
        <GridCell customStyle="text-green-500">
          
          <p>Texto dummy 3.</p>
          <p>Outro texto.</p>
        </GridCell>
        <GridCell customStyle="text-green-500">
          
          <p>Texto dummy 3.</p>
          <p>Outro texto.</p>
        </GridCell>
        
      </div>
    </div>
  );
};

export default RecTabela;

