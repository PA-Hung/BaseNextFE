import Link from 'next/link'
import React from 'react'
import { Button, ConfigProvider } from 'antd';
import theme from '../../theme/themeConfig';

const RootPage = () => {
    return (
        <ConfigProvider theme={theme}>
            <div className="App">
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
            </div>
        </ConfigProvider>
    )
}

export default RootPage