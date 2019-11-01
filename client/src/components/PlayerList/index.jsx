import React, { Component } from "react";
import axios from "axios";

import Player from "../Player";

class PlayerList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res);
        this.setState({ playerData: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {this.state.playerData ? (
          this.state.playerData.map(player => (
            <Player {...player} key={player.id} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}

export default PlayerList;
