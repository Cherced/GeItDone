import React from 'react';

function TodosLoading() {
  return (
    <div classname="AnimationLoading">
    <div className="containerLo">
    <p classname="LoadingTodo-text">Loading TODOs...</p>
      <div className="loaderLo" />
      </div>
    </div>    
  );
}

export { TodosLoading };
