import "./aboutPage.css";

export const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <h2>About SimpleScorer</h2>
      <p>
        SimpleScorer is a simple, straight forward web app to track scores. I
        built it to keep track of scores in board games with my family when we
        don't have a pen or paper handy.
      </p>
      <p>
        It uses session storage to track players and their scores. It's very
        feature-light and intends to stay this way.
      </p>
      <p>I hope you find it as helpful as I do!</p>
    </div>
  );
};
