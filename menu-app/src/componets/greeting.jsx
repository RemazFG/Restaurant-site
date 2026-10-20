
function Greeting({name, age}){
    return(
    <div>
        <h1>Hello this is {name} and I have {age} years old</h1>
        <p>This text is coming from React component, not the HTML file.</p>
    </div>
    );
}

export default Greeting ;