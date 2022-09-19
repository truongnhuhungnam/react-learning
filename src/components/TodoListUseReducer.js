import { useReducer, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const initState = {
    job: "",
    jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case DELETE_JOB:
            const newJobs = [...state.jobs];

            newJobs.splice(action.payload, 1);

            return {
                ...state,
                jobs: newJobs,
            };
        default:
            throw new Error("Unknown action type");
    }
};

const TodoListUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;

    const inputRef = useRef();

    const handleAddTodo = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));

        inputRef.current.focus();
    };

    return (
        <div className="mx-auto w-1/3">
            <input
                type="text"
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                ref={inputRef}
            />
            <button
                className="bg-black text-white border border-l-0 border-black hover:bg-transparent hover:text-black px-6 py-2"
                onClick={handleAddTodo}
            >
                Add
            </button>

            <ul>
                {jobs.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between text-[24px]"
                    >
                        {item}{" "}
                        <AiFillCloseCircle
                            className="cursor-pointer text-red-500"
                            onClick={() => dispatch(deleteJob(index))}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListUseReducer;
