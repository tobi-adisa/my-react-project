import Student from "./Student";
import { Button, buttonProps } from "./Props";

import Food from "./Fruits";

export default function Component () {
    return (
        <>
            {/* <Student name={"Tobi"} age={10} isStudent={true}/> */}
            <Button{...buttonProps}/>
            <Food />
        </>
    )
}

