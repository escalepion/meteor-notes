import React from 'react';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    // bu şekilde de olur 
    // const onLogout = () => {
    //     Accounts.logout();
    // }
    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__title">{props.title}</h1>
                <button className="button button--link--text" onClick={() => props.handleLogout()}>Logout</button>
            </div>
        </div>
    );
};

export default PrivateHeader;

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
