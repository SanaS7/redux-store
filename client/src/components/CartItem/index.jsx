import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity, setCart } from '../../REDUX/Slice/Cart';
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);


  const removeFromCartt = (itemm) => {
    dispatch(setCart(cart.filter((cartItem) => cartItem.item._id !== itemm._id)))
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch(setCart(cart.filter((cartItem) => cartItem.item._id !== item.item._id)));

    } else {
      dispatch(updateCartQuantity({ item:item.item, purchaseQuantity: parseInt(value) }))
    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.item.name}, ${item.item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCartt(item.item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
