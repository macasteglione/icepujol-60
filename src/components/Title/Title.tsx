import "./Title.css";

type TitleProps = {
    title: string;
    subtitle: string;
};

const Title = ({ subtitle, title }: TitleProps) => {
    return (
        <div className="title">
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;
