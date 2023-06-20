import "./Headline.scss";

const Headline = ({ text, icon }) => {
  return (
    <div className="Headline">
      <p>{icon}</p>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Headline;
