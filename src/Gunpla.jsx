import BacklogWidget from "./components/BacklogWidget.jsx";

export function Gunpla() {
    // TODO Build MFC API to get live backlog data
  return(
      <div>
          <p>Nothing in gunpla yet!</p>
          <BacklogWidget complete={55} inProgress={3} unfinished={63}/>
      </div>
  )
}

export default Gunpla