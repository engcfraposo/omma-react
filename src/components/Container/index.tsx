import React from "react";
import "./styles.css"

const Container = ({children}:{children:React.ReactNode}) => {
  return <div className='container'>{children}</div>;
}

export default Container;