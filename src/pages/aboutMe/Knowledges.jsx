import { SiCss3, SiHtml5, SiJavascript, SiReact } from "react-icons/all";

function Knowledges() {
  return (
    <div className="knowledges">
      <h2>🤓 Knowledges</h2>
      <div className="technologies">
        <div>
          <span>
            <SiHtml5 style={{ color: "#E86A51" }} />
          </span>
          <p>
            Like all the programmers, or most of them, I've started in HTML and
            fastly got the grip of it.
          </p>
        </div>
        <div>
          <span>
            <SiCss3 style={{ color: "#1673BB" }} />
          </span>
          <p>
            I've started studying within HTML so I would say it was fast to get
            the grip of it.
          </p>
        </div>
        <div>
          <span>
            <SiJavascript
              style={{ color: "#f2d70c", backgroundColor: "black" }}
            />
          </span>
          <p>
            My first programming language <br /> since then I improved a lot my
            programming logic
          </p>
        </div>

        <div>
          <span>
            <SiReact style={{ color: "#17B2E2" }} />
          </span>
          <p>
            This is a new world for me, and I'm loving each part of it, since
            everyday I learn a little bit more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Knowledges