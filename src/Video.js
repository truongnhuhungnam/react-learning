import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "./videos/video-1.mp4";

const Video = (props, ref) => {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },

        pause() {
            videoRef.current.pause();
        },
    }));

    return <video src={video1} ref={videoRef} className="w-[300px] mx-auto" />;
};

export default forwardRef(Video);
