import React, {Component} from 'react';
import {Media, CardDeck} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     selectedDish:null
        // }
        console.log("Menu component constructor is called");
    }

    componentDidMount(){
        console.log("Menu component componentDidMount was called");
    }
    // onDishSelect(dish){
    //     if(this.state.selectedDish===dish){
    //         this.setState({
    //             selectedDish:null
    //         });
    //     }
    //     else{
    //         this.setState({
    //             selectedDish:dish
    //         });
    //     }
    // }

    // renderDish(dish){
    //     if(dish != null){
    //         return (
    //             <CardDeck>
    //                 <Card>
    //                     <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                     <CardBody>
    //                         <CardTitle>{dish.name}</CardTitle>
    //                         <CardBody>{dish.description}</CardBody>
    //                     </CardBody>
    //                 </Card>
    //                 {/* <Card>  // this for when the dishdetail component is a const returned
    //                     <DishdetailComponent comment1={this.state.selectedDish.comments} />
    //                 </Card> */}
    //             </CardDeck>
    //         )
    //     }
    //     else{
    //         return (
    //             <div></div>
    //         );
    //     }
    // }
    render(){
        // the below line was when the dishes was defined in the
        // state of this component but now its is provided as props
        //      const menu = this.state.dishes.map(
        const menu = this.props.dishes.map(
            (dish)=> {
                // Below comment is for adding card
               /**  return (
                    <div key={dish.id} className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={dish.image} alt={dish.name}/>
                            </Media> 
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                            </Media>
                        </Media>
                    </div>
                ); **/
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        {/* <Card onClick={()=>this.onDishSelect(dish)}> */}
                        <Card onClick={()=>this.props.onClick(dish.id)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                )
            }
        );
        console.log("Menu component render is invoked");
        // subsequent changes for card
        // the different elements of menu are already formatted above
        /**return (
            <div className="container">
                <div className="row">
                <Media list>
                    {menu}
                </Media>
                </div>
            </div>
        ); **/
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* <Dishdetail dish={this.state.selectedDish}/> */}
            </div>
        );
    }
}
export default Menu;