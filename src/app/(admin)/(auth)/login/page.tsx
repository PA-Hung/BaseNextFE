import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div>Login
            <div><Link href={"/"}>Home</Link></div>
            <div><Link href={"/dashboard"}>Dashboard</Link></div>
        </div>
    )
}

export default Login