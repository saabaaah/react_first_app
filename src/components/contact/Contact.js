import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

class Contact extends Component {

    state = {
        showContentToggle: true
    }

    showContact(params) {
        console.log("showContact",params);
        this.setState({
            showContentToggle: ! this.state.showContentToggle
        })
        
    }

    onDeleteContact(params) {
        console.log("onDeleteContact",params);
        this.props.onDeleteContactChild();
        
    }    
    
    render() {
        const {nom, tel, email} = this.props.data;
        return (

        <div class="card-text">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">
                        {nom} 
                        <i onClick={this.showContact.bind(this, nom)}  style={{curssor: 'pointer'}} class="fa fa-sort-desc"></i>
                        <i onClick={this.onDeleteContact.bind(this) } style={{color:'red', float:'right', curssor: 'pointer'}} class="fa fa-times"></i>

                    </h4>
                    <p class="card-text">
                        {(this.state.showContentToggle)? (
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Tel :  {tel}</li>
                            <li class="list-group-item">Email :  {email}</li>
                        </ul>
                        ) : null}
                    </p>
                </div>
                
            </div>
        </div>
        )
    }
}


// propriétés par défaut!
Contact.defaultProps = {
    nom:" Sans nom",
    tel:" Sans tel",
    emai:" Sans emai"
};

// les types des propriétés
Contact.propTypes = {
    data: PropTypes.object.isRequired
};
export default Contact;