export function ExperienceWidget() {
    return (
        <div className={"experience mx-auto max-w-[80%]"}>
            <h3 className={"grid h-1/10 p-0.5 auto-cols-max w-fit items-end border-b border-b-blue-700"}>
                <b className={"text-5xl col-start-1 me-1"}>0-02</b>
                <div className={"me-1.5 text-2xl col-start-1"}>
                    <b className={"font-black text-blue-700"}>///</b> Work
                </div>
                <div className={"text-[0.4rem] font-light col-start-2 row-start-1 row-span-2"}>
                    <p className={"my-1"}>Entity_History</p>
                    <p className={"my-1"}>Experience in the industry</p>
                    <p className={"my-1"}>Man defined by [instrumentality]</p>
                </div>
            </h3>
            <div className={""}>
                <div>
                    <h4>Amazon</h4>
                    <h4>Software Development Engineer</h4>
                    <p className={"text-sm font-semibold my-1"}>June 2023 - January 2026</p>
                    <p className={"max-w-3/4 text-sm mx-auto my-1"}>Built and maintained financial data management solutions in AWS as part of Amazon's FinTech division. Built an extensive set of testing infrastructure as part of this to maintain exceptional service quality.</p>
                </div>

                <div>
                    <h4>Amazon</h4>
                    <h4>Software Development Intern</h4>
                    <p className={"text-sm font-semibold my-1"}>May 2022 - August 2022</p>
                    <p className={"max-w-3/4 text-sm mx-auto my-1"}>Mentored by experienced developers in Amazon's FinTech division and developed key features for an internal requirements gathering tool focused on providing a high quality user experience.</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceWidget