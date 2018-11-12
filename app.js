// class LogoImage extends React.Component {
//   render() {
//     return <img className="logo" alt="logo" src="img/logo.svg"/>;
//   }
// }

// class UserForm extends React.Component {
//     render() {
//         return
//             <form className="block__form" id="form" method="post">
//             <input className="block__input" name="email" id="email" type="email" placeholder="E-Mail"/>
//             <input className="block__input" name="password" id="password" type="password" placeholder="Password"/>
//             <button className="block__button" id="login" type="button">Login</button>
//             </form>
//     }
// }

// class Section extends React.Component {
//     render() {
//         return
//             <section className = "block">
//              <LogoImage/>     НЕ УВЕРЕНА, ЧТО ЭТО ПИШЕТСЯ ИМЕННО ТАК
//              <UserForm/>   НЕ УВЕРЕНА, ЧТО ЭТО ПИШЕТСЯ ИМЕННО ТАК
//             < /section>
//     }
// }

class LogoImage extends React.Component {
    render() {
        return React.createElement(
            "img",
            {className: "logo", alt: "logo", src: this.props.src}
        );
    }
}

class UserForm extends React.Component {
    render() {
        return React.createElement(
            "form",
            {className: "block__form", id: "form", method: "post"},
            React.createElement("input", {
                className: "block__input",
                name: "email",
                id: "email",
                type: "email",
                placeholder: "E-Mail"
            }),
            React.createElement("input", {
                className: "block__input",
                name: "password",
                id: "password",
                type: "password",
                placeholder: "Password"
            }),
            React.createElement(
                "button",
                {className: "block__button", id: "login", type: "button"},
                "Login"
            )
        );
    }
}

class Section extends React.Component {
    render() {
        return React.createElement(
            "section",
            {className: "block"},
            React.createElement(UserForm),
        );
    }
}


ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(LogoImage, {src: "img/logo.svg"}),
    React.createElement(Section),
), document.getElementById("root"));
