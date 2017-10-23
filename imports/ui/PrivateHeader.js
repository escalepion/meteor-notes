import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export const PrivateHeader = (props) => {
    const navImageSource = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';
    // bu şekilde de olur 
    // const onLogout = () => {
    //     Accounts.logout();
    // }
    return (
        <div className="header">
            <div className="header__content">
            <img className="header__nav-toggle" onClick={props.handleNavToggle} src={navImageSource} alt="bars"/>
                <h1 className="header__title">{props.title}</h1>
                <button className="button button--link--text" onClick={() => props.handleLogout()}>Logout</button>
            </div>
        </div>
    );
};

export default createContainer(() => {
    return {
        handleLogout: () => Accounts.logout(),
        handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
        isNavOpen: Session.get('isNavOpen')
    };
}, PrivateHeader);

// export default PrivateHeader;

// export default class PrivateHeader extends Component {
//     onLogout () {
//         Accounts.logout();
//     }

//     render () {
//         return (
//             <div>
//                 <h1>Your Links</h1>
//                 <button onClick={this.onLogout.bind(this)}>Log Out</button>
//             </div>
//         );
//     }
// }
