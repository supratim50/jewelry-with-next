const Heading = ({ title, activeTitle, content, classList }) => {
  return (
    <>
      <h1 className={`heading ${classList}`}>
        {title && title}
        {activeTitle && (
          <span className="text-uppercase text-primary">
            &nbsp;{activeTitle}
          </span>
        )}
      </h1>

      {content && (
        <p className="paragraph-text text-muted">
          <i className="mr-2 flaticon-twitter"></i> {content}
        </p>
      )}
    </>
  );
};

export default Heading;
