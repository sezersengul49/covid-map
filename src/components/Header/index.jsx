import { FaVirus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Form from './Form';

import { TbVaccine } from "react-icons/tb";

const Header = () => {
const navigate= useNavigate();

  const handleSubmit= (e)=> {
    e.preventDefault();

    const text= e.target[0].value;

    navigate(`/detail?q= ${text} `)

  }
  return (
    <header className="flex bg-zinc-900 text-white py-5 px-5 md:px-20 justify-between items-center">
       <Link to= "/" className="flex items-center gap-2  " >
       <FaVirus className="text-green-500 text-xl" />
       <h1>Covid Takip</h1>
       </Link>

 <Form handleSubmit= {handleSubmit}/>
 <div className="flex items-center gap-3 max-md:hidden ">
  <p className="flex flex-col text-sm">
    <span> Bugün Aşı Olanlar  </span>
    <span className="text-gray-400">(123.456)</span>
  </p>
   <TbVaccine className="text-xl text-green-500"/>
 </div>

    </header>
  )
}

export default Header;