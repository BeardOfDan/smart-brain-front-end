import React from 'react';

class Rank extends React.Component {
  constructor() {
    super();

    this.state = {
      emoji: ''
    };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  generateEmoji = (entries) => {
    const emojis = ['🤔', '😀', '😁', '😊', '🔶', '🔷', '🚀'];

    const emoji = (entries > (emojis.length - 1)) ? emojis[emojis.length - 1] : emojis[entries];

    this.setState({ emoji });
  }

  render() {
    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {this.props.entries}
        </div>
        {/* <div className='white f3'>
          {`Rank Badge: ${this.state.emoji}`}
        </div> */}
      </div>
    );
  }
}

export default Rank;
