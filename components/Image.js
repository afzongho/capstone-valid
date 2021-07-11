import React, {useState} from react;
import {Context} from "../Context"
import PropTypes from "prop-types"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => toggleFavorite(img.id)}></i>



    return (
        <div className={`${className} image-container`}
        onMouseEnter = { () => setHovered(true)}
        onMouseLeave = { () => setHovered(false)}
        >
        
            <img src={img.url} className="image-grid"/>
        {heartIcon()}
        {cartIcon}
        </div>
    )
}

Image.propTypes = {
    className: propTypes.string,
    img: propTypes.shape({
        id: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
        isFavorite: propTypes.bool,
    }),
}

export default Image