import React from 'react'

export default function FruiList() {
    let fruitArray = ["Pear","Apple","Banana"];
    return (
    
        <div className="to-do-list">
                <ul>
                    {fruitArray.map((fruit,index) => (
                        <li key={index}>
                            {fruit}
                            
                        </li>
                    )

                    )}
                </ul>
        </div>
    )
}
