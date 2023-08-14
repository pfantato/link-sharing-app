import styles from "./Card.module.scss";

type CardProps = React.PropsWithChildren;

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
