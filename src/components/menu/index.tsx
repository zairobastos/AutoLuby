import { Menur } from "./styles";
import Logo from '../../assets/images/Logo.svg';
export const Menu = ()=>{
    return(
        <Menur>
            <figure>
                <img src={Logo} alt="Logo"/>
            </figure>
            <h2>AutoLuby</h2>
        </Menur>
    );
}