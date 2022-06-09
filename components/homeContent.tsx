import React, { useState } from 'react';



var dta = [];

export default function HomeScreen(){

const [item, setItem] = useState(); 

function itemSetter(e){
setItem(e.target.value);
}


function itemAdder(e){
e.preventDefault();
dta.push({name: item});
localStorage.setItem('items', JSON.stringify(dta));

}

return (


<>
<div className="">
<form className="text-white">
<div className="mb-3">
<label>Item Name</label>
<input className="form-control" onChange={ itemSetter } type="text"/>
</div>

<div className="mb-3">
<button className="btn btn-primary" onClick={itemAdder}>ADD</button>
</div>

</form>
</div>
</>


);

}
