import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchOneMessageStatically extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userinfo: []
        };
    }

    componentDidMount() {
        axios.get(`https://morgane-test.herokuapp.com/messages/1.json`)
            .then(res => {
                const userinfo = res.data;
                this.setState({ userinfo });
            });
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>id:</td><td>{this.state.userinfo.id}</td>
                    </tr>
                    <tr>
                        <td>text:</td><td> {this.state.userinfo.text}</td>
                    </tr>
                    <tr>
                        <td>author:</td><td>{this.state.userinfo.author}</td>
                    </tr>
                    <tr>
                        <td>in_reply_to:</td><td>{this.state.userinfo.in_reply_to}</td>
                    </tr>
                    <tr>
                        <td>utc_offset:</td><td>{this.state.userinfo.utc_offset}</td>
                    </tr>
                    <tr>
                        <td>created_at:</td><td>{this.state.userinfo.created_at}</td>
                    </tr>
                    <tr>
                        <td>updated_at:</td><td>{this.state.userinfo.updated_at}</td>
                    </tr>
                     </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <FetchOneMessageStatically />,
    document.getElementById('root')
);
