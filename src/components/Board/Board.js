import React from 'react';

class Board extends React.Component {
  render() {
    return (<table>
      <tbody>
        <tr>
          <td data-hook="cell">X</td>
        </tr>
      </tbody>
    </table>);
  }
}

export default Board;
