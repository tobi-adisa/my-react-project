import type { UserData } from "./UserProfile";

export default function UserSheet ({...user}:UserData) {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.location}</p>
        </div>
        
    )
        
}