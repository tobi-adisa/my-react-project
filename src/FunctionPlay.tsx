export function FunctionPlay() {
    function todaysdate(a:number,b:number){
        return a + b
    }
    return (
      <div>
        <h2>{todaysdate(1,2)}</h2>
        <h2>{todaysdate(4,5)}</h2>
      </div>
    )
  }
  
  export default FunctionPlay