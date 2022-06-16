import Link from 'next/link'
import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 40px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
`

const Logo = () => {
    return (
        <Button variant='ghost'>
            <Link href='/'>
                <a>
                    <LogoBox>rm.</LogoBox>
                </a>
            </Link>
        </Button>
    )
}

export default Logo
