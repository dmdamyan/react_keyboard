import React from 'react';

type State = {
  pressedKey: string;
  message: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
    message: 'Nothing was pressed yet',
  };

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      message: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
