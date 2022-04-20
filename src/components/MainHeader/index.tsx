import React, { useMemo } from 'react';
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../utils/emoji';
import Toggle from '../Toggle';


const MainHeader = () => {


    //GERANDO UM EMOJI ALEATORIO CADA VEZ QUE CARREGA A PAGINA
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);


    return (
        <Container>
            <Toggle/>

            <Profile>
                <Welcome>Olá,{emoji}</Welcome>
                <UserName>Jefferson Nascimento</UserName>
            </Profile>
        </Container>
    )

}

export default MainHeader;