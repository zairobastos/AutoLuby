import Logo from '../../assets/images/Logo.svg';
import Carro from '../../assets/images/carro.svg';
import { Inputer } from '../../components/input-login';
import {TelaLogin, LoginG} from'./styles';
import { Link } from 'react-router-dom';
export default function Login(){
    return(
        <LoginG>
            <TelaLogin>
                <header>
                    <figure>
                        <img src={Logo} alt="Logo da AutoLuby" />
                    </figure>
                    <h2>AutoLuby</h2>
                </header>
                <form>
                    <h1>Bem-vindo à AutoLuby</h1>
                    <p>Faça o login para acessar sua conta.</p>
                    <div className='inputs'>
                        <Inputer label="Endereço de email" name="email" tipo='email' placeholder='@mail.com'/>
                        <Inputer label="Senha" name="senha" tipo='password' placeholder='senha'/>
                    </div>
                    <div className="senha">
                        <div className="lembrar">
                            <input type="checkbox" name="lembrar" id="lembrar" />
                            <label htmlFor="lembrar">Lembrar minha senha</label>
                        </div>
                        <p>Esqueceu a senha?</p>
                    </div>
                    <Link to="/home"><button type="submit">Entrar</button></Link>
                    <h4>Ainda não tem uma conta? <span>Criar Conta</span></h4>
                </form>
            </TelaLogin>
            <figure className="login-carro">
                <img src={Carro} alt="Carro" className='carro' />
            </figure>
        </LoginG>
    )
}