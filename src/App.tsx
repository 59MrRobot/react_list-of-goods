import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  goods: string[];
  isVisible: boolean;
  isReversed: boolean;
  length: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    length: 1,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortByName = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((good1, good2) => (
        (good1).localeCompare(good2)
      )),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((good1, good2) => (
        good1.length - good2.length
      )),
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      length: 1,
    });
  };

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      length,
    } = this.state;

    const visibleGoods = [...goods].filter(good => good.length >= length);

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App container.is-widescreen has-text-centered">
        <h1 className="title is-1 mt-3 has-text-centered">Goods</h1>

        {!isVisible && (
          <button
            type="button"
            className="button is-success mt-2"
            onClick={this.start}
          >
            Start
          </button>
        )}

        <div className="mt-5">
          {isVisible && (
            <div>
              <div className="is-flex is-justify-content-center mt-6">
                <button
                  type="button"
                  className="button is-info mx-4"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-info mx-4"
                  onClick={() => this.sortByName()}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-info mx-4"
                  onClick={() => this.sortByLength()}
                >
                  Sort Sort by length
                </button>

                <button
                  type="button"
                  className="button is-info mx-4"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <select
                  name="length"
                  value={length}
                  onChange={(event) => {
                    this.setState({
                      length: +event.target.value,
                    });
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <ul className="mt-5">
                {visibleGoods.map((good) => (
                  <li key={good} className="is-size-4">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
