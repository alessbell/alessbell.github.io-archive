var game = {
  turn: "Rob",
  instruct: function(str) {
    $('caption').text(str);
  },
  begin: function() {
    // reset things! clear last game if there's a game to clear
    $('body').off('click');
    $('td')
      .text('')
      .removeClass('taken')
      .removeClass('win')
    // set up event handler for taking a turn
    $('td').click(function() {
      $(this)
        .text(game.turn) // put an X or O in the cell
        .addClass('taken') // display as taken
        // .addClass('rofo')
        .off('click') // don't allow clicking on it again

      if(typeof game.turn != 'undefined' && game.turn == "Rob") {
        $(this).addClass('rofo')
      }

      if(typeof game.turn != 'undefined' && game.turn == "Olivia") {
        $(this).addClass('chowtime')
      }

      var game_over = false;
      if ($('td.taken').length > 4) { // no one can win until the 5th turn
        if (game.win_on_turn($(this).parent().index(), $(this).index())) {
          game.instruct("Game over, " + game.turn + " won. Click to play again.");
          game_over = true;
        }
        else if ($('td.taken').length == 9) {
          game.instruct("Game over: tie game. Click to play again.");
          game_over = true;
        }
      }
      if (game_over) {
        $('body').removeClass('game-on');
        $('td').off('click'); // shouldn't be able to take turns any more
        setTimeout(function(){$('body').click(game.begin)}, 1); // wait 1 millisecond, otherwise gets triggered by the click that made the turn
      }
      else {
        game.turn = game.turn == "Rob" ? "Olivia" : "Rob"; // alternate whose turn it is
        game.turn_begin();
      }
    });
  // begin
  $('body').addClass('game-on');
  $('td').removeClass('rofo');
  $('td').removeClass('chowtime');
  game.turn_begin();
  },
  turn_begin: function() {
    game.instruct( "Your turn, " + game.turn );
  },
  cell: function(row, col) {
    return $('tr:eq(' + row + ') td:eq(' + col + ')');
  },
  check_n_show_win: function(a, b, c) {
      a = game.cell(a[0], a[1]);
      b = game.cell(b[0], b[1]);
      c = game.cell(c[0], c[1]);
      if (a.text() && a.text()==b.text() && b.text()==c.text()) {
        a.addClass('win');
        b.addClass('win');
        c.addClass('win');
        return true;
      }
      return false;
  },
  win_on_turn: function(row, col) { // check if there is a win after a new turn at [row, col]
    if (game.check_n_show_win([row, 0], [row, 1], [row, 2])) { // check the row
      return true;
    }
    if (game.check_n_show_win([0, col], [1, col], [2, col])) { // check the column
      return true;
    }
    if (game.check_n_show_win([2,0], [1,1], [0,2])) { // check / diagonal
      return true;
    }
    return game.check_n_show_win([0,0], [1,1], [2,2]); // check \ diagonal
  }
};

$(function(){
  game.begin();
});

console.log("Hey again, FITC :) My name is")

console.log("      ___           ___       ___           ___           ___                        ___")
console.log("     /  /\\         /  /\\     /  /\\         /  /\\         /  /\\           ___        /  /\\")
console.log("    /  /::\\       /  /:/    /  /::\\       /  /::\\       /  /::\\         /__/\\      /  /::\\")
console.log("   /  /:/\\:\\     /  /:/    /  /:/\\:\\     /__/:/\\:\\     /__/:/\\:\\        \\__\\:\\    /  /:/\\:\\")
console.log("  /  /::\\ \\:\\   /  /:/    /  /::\\ \\:\\   _\\_ \\:\\ \\:\\   _\\_ \\:\\ \\:\\       /  /::\\  /  /::\\ \\:\\")
console.log(" /__/:/\\:\\_\\:\\ /__/:/    /__/:/\\:\\ \\:\\ /__/\\ \\:\\ \\:\\ /__/\\ \\:\\ \\:\\   __/  /:/\\/ /__/:/\\:\\_\\:\\")
console.log(" \\__\\/  \\:\\/:/ \\  \\:\\    \\  \\:\\ \\:\\_\\/ \\  \\:\\ \\:\\_\\/ \\  \\:\\ \\:\\_\\/  /__/\\/:/~~  \\__\\/  \\:\\/:/")
console.log("      \\__\\::/   \\  \\:\\    \\  \\:\\ \\:\\    \\  \\:\\_\\:\\    \\  \\:\\_\\:\\    \\  \\::/          \\__\\::/")
console.log("      /  /:/     \\  \\:\\    \\  \\:\\_\\/     \\  \\:\\/:/     \\  \\:\\/:/     \\  \\:\\          /  /:/")
console.log("     /__/:/       \\  \\:\\    \\  \\:\\        \\  \\::/       \\  \\::/       \\__\\/         /__/:/")
console.log("     \\__\\/         \\__\\/     \\__\\/         \\__\\/         \\__\\/                      \\__\\/")

console.log("and I <3 the web.")
console.log(" ")
console.log("I'm a recent graduate of both the University of Toronto (political science) and Bitmaker Labs (Ruby on Rails/JavaScript). I first began writing markup in my grade 7 computers class: I distinctly remember learning CSS at a time when the ability to create rounded corners was omitted from the original CSS specs. Whenever I'm frustrated with one aspect of front-end development or another, I think back to a time when rounded corners could only be achieved through hacky solutions like layering empty tags with decreasing side margins or by manually drawing them in Photoshop and inserting them as images... Those were the days.")
console.log(" ")
console.log("Before I decided to pursue web development, I was a communications staffer for a Toronto city councillor: I had the unique privilege of working at city hall during the infamous Summer of Crack. Our fair mayor provided ample inspiration for my #WomenofWebU application—I hope you enjoy playing my Rob Ford-inspired jQuery game :)")
console.log(" ")
console.log("I've attended a few hackathons but FITC's Web Unleashed would be my first web conference. I would greatly appreciate the opportunity to attend because, as I've already experienced, the web dev community in Toronto is an incredibly supportive and active one. I hope to continue learning from my peers so that, one day, I can contribute something of value back to the community that I've already learned so much from. The opportunity to attend FITC's Web Unleashed would be an excellent first step in the right direction.")
console.log(" ")
console.log("Thank you for considering my application to #WomenofWebU!")
console.log("- Alessia Bellisario")

