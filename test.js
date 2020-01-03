
(function creating_a_game()
{
  const Game = require('./game');

  const game = new Game();

  const user = "user id";

  game.add_player(user);
  console.assert(
    game.has_player(user),
    "The added user is in the game.");

  const other_user = "user id 2";
  console.assert(
    !game.has_player(other_user),
    "The user that hasn't been added isn't in the game.");
})();
