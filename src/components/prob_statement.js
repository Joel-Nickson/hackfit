import React from "react";
import { stayfit_with_social_distancing, mental_health_issues, report_drug_trafficking } from './constants'
import ProbModal from "./prob_modal";

export default function ProbState() {
    return (

        <div className=" mx-auto px-5 lg:px-20">
            <h1 className="mx-6 font-pixe text-center text-brochwhite text-5xl md:text-6xl sm:text-center sm:mx-0">
                Problem Statement
            </h1>
            <div className="mt-16 justify-center text-gray-200 flex flex-wrap flex-row md:flex-row-mx-1 gap-5">

                <ProblemEachSection
                    id='0'
                    title="Mental Health issues in Adolescents"
                    description={`Adolescence can be a risky period for mental health problems because teenagers are going through many changes and challenges in a short period. Globally, one in seven 10-19 year-olds experiences ...`}
                    link="#"
                    svg={mental_health_issues}
                // function={this.scrollToAbout}
                />

                <ProblemEachSection
                    id='1'
                    title="Stay Fit with Social distancing"
                    description={`In the COVID -19 pandemic situation ,where all of us were forced into our homes and had to quit working out in gyms and public spaces , maintaining workout routines became difficult .And in such a situation, staying fit and eating healthy is ...`}
                    link="#"
                    svg={stayfit_with_social_distancing}
                    top='true'
                // function={this.scrollToAbout}
                />
                <ProblemEachSection
                    id='2'
                    title="Report Drug Trafficking Anonymously"
                    description={`Due to its proximity to two of the "three key production areas" for opium, India is facing the illegal drugs crisis. But cross-border trafficking explains only part of the illicit drugs trade that runs ...`}
                    link="#"
                    svg={report_drug_trafficking}
                // function={this.}
                />

            </div>
        </div>
    );
}

function ProblemEachSection(props) {

    return (
        <>
            <div className="my-1 px-1 md:p-2 w-[19rem] sm:w-80">
                <a className="relative block group h-[455px] active:h-auto hover:h-auto focus:h-auto xs:active:h-[455px] xs:hover:h-[455px] sm:h-[28rem] sm:hover:h-[28rem]">

                    <div className="relative flex items-end h-full transition-transform transform bg-black bg-opacity-10 border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  rounded-3xl">

                        <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">

                            {(props.top == 'true') ? (
                                <h2 className="mb-10 text-xl">
                                    {props.title}
                                </h2>
                            ) : null}
                            <div className="mb-8">
                                {props.svg}
                            </div>

                            {(props.top != 'true') ? (
                                <h2 className="mt-4 text-xl">
                                    {props.title}
                                </h2>
                            ) : null}
                        </div>

                        <div className="absolute p-8 my-auto transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                            <h2 className="w-74 mt-4 text-2xl md:text-3xl font-medium">
                                {props.title}
                            </h2>

                            <p className="mt-4 lg:text-md">
                                {props.description}
                            </p>

                            <ProbModal id={`${props.id}`} />
                            {/* <Modal openButtonText="hi" children={undefined} /> */}
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}