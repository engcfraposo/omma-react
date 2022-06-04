import React from 'react';
import risoto from "../../assets/risoto.png"
import "./styles.css"

const ContentList: React.FC = () => {
  return (
      <main className="content-container">
          <h1>todas as receitas</h1>
          <div className="grid-container">
              {[1,2,3,4].map(_qty=>(
                  <div className="grid-item">
                      <div className="card-container">
                        <img src={risoto} alt="risoto" />
                        <span>Risoto</span>
                        <button>Conferir</button>
                      </div>
                  </div>
              ))}
          </div>
      </main>
  );
}

export default ContentList;