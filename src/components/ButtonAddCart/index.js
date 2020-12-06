import { MdShoppingCart } from 'react-icons/md';
import { Container } from './styles';

const ButtonAddCart = (props) => {
    return (
        <Container>
            <button type="button" onClick={props.onClick}>
                <div>
                    <MdShoppingCart size={16} color="#FFF" />
                    {props.amount || 0}
                </div>
                <span>Adicionar</span>
            </button>
        </Container>
    )
}

export default ButtonAddCart;