import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./ItemDetailImage.module.css"

class ItemDetailImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.detailImages[0]
        };
    }

    render() {
        const clickImage = (detailImageSrc) => {
            this.setState({
                url: detailImageSrc
            });
        };
        return (
            <div className={styles.imageContainer}>
            <img className={styles.imageState} src={this.state.url} />
                {this.props.detailImages.map((detailImageSrc)=>(
                <img className={styles.imageButton} src={detailImageSrc} onClick={() => clickImage(detailImageSrc)} />
                ))}
            </div>
        )}
}

ItemDetailImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ItemDetailImage;
