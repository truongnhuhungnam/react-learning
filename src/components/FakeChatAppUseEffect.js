import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: "Bài 1",
    },
    {
        id: 2,
        name: "Bài 2",
    },
    {
        id: 3,
        name: "Bài 3",
    },
    {
        id: 4,
        name: "Bài 4",
    },
];
const FakeChatAppUseEffect = () => {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);

    return (
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        onClick={() => setLessonId(lesson.id)}
                        className={`${
                            lessonId === lesson.id && "text-red-500"
                        }`}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FakeChatAppUseEffect;
