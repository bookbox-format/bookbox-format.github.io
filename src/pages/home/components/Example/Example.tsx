import { Component, For } from "solid-js";

import "./Example.css";

import int from "./int.svg";
import emc from "./emc.svg";

const code = `const°key⦚ ⦚book°var⦚: ⦚FBook°type⦚ ⦚=°op⦚ ⦚api°var⦚ ⦚=>°key⦚ ⦚api°var⦚.⦚book°var⦚.⦚root°func⦚\`
Hello °str⦚\${°key⦚api°var⦚.⦚strong°func⦚\`world\`°str⦚}°key⦚!


π ≈ ⦚\${°key⦚Math°var⦚.⦚PI°var⦚}⦚


⦚\${°key⦚api°var⦚.⦚math°func⦚\`E = mc^2\`°str⦚}°key⦚


⦚\${°key⦚api°var⦚.⦚math°var⦚.⦚block°func⦚()(⦚String°var⦚.⦚raw°func⦚\`\\int_{0}^{+\\infin} e^{-x^2} = \\frac{\\sqrt{\\pi}}{2}\`°str⦚)⦚}°key⦚


⦚\${°key⦚api°var⦚.⦚image°var⦚.⦚src°func⦚(⦚'./logo.svg'°str⦚).⦚width°func⦚(⦚'50%'°str⦚).⦚alt°func⦚(⦚'logo'°str⦚)⦚\`description\`°str⦚}°key⦚
\`°str⦚;`;

const tokens = code.split("⦚").map((e) => e.split("°"));

export const Example: Component = () => {
  return (
    <div class="example">
      <code>
        <pre>
          <For each={tokens}>
            {([text, name]) =>
              name ? <span class={`t ${name}`}>{text}</span> : text
            }
          </For>
        </pre>
      </code>
      <span>&rightarrow;</span>
      <div>
        Hello <strong>world</strong>!
        <br />
        <br />π ≈ {Math.PI}
        <br />
        <br />
        <img src={emc} width="70" />
        <br />
        <br />
        <img src={int} width="150" />
        <br />
        <br />
        <figure style={{ "text-align": "center" }}>
          <img src="/static/logo.svg" style={{ width: "50%" }} alt="logo" />
          <figcaption style={{ "font-style": "italic" }}>
            description
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
