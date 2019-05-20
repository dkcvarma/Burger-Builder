import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIndgredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIndgredient key={igkey + i} type={igkey} />
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIndgredient type="bread-top" />
            {transformedIngredients}
            <BurgerIndgredient type="bread-bottom" />
        </div>
    );
};

export default burger;
// export default withRouter(burger);