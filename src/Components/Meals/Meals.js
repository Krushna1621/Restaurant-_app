import { Fragment } from "react";
import AvailabelMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
const Meals=(props)=>{
     return(
            <Fragment>
                <MealsSummary></MealsSummary>
                <AvailabelMeals></AvailabelMeals>
            </Fragment>
     )
}
export default Meals;