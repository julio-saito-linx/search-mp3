import React from 'react';

export default class IndexComponent extends React.Component {
  render() {

    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    /**/console.log('\n>>---------\n this.props.items:\n', this.props.items, '\n>>---------\n');/*-debug-*/

    return (
      <section>
        <h2>search-mp3</h2>
        <ul ref="indexList" className="index-list">
          {this.props.items.map((item, index) => {
            if (item._source) {
              return (<li key={index}>{item._source.filename}</li>);
            }
          })}
        </ul>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};
