import React from 'react';

function DoneItem(props) {
  return (
    <li className='DoneItem'>
      {props.item}
    </li>
  );
}

export default DoneItem;