import {Fragment} from "react";
import mealsImage from '../../assests/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'
const Header=(props)=>{
   return(
        <Fragment>
           <header className={classes.header}>
               <h1>ReactMeals</h1>
               <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
           </header>
           <div  className={classes[`main-image`]}> 
              <img src={mealsImage} alt="a table of full delicious food"/>
           </div>
        </Fragment> 
   )
}
export default Header;