import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback} from 'reactstrap'; 
import {Link } from 'react-router-dom';
// react-redux-form
import {Control, LocalForm, Errors } from 'react-redux-form';

// form validation of redux-forms
const required=(val)=> val && val.length;
const maxLength=(len)=> (val)=> !(val) || (val.length<=len);
const minLength=(len)=> (val)=> (val) && (val.length >=len);
const isNumber = (val)=>!isNaN(Number(val));
const validEmail=(val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props){
        super(props);
        // no longer needed as react-redux-form
        // this.state={
        //     firstname:'',
        //     lastname:'',
        //     telnum:'',
        //     email:'',
        //     agree:false,
        //     contactType:'Tel.',
        //     message:'',
        //     touched:{
        //         firstname: false,
        //         lastname: false,
        //         email:false,
        //         telnum:false
        //     }
        // }
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.handleInputChange=this.handleInputChange.bind(this);
        // this.handleBlur=this.handleBlur.bind(this);
    }
    // as react-redux-form will handle all this
    // handleInputChange(event){
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked:target.value;
    //     const name=target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // }
    // handleSubmit(event){
    //     console.log("Current state is :"+JSON.stringify(this.state));
    //     alert("Submitted");
    //     event.preventDefault();
    // }
    // handleBlur= (field) =>(evt)=> {
    //     this.setState({
    //         touched:{ ...this.state.touched, [field]:true}
    //     });
    // }

    // validate(firstname, lastname, email, telnum){
    //     const errors={
    //         firstname:'',
    //         lastname:'',
    //         telnum:'',
    //         email:''
    //      };
    //     if(this.state.touched.firstname && firstname.length<3)
    //         errors.firstname='First Name shoulb be >=3 ';
    //     else if(this.state.touched.firstname && firstname.length>10)
    //         errors.firsname="Last Name should be <=10"         
    //     if(this.state.touched.lasstname && lastname.length<3)
    //         errors.lasstname='Last Name shoulb be >=3 ';
    //     else if(this.state.touched.lastname && lastname.length>10)
    //         errors.lastname="Last Name should be <=10"   
    //     const reg=/^\d+$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum="Tel number should contain numbers";
    //     if(this.state.touched.email && email.split('').filter(x=> x==='@').length!==1)
    //         errors.email="Email should contain @";
    //     return errors;      
    // }
    handleSubmit(values){
        console.log("Current state is :"+JSON.stringify(values));
        alert("Submitted");
    }
    render(){
        // const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3> Contact Us </h3>
                        </div>
                    </div>
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Send Us your feedback </h3>
                    </div>
                    <div className="col-12 col-md-9">
                        {/* <Form onSubmit={this.handleSubmit}> 
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname===''}
                                        invalid={errors.firstname!==''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>
                                        {errors.firstname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Lasst Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname===''}
                                        invalid={errors.lastname!==''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>
                                        {errors.lastname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="telephone number"
                                        value={this.state.telnum}
                                        valid={errors.telnum===''}
                                        invalid={errors.telnum!==''}
                                        
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>
                                        {errors.telnum}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email===''}
                                        invalid={errors.email!==''}
                                        
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" 
                                            checked={this.state.agree}
                                            onChange={this.handleInputChange} />{ ' ' }
                                            <strong> May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contactype"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange} >
                                            <option> Tel. </option>
                                            <option> Email </option>
                                     </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        row="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        // using local form 
                        */}
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}> 
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname"  id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3), maxLength:maxLength(15)
                                        }}
                                     />
                                     <Errors 
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required :'Required',
                                            minLength:'Must be grater than 3 chars',
                                            maxLength:'Must be lest than 15'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Lasst Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3), maxLength:maxLength(15)
                                        }}
                                     />
                                     <Errors 
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required :'Required',
                                            minLength:'Must be grater than 3 chars',
                                            maxLength:'Must be lest than 15'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Control.text model=".tel" id="telnum" name="telnum"
                                        placeholder="telephone number"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3), maxLength:maxLength(15),
                                            isNumber
                                        }}
                                     />
                                <Errors 
                                   className="text-danger"
                                   model=".tel"
                                   show="touched"
                                   messages={{
                                       required :'Required',
                                       minLength:'Must be grater than 3 chars',
                                       maxLength:'Must be lest than 15',
                                       isNumber:"must be digits"
                                   }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,  validEmail
                                        }}
                                    />
                                    <Errors 
                                       className="text-danger"
                                       model=".email"
                                       show="touched"
                                       messages={{
                                           required :'Required',
                                           validEmail:'invalid'
                                       }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" 
                                            className="form-check-input"
                                             />{ ' ' }
                                            <strong> May we contact you ?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contactType" name="contactype"
                                        className="form-control" >
                                            <option> Tel. </option>
                                            <option> Email </option>
                                     </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        row="12"
                                        className="form-control"
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;