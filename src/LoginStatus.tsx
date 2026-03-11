import React, { useState } from "react";

type LoginStat = {
    isLoggedIn: boolean;
}

export default function LoginStatus() {
    // 1. Hook MUST be inside the function body
    const [status, setStatus] = useState<LoginStat>({ isLoggedIn: true });

    // 2. Helper functions should also be inside (or passed state as args)
    function switchState() {
        // Use status.isLoggedIn because 'status' is the object {isLoggedIn: boolean}
        const nextStatus = !status.isLoggedIn;
        setStatus({ isLoggedIn: nextStatus });
    }

    return (
        <div>
            {/* 3. Access the boolean via status.isLoggedIn */}
            {status.isLoggedIn ? (
                <button onClick={switchState}>Logout</button>
            ) : (
                <button onClick={switchState}>Login</button>
            )}
        </div>
    );
}