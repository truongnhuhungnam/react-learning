import React, { useState } from "react";

// Response from API
const courses = [
    {
        id: 1,
        name: "HTML, CSS",
    },
    {
        id: 2,
        name: "javascript",
    },
    {
        id: 3,
        name: "ReactJS",
    },
];

const TwoWayBinding = () => {
    const [name, setName] = useState("");
    const [radioChecked, setRadioChecked] = useState();
    const [checkboxChecked, setCheckboxChecked] = useState([]);

    const handleSubmitRadio = () => {
        console.log({ radioChecked });
    };

    const handleCheckbox = (id) => {
        setCheckboxChecked((prev) => {
            const isChecked = checkboxChecked.includes(id);
            if (isChecked) {
                return checkboxChecked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleSubmitCheckbox = () => {
        console.log({ checkboxChecked });
    };

    return (
        <div>
            <h1>Họ và tên: {name}</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <hr />
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <label key={course.id}>
                            <input
                                type="radio"
                                onChange={() => setRadioChecked(course.id)}
                                checked={radioChecked === course.id}
                            />{" "}
                            {course.name}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmitRadio}>Submit</button>
            <hr />
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <label key={course.id}>
                            <input
                                type="checkbox"
                                checked={checkboxChecked.includes(course.id)}
                                onChange={() => handleCheckbox(course.id)}
                            />
                            {course.name}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleSubmitCheckbox()}>Submit</button>
        </div>
    );
};

export default TwoWayBinding;
