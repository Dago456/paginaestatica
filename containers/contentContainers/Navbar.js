import { Spacer, useTheme } from '@nextui-org/react'
import React from 'react'

export const Navbar = () => {

    const { theme, isDark } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifycontent: 'start',
            padding: '0x 20px',
            backgroundColor: theme.colors.purple700.value
        }}>
<image 
src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png"
alt="icono paginaa"
width={60}
height={60}

/>

            <text color='white' h2>M</text>
            <text color='white' h3>usica</text>
<Spacer css={{flex:1}}/>

<Text color='white' >Favoritos</Text>
        </div>
    )
}
