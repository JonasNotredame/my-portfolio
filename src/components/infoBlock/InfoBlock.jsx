import "./InfoBlock.scss";


function InfoBlock({ children, extraClass }) {
  return <div className={`info-block ${extraClass}`}>{children}</div>;
}

export default InfoBlock;
