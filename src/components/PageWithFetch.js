import React, { useState, useEffect } from 'react';
import { getItems } from './service';

const PageWithFetch = () => {

  const [itemsContainer, setItems] = useState([]);

  useEffect(() => { 
    getItems().then((response)=>response.json()).then((items)=>setItems(itemsContainer=items))
  }, [getItems])
  console.log(itemsContainer);

  const itemsList=itemsContainer.map(item=><p key={item.id}>{item.urls.small}</p>)

  return (
    <div>
      <h2>here is fetch request</h2>
      <div>
      //{itemsList}
      </div>
    </div>
  );
}

export default PageWithFetch;