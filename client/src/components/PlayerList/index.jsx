import React, { Component } from "react";
import axios from "axios";

import Player from "../Player";

class PlayerList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { playerData: props.playerData };
  }

  componentDidMount() {
    if (this.state.playerData.length > 0) {
      return;
    }
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res);
        this.setState = { playerData: res.data };
        this.props.setPlayerData(res.data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {this.state.playerData.length > 0 ? (
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
