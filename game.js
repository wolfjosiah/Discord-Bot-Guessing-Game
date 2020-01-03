
class Game
{
  players = new Set();

  add_player(user)
  {
    this.players.add(user);
  }

  has_player(user)
  {
    return this.players.has(user);
  }
}

module.exports = Game;
