import store from './store'
import { addToCart,updateCart,deleteFromCart }  from './action/car-action';
console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));


store.dispatch(updateCart('Flour 1kg', 5, 110));
store.dispatch(deleteFromCart('Coffee 500gm'));
unsubscribe();

// export default store