import React, {Component} from 'react'

export default class Header extends Component {
    render(){
        return(
            <header>
                <div className="form-group">
                    <input type="text" className="form-control" id="usr" name="username" placeholder="Nhập điểm đón"/>
                    <input type="text" className="form-control" id="usr" name="username" placeholder="Nhập điểm đến"/>
                </div>
                
            </header>
        );
    }
}
