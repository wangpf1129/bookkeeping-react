import React from 'react';

// require('icons/home.svg');
// require('icons/assets.svg');
// require('icons/statistics.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type PropsType = {
  name:string
}
function Icon(props:PropsType) {
  return (
          <svg className="icon">
            <use xlinkHref={'#'+props.name}/>
          </svg>
  );
}

export default Icon;