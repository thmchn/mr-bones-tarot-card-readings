import React, { useState, useEffect } from 'react';

function Transform(props) {

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show != props.isOpen) {
        setShow(props.isOpen);
    }
  }, [props.isOpen]);

  const transformStyle = {
    transform: `translate(${props.translateHidden}`,
    transition: '0.5s ease-in-out'
  };

  const isOpenStyle = {
    transform: `translate(${props.translateVisible})`
  };

  const style = props.isOpen ? {
    ...transformStyle,
    ...isOpenStyle
  } : transformStyle;

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default Transform;