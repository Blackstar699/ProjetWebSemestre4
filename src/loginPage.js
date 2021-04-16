import React from 'react';
import './loginPage.css';

function Login(props){
    return(
        <form action={''} method={'POST'} className={'box'}>
            <div className={'titleAuth'}>Connexion à Cloneflix</div>
            <div className={'inputSBox'}>
                <input className={'inputS'} type={'text'} placeholder={'Pseudo'} />
            </div>
            <div className={'inputSBox'}>
                <input className={'inputS'} type={'password'} placeholder={'Mot de passe'} />
            </div>
            <div className={'contentBox'}>
                <div className={'text'} onClick={props.onClick}>Créer un compte</div>
            </div>
            <button className={'btnAuth'}>Connexion</button>
        </form>
    );
}

function CreateAccount(props){
    return(
        <form action={props.newUser} className={'box'}>
            <div className={'titleAuth'}>Créer un compte Cloneflix</div>
            <div className={'inputSBox'}>
                <input className={'inputS'} type={'text'} name={'pseudo'} value={props.pseudo} onChange={props.handleChangePseudo} placeholder={'Pseudo'} />
            </div>
            <div className={'inputSBox'}>
                <input className={'inputS'} type={'password'} name={'password'} value={props.password} placeholder={'Mot de passe'} />
            </div>
            <div className={'contentBox'}>
                <div className={'text'} onClick={props.onClick}>Se connecter</div>
            </div>
            <button className={'btnAuth'}>Créer un compte</button>
        </form>
    );
}

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
            page: false,
            pseudo: '',
            password: ''
        };
    }

    handleLoginClick(){
        this.setState({page: false});
    }
    handleCreateClick(){
        this.setState({page: true});
    }

    newUser(event){
        event.preventDefault();
        fetch(`/api/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pseudo: this.state.pseudo,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    handleChangePseudo(event){
        this.setState({pseudo: event.target.value});
        console.log(this.state.pseudo);
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    render(){
        let display;
        const page = this.state.page;
        if(page){
            display = <Login value={this.state.pseudo} onChange={this.handleChangePseudo} onClick={this.handleLoginClick} />;
        }
        else{
            display = <CreateAccount onClick={this.handleCreateClick} />;
        }
        return(
            <div className={'authBox'}>
                <div className={'leftBox'}>
                    <div className={'bgGreen'} />
                    <div className={'imageAuth'} />
                    <div className={'imageText bold style1'}>Cloneflix</div>
                    <div className={'imageText style2'}>Stream what you want</div>
                </div>
                <div className={'rightBox'}>
                    {display}
                </div>
            </div>
        )
    }
}

export default LoginPage;