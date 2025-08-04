import Button from "./compoments/Button";



function App() {
  
  return (
    <div>
      <Button color="secondary" onClick={()=>console.log("Clicked")}>My button</Button> 
    </div>
  );
}
export default App;
