import "./Button.css";

export default function Button({ children, type, onClick }) {
  return (
    <>
      <button className={`btn ${type}`} onClick={onClick}>{children}</button>
    </>
  );
}
