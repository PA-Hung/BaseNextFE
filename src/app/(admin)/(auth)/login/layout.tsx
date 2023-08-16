import React from 'react'
import style from './page.module.css'

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={style.loginPage}>
            <div className={style.loginForm}>
                {children}
            </div>

        </div>
    )
}

export default LoginLayout