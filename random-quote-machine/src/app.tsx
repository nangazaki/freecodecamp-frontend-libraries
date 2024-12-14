import { useEffect, useState } from "react";
import { getRandomColor } from "./helpers/colors.helpers";
import { getRandomQuote, type QuoteType } from "./helpers/quotes.helpers";

export function App() {
  const [quote, setQuote] = useState<QuoteType>();

  useEffect(() => {
    handleGetNewQuote();
  }, []);

  function handleGetNewQuote() {
    const _quote = getRandomQuote();
    const _color = getRandomColor();

    setQuote(_quote);
    document.body.style.backgroundColor = _color;
    // @ts-expect-error
    document.querySelector(".quote-text")!.style.color = _color;
    // @ts-expect-error
    document.querySelector(".quote-author")!.style.color = _color;
    document
      .querySelectorAll(".button")!
      // @ts-expect-error
      .forEach((button) => (button.style.backgroundColor = _color));
  }

  return (
    <>
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left"> </i>
            <span id="text">{quote?.quote}</span>
          </div>
          <div className="quote-author">
            - <span id="author">{quote?.author}</span>
          </div>
          <div className="buttons">
            <a
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='${quote?.quote}' - ${quote?.author}`}
              target="_top"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote?.author}&content=${quote?.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
              target="_blank"
            >
              <i className="fa fa-tumblr"></i>
            </a>
            <button
              className="button"
              id="new-quote"
              onClick={handleGetNewQuote}
            >
              New quote
            </button>
          </div>
        </div>
        <div className="footer">
          by{" "}
          <a href="https://github.com/nangazaki" target="_blank">
            Nangazaki
          </a>
        </div>
      </div>
    </>
  );
}
