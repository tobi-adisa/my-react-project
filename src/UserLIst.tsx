import React from 'react'
type User = {
    id: number;
    name: string,
    email: string

}

const listUser = [
    {id: 1, name: "John", email:"ex@email.com"},
    {id: 2, name: "Tom", email:"tom@email.com"},
    {id: 3, name: "Jim", email:"jim@email.com"}
]
export default function UserLIst() {
  return (
    <div>
      {listUser.map((user) =>
      <p>{user.name} has an email of {user.email}</p>)}
    </div>
  )
}
