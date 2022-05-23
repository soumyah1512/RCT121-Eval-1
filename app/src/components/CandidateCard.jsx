import styles from "./CandidateCard.module.css";

function CandidateCard(props) {
  // console.log(props)
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={props.item.avatar} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name: {props.item.name}</div>
        <div>{props.item.title}, {props.item.company_name}</div>
      </div>
      <div>${props.item.salary}</div> 
    </div>
  );
}

export default CandidateCard;

// {avatar,name,title,company_name,salary}