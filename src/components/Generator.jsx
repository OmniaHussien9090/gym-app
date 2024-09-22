import React, {useState} from 'react';
import SectionWrapper from "./SectionWrapper";
import {SCHEMES, WORKOUTS} from "../utils/workouts";
import Button from "./Button";


function Header(props) {
    const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

const Generator = (props) => {
    const [showModal, setShowModal] = useState(false)
    const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props
    const toggleModal = () => {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }


    return (
        <SectionWrapper header='Generate Your Workout' title={['It\'s', 'Huge', 'o\'clock']}>
            <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."}/>
            <div className='grid grid-col-2 sm:grid-cols-4 gap-4'>
                {
                    Object.keys(WORKOUTS).map((type, typeIndex) => {
                        return (
                            <button
                                className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? ' border-blue-600' : ' border-blue-400')}
                                key={typeIndex}
                                onClick={() => {
                                    setMuscles([])
                                    setPoison(type)
                                }}
                            >
                                <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })
                }
            </div>

            <Header index={'02'} title={'Lock On Target'} description={"Select the muscles judged for annihilation."}/>
            <div className='bg-slate-950  border-2 border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative flex item-center  p-4 justify-center'>
                    {muscles.length === 0 ? 'Select Muscle Group' : ' '}
                    {muscles.map((muscle) => {
                        return (
                            <button
                                className='capitalize bg-blue-400 py-2 px-3  ml-2 rounded-full text-sm text-white font-medium flex gap-2 items-center '>
                                {muscle}
                            </button>
                        )
                    })}
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down cursor-pointer"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {
                            (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((musclesGroup, musclesIndex) => {
                                return (
                                    <button
                                        onClick={() =>
                                            updateMuscles(musclesGroup)}
                                        className={'hover:text-blue-400 duration-200' + (muscles.includes(musclesGroup) ? 'text-blue-400' : ' ')}
                                        key={musclesIndex}>
                                        <p className={'uppercase'}>{musclesGroup.replaceAll('_', ' ')}</p>
                                    </button>
                                )
                            })
                        }
                    </div>
                )}
            </div>

            <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."}/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {
                    Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                        return (
                            <button
                                onClick={
                                    () => setGoal(scheme)
                                }
                                className={'bg-slate-950 rounded-lg border border-blue-400 hover:border-blue-600 py-3 px-4 ' + (goal === scheme ? 'border-blue-600' : 'border-blue-400')}
                                key={schemeIndex}>
                                <p>{scheme.replaceAll('_', " ")}</p>
                            </button>
                        )
                    })
                }
            </div>
            <Button
            text={"Formulate"}
            fuc={updateWorkout}></Button>
        </SectionWrapper>
    );
};


export default Generator;
