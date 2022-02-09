import React from 'react';
const TreeContext = React.createContext({
    root_idx:0,
    curr_node_idx:0,
    traversal_type:0
});

export default TreeContext;
