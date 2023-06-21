import "./Tagline.scss";

const Tagline = ({ text, icon, subtext }) => {
  return (
    <div className="tagline flx-clmn-cntr">
      <p>{icon}</p>
      <h1 dangerouslySetInnerHTML={{ __html: text }} />
      <p dangerouslySetInnerHTML={{ __html: subtext }} />
    </div>
  );
};

export default Tagline;
