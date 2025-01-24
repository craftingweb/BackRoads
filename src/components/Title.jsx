const Title = (pro) => {
  return (
    <div className="section-title">
      <h2>
        {pro.title} <span>{pro.subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
