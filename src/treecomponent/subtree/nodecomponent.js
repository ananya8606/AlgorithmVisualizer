import React, {useState, useContext, forwardRef} from 'react';
import '../treecomponent.css';
import TreeContext from '../tree_context';
const Node = forwardRef((props, ref) => {
  const [key, setKey] = useState(props.id);
  let treeContext = useContext(TreeContext);
  return (
    <div
      className={`node  ${treeContext.curr_node_idx === key ? 'visited' : ''}`}
    >
      <h3>
        {key}
      </h3>
    </div>
  );
});

export default Node;
