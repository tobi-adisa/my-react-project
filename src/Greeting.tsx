export default function Greeting () {
    const now: Date = new Date();
    const hour: number = now.getHours();
    return (
        <div>
            {hour < 12 ? (
                <p>Good Morning</p>
            ) : hour < 18 ? (
                <p>Good Afternoon</p>
            ) : (
                <p>Good Evening</p>
            )}
        </div>
        
    )
        
}