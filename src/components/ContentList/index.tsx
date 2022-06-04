import React, { useEffect, useState } from 'react';
import risoto from "../../assets/risoto.png"
import bolo from "../../assets/bolo.png"
import tabule from "../../assets/tabule.png"
import moqueca from "../../assets/moqueca.png"
import "./styles.css"

interface Recipes {
    id: number,
    nome: string,
    img: string,
}

const recipes: Recipes[] = [
    {id:1, nome:"risoto de abobora", img:risoto},
    {id:2, nome:"bolo de banana", img:bolo},
    {id:3, nome:"tabule tradicional", img:tabule},
    {id:4, nome:"moqueca", img:moqueca},
]

const ContentList: React.FC = () => {
const [recipesList, setRecipes] = useState<Recipes[]>(recipes) 
    const handleAddRecipe = () => {
        setRecipes(
            (oldRecipeList) =>
            [...oldRecipeList, {
                id: oldRecipeList.length + 1,
                nome: "Gororoba",
                img: tabule,
            }]
        )
    }
  return (
      <main className="content-container">
          <h1>todas as receitas</h1>
          <div className="grid-container">
              {recipesList.map(recipeUnit=>(
                  <div key={recipeUnit.id} className="grid-item">
                      <div className="card-container">
                        <img src={recipeUnit.img} alt={recipeUnit.nome} />
                        <span>{recipeUnit.nome}</span>
                        <button>Conferir</button>
                      </div>
                  </div>
              ))}
          </div>
          <button onClick={handleAddRecipe}>Adicionar Receita</button>
      </main>
  );
}

export default ContentList;