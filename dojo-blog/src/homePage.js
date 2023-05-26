import { useState } from "react";
const HomePage = () => {
    // const name = "shravani";
    const [name,setName] = useState('Shravani');
    const [age, setAge] = useState(20);
    const handleClick = () =>{
       setName('Om')
       setAge('15')
    }
    
    
    
    
    return (  
           
      <div className="content">
        <p>{name} is {age} years old. </p>
        {/* passing an argument to string */}
            <button onClick={handleClick}>Click me</button>
            
            </div>
    );
}
 
export default HomePage;