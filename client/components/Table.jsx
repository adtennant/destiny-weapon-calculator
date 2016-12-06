import React, { PropTypes } from 'react';

export const Table = ({ responsive, caption, children }) => {
    const table = <table className="table">
        { caption && <caption>{ caption }</caption> }
        { children }
    </table>;

    if(responsive) {
        return <div className="table-responsive">{ table }</div>;
    } else {
        return table;
    }
};

Table.propTypes = {
    children: PropTypes.node,
    responsive: PropTypes.bool,
    caption: PropTypes.string
};

Table.defaultProps = {
    children: null,
    responsive: false,
    caption: null
};

export default Table;
