
import $ from "jquery";
export default function Landing() {

  return (
    <div id="galleries-list">
      <ul>
        <li>
          <div className="content">1</div>
        </li>
        <li>
          <div className="content">2</div>
        </li>
        <li>
          <div className="content">3</div>
        </li>
        <li>
          <div className="content">4</div>
        </li>
      </ul>
      <div className="slider-nav">
        <span className="slide-left"> &lt;&lt;&lt; </span>
        <span className="slide-right"> &gt;&gt;&gt; </span>
      </div>
    </div>
  );
}
