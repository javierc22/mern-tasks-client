import React from 'react';

const Proyect = ({proyect}) => {
  return (
    <li>
      <button
        type="button"
        className="j-btn j-btn-blank"
      >
        {proyect.name}
      </button>
    </li>
  );
}
 
export default Proyect;