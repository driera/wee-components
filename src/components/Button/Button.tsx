import classes from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...rest}:Props): JSX.Element => {
  return <button {...rest} className={classes.button}>{children} <span>O</span></button>
}

export default Button
