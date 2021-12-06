import Behavior from "./Behavior";
import Presenter from "./Presenter";

const MyButton = ({ title, link, target, onClick }) => {

    return (
        <Behavior
            title={title}
            link={link}
            target={target}
        >
            {/* this is the render prop */}
            {(
                title = 'undef',
                link,
                target
            ) => (
                <Presenter
                    title={title}
                    link={link}
                    target={target}
                    onClick={onClick}
                />
            )}
        </Behavior>
    )
}

export default MyButton