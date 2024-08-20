import "./Header.css";

function Header(props) {
  return (
    <div
      className={
        props.textColor === "white"
          ? "header-container-white"
          : "header-container-black"
      }
    >
      <span>
        <strong>turkishairlines.com</strong>
      </span>
      <span>
        search<strong>Flight Challenge</strong>
      </span>
    </div>
  );
}

export default Header;
