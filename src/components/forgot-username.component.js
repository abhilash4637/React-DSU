import React, { Component } from 'react';

class ForgotUserName extends Component {
    render() {
        return (
         <div>
             <div id="forgot-username" className="container">
                 <section className="page-title ">
                     <h1>Retrieve your username</h1>
                 </section>
                 <div className="section form">
                     <form id="forgotUsernameForm" className="validate" method="post" action="/SingleSignOn/Account/ForgotUserName" noValidate="novalidate">
                         <section className="form-section divided-section">
                             <h3 className="form-subtitle col-xs-12">Hey, it happens. Just provide the following information to retrieve your username.</h3>
                             <div id="radio-container">
                                 <div className="form-group radios">
                                     <div className="radio inline">
                                         <input type="radio" name="UserOption" id="individualOption" value="individual" checked="checked"/>
                                             <label className="form-label" htmlFor="individualOption">
                                                 Individual
                                             </label>
                                     </div>
                                     <div className="radio inline">
                                         <input type="radio" name="UserOption" id="employerOption" value="employer"/>
                                             <label className="form-label" htmlFor="employerOption">
                                                 Employer
                                             </label>
                                     </div>
                                 </div>
                             </div>

                             <div className="form-errors">
                                 <label id="ssnInput-error" className="tooltip-text form-error" htmlFor="ssnInput">Please enter a valid social security number</label>
                             </div>
                             <div id="individual" className="show">
                                 <div className="form-group ssn-group reveal  has-error has-feedback">
                                     <label className="form-label" htmlFor="ssnInput">SSN</label>
                                     <input className="form-control ssn-control" type="text" id="ssnInput" autoFocus="" name="SSNInput" value="" required="" title="Please enter a valid social security number" autoComplete="off" aria-required="true" aria-invalid="true"/>
                        <span className="toggle-ssn">
                           <a className="" href="#" title="Click to reveal your social security number">Show</a>
                         </span>
                                 </div>
                                 <div className="form-group">
                                     <label className="form-label" htmlFor="lastNameInput">Last name</label>
                                     <input className="form-control" type="text" id="lastNameInput" name="LastNameInput" value="" required="" title="Please enter your last name" aria-required="true"/>
                                 </div>
                                 <div className="form-group">
                                     <label className="form-label" htmlFor="dobInput">Date of birth</label>
                                     <input className="form-control birth-date-control" type="text" id="dobInput" name="DOBInput" value="" required="" title="Please enter a valid birth date" aria-required="true"/>
                                 </div>
                             </div>
                             <div className="captcha-container">
                                 <div className="g-recaptcha form-group" data-sitekey="6LcGfSoUAAAAAMmvZmdDWLoh3hXZ6cxXfvn9SjyX">
                                     <div>
                                         <div>
                                             <iframe src="https://www.google.com/recaptcha/api2/anchor?k=6LcGfSoUAAAAAMmvZmdDWLoh3hXZ6cxXfvn9SjyX&amp;co=aHR0cHM6Ly9sb2dpbi52YWxpYy5jb206NDQz&amp;hl=en&amp;v=r20171109115411&amp;size=normal&amp;cb=hyzytpe4hrck" width="304" height="78" role="presentation" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                         </div>

                                     </div>
                                 </div>
                             </div>
                             <div id="btn-container" className="btn-container">
                                 <div className="form-group buttons">
                                     <input className="btn grey cancel" type="submit" value="Cancel" name="ActionName"/>
                                     <input className="btn" type="submit" value="Submit" name="ActionName"/>
                                 </div>
                                 <div className="link-container">
                                     <a className="cta" href="https://www.valic.com/security-center" target="_blank" title="Stay Secure">Stay Secure<i className="icon-carrot-right"></i></a>
                                 </div>
                             </div>
                         </section>
                     </form>
                 </div>
             </div>
         </div>
        );
    }
}

export default ForgotUserName;
