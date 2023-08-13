import Link from 'next/link'
import React from 'react'

const RootPage = () => {
    return (
        <div>RootPage
            <div>
                <button>
                    <Link href={"/login"}>Login</Link>
                </button>
                <button>
                    <Link href={"/about"}>About</Link>
                </button>
                <button>
                    <Link href={"/contact"}>Contact</Link>
                </button>
            </div>
        </div>
    )
}

export default RootPage