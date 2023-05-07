import PropTypes from 'prop-types'

function Item({ name, description, price }) {
    return (
        <div className="item">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>R$ {price}</p>
        </div>
    )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

Item.defaultProps = {
    description: 'Descrição do item'
}

export default Item