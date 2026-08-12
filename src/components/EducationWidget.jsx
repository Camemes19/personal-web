export function EducationWidget() {
    return (
      <div className={"experience mx-auto rounded-lg max-w-[80%]"}>
          <h3 className={"grid h-1/10 p-0.5 auto-cols-max w-fit items-end border-b border-b-blue-700"}>
              <b className={"text-5xl col-start-1 me-1"}>0-03</b>
              <div className={"me-1.5 text-2xl col-start-1"}>
                  <b className={"font-black text-blue-700"}>///</b> Education
              </div>
              <div className={"text-[0.4rem] font-light col-start-2 row-start-1 row-span-2"}>
                  <p className={"my-1"}>Entity_Context</p>
                  <p className={"my-1"}>Expertise gained through study</p>
                  <p className={"my-1"}>The master is an [eternal] student</p>
              </div>
          </h3>
          <div className={"flex justify-evenly"}>
              <h4>Washington State University</h4>
              <h4>B.S. in Computer Science</h4>
              <h5>August 2019 - May 2023</h5>
          </div>
      </div>
    );
}

export default EducationWidget;