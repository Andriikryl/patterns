import { For, createMemo, createSignal } from "solid-js";
import Container from "../container/Container";
import styles from "./style.module.css";
import Prev from "../../icons/Prev";

export default function BackgroundPatterns() {
  const [backColor, setBackColor] = createSignal("rgb(229, 229, 247)");
  const [frontColor, setFrontColor] = createSignal("rgb(68, 76, 247)");
  const [opacity, setOpacity] = createSignal(0.8);
  const [spacing, setSpacing] = createSignal(10);
  const [activePattern, setActivePattern] = createSignal(11);

  const backgroundPatternsData = createMemo(() => [
    {
      style: `
        background-color: ${backColor()};
        opacity: ${opacity()};
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, ${backColor()} ${spacing()}px ), repeating-linear-gradient( ${frontColor()}, ${frontColor()} );
        `,
      id: "1",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
        background-image:  linear-gradient(135deg, ${frontColor()} 25%, transparent 25%), linear-gradient(225deg, ${frontColor()}  25%, transparent 25%), linear-gradient(45deg, ${frontColor()}  25%, transparent 25%), linear-gradient(315deg, ${frontColor()}  25%, ${backColor()} 25%);
        background-position:   ${spacing()}px 0,  ${spacing()}px 0, 0 0, 0 0;
        background-size: ${spacing()}px  ${spacing()}px;
        background-repeat: repeat;
        `,
      id: "2",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
        background-image:  linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
        background-position:   ${spacing()}px 0,  ${spacing()}px 0, 0 0, 0 0;
        background-size:  ${spacing() + 20}px  ${spacing() + 20}px;
        background-repeat: repeat;
        `,
      id: "3",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background: linear-gradient(135deg, #444cf755 25%, transparent 25%) -${spacing()}px 0/  ${
        spacing() + 10
      }px  ${
        spacing() + 10
      }px, linear-gradient(225deg, #444cf7 25%, transparent 25%) -${spacing()}px 0/  ${
        spacing() + 10
      }px  ${
        spacing() + 10
      }px, linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/  ${
        spacing() + 10
      }px  ${
        spacing() + 10
      }px, linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%) 0px 0/  ${
        spacing() + 10
      }px  ${spacing() + 10}px;
        `,
      id: "4",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image: radial-gradient( ellipse farthest-corner at  ${spacing()}px  ${spacing()}px , #444cf7, #444cf7 50%, #e5e5f7 50%);
    background-size:  ${spacing()}px  ${spacing()}px;
        `,
      id: "5",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image: radial-gradient(circle at center center, #444cf7, #e5e5f7), repeating-radial-gradient(circle at center center, #444cf7, #444cf7,  ${spacing()}px, transparent  ${
        spacing() + 10
      }px, transparent  ${spacing()}px);
    background-blend-mode: multiply;
        `,
      id: "6",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background: repeating-linear-gradient( 45deg, #444cf7, #444cf7  ${
      spacing() - 5
    }px, #e5e5f7  ${spacing() - 5}px, #e5e5f7  ${spacing() + 15}px );
        `,
      id: "7",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
      background-image:  repeating-linear-gradient(45deg, #444cf7 25%, transparent 25%, transparent 75%, #444cf7 75%, #444cf7), repeating-linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%, #e5e5f7 75%, #444cf7 75%, #444cf7);
      background-position: 0 0,  ${spacing()}px  ${spacing()}px;
      background-size:  ${spacing() + 10}px  ${spacing() + 10}px;
        `,
      id: "8",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background: repeating-linear-gradient( -45deg, #444cf7, #444cf7  ${
      spacing() - 5
    }px, #e5e5f7  ${spacing() - 5}px, #e5e5f7  ${spacing() + 15}px );
        `,
      id: "9",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image:  linear-gradient(#444cf7 2px, transparent 2px), linear-gradient(90deg, #444cf7 2px, transparent 2px), linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(90deg, #444cf7 1px, #e5e5f7 1px);
    background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
        `,
      id: "10",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image:  linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777);
    background-size: 20px 35px;
    background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
        `,
      id: "11",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
    background-size: 10px 10px;
        `,
      id: "12",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
    background-size: 20px 20px;
    background-position: 0 0,10px 10px;
        `,
      id: "13",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image: linear-gradient(0deg, #e5e5f7 50%, #444cf7 50%);
    background-size: 10px 10px;
        `,
      id: "14",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-image: linear-gradient(to right, #444cf7, #444cf7 5px, #e5e5f7 5px, #e5e5f7 );
    background-size: 10px 100%;
        `,
      id: "15",
    },
    {
      style: `
      background-color: ${backColor()};
      opacity: ${opacity()};
    background-size: 10px 10px;
    background-image: repeating-linear-gradient(45deg, #444cf7 0, #444cf7 1px, #e5e5f7 0, #e5e5f7 50%);
        `,
      id: "16",
    },
  ]);

  return (
    <div class="full">
      <div
        class={styles.wrapper}
        style={backgroundPatternsData()[activePattern()].style}
      >
        <Container>
          <h1 class={styles.title}>CSS Background Patterns</h1>
          <div class={styles.form__group}>
            <form
              onChange={(event) => {
                event.preventDefault();
              }}
            >
              <label>Opacity:</label>
              <input
                type="range"
                id="volume-slider"
                min={0}
                max={1}
                step={0.1}
                value={opacity()}
                onInput={(e) => setOpacity(parseFloat(e.target.value))}
              />
            </form>
            <form
              onChange={(event) => {
                event.preventDefault();
              }}
            >
              <label>Spacing:</label>
              <input
                type="range"
                id="volume-slider"
                min={4}
                max={80}
                step={0.1}
                value={spacing()}
                onInput={(e) => setSpacing(parseFloat(e.target.value))}
              />
            </form>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label>Back Color:</label>
              <input
                type="color"
                id="color-picker"
                value={backColor()}
                onInput={(event) => {
                  setBackColor(event.target.value);
                }}
              />
            </form>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label>Front Color:</label>
              <input
                type="color"
                id="color-picker"
                value={frontColor()}
                onInput={(event) => {
                  setFrontColor(event.target.value);
                }}
              />
            </form>
          </div>
          <div class={styles.flow}>
            <For each={backgroundPatternsData()}>
              {(patern, index) => (
                <div style={patern.style} class={styles.box}>
                  <button
                    class={styles.button__patern}
                    onClick={() => setActivePattern(index())}
                  >
                    <Prev size={20} />
                  </button>
                </div>
              )}
            </For>
          </div>
        </Container>
      </div>
    </div>
  );
}
