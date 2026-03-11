export default function Food(){
    
    const fruits = ["apple", "banana"];
    const vegetables = ["carrot", "spinach"];
    const grains = ["rice", "wheat"];

    const foodItems: string[] = [...fruits,...vegetables,...grains]
    console.log(foodItems.join(" "))
    return (
        <p>{foodItems.join(" ")}</p>
    )
    
}


