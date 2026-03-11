import UserSheet from "./UserSheet";

export type UserData = {
    name: string;
    age: number;
    location: string;
}
export const UserProps = {
    name: "Tobi",
    age: 150,
    location: "Warsaw"
}
interface UserProps {
    user?: UserData | null; // User is now explicitly optional
  }
export default function UserProfile ({user}: UserProps) {
    return (
        <div>
            {user ? <UserSheet {...user}/> : <p>Login Please</p>}
        </div>
        
    )
        
}