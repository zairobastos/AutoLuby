import { Inputi } from "./styles";

interface DadosInput{
    label: string;
    name: string;
    tipo: string;
    placeholder: string;
}

export const Inputer = ({label,name,tipo,placeholder}:DadosInput) => {
    return(
        <Inputi>
            <label htmlFor={name} >{label}</label>
            <input type={tipo} id={name} name={name} placeholder={placeholder} />
        </Inputi>
    )
}