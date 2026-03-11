export type StudentProps = {
    name?:string;
    age?:number;
    isStudent?:boolean;
}

const person = {name: "Tobi", age: 30, complexion:"brown", job:"student"}
const {complexion,age,...rest} = person 
console.log (complexion,age)
console.log({...rest})
console.log(rest)
export default function Student({name="Anonymous",age=0,isStudent= false}) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>IsStudent: {isStudent?"Yes, I'm a student":"no"}</p>
            {/* <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.isStudent?"Yes, I'm a student":"no"}</p>
            <p>IsStudent: {JSON.stringify(props.isStudent)}</p> */}
        </div>
    )
}
