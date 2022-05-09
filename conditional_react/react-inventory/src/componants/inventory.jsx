import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 21
  });
    // Create add and remove functions here that changes the
    // state.
 const Booksadd=(v)=>{
  setInv({...inv,books:inv.books+v})
 }
 const Notebookssub=(v)=>{
  setInv({...inv,notebooks:inv.notebooks+v})
 }

 const PenAdd=(el)=>{
  setInv({...inv,pens:inv.pens+el})
 }
 const inkpensAdd=(el)=>{
  setInv({...inv,inkpens:inv.inkpens+el})
 }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>Booksadd(1)}>+</button>
        <button className="circlularButton" onClick={()=>Booksadd(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>Notebookssub(1)}>+</button>
        <button className="circlularButton" onClick={()=>Notebookssub(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>PenAdd(1)}>+</button>
        <button className="circlularButton" onClick={()=>PenAdd(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>inkpensAdd(1)}>+</button>
        <button className="circlularButton" onClick={()=>inkpensAdd(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.inkpens+inv.notebooks+inv.pens}
    </div>
  );
};