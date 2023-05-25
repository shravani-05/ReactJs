const HomePage = () => {
    const name = "shravani";
    const handleClick = () =>{
        window.alert("You just clicked the button " +  name);
        console.log("You just clicked the button");
    }
    
    const handleClickAgain = (name) => {
        window.alert("You just clicked the button " +  name);

    }
    
    
    return (  
           
      <div className="content">
        {/* passing an argument to string */}
            <button onClick={handleClick}>Click me</button>
            
            {/* passing an argument to the function */}
            
            <button onClick={() =>{window.alert("You just clicked the button " + name); }}>Click me again</button>
        </div>
    );
}
 
export default HomePage;