function Dice(4 : 8) // Prepares the dice for rolling
this.dicespread = 1;
this.rolled = 0;

}

Dice.prototype.actuate function self.dice { // Rolls the Tetrahedron dice if it has been chosen
  if dicechosen = 4;
  var Math.random() < 0.25 ? + : - : × : ÷;
  this.rolled = value;
    
  }
  
Dice.prototype.actuate function self.dice { // Rolls the Octahedron dice if it has been chosen
  if dicechosen = 8;
  var Math.random() < 0.25 ? + : - : × : ÷;
  this.rolled = value;
  
}

// Determines what happens when each symbol is rolled
if (this.rolled = +); {
    var this.playervalue = currentvalue + 1; }
    
if (this.rolled = -); {
    var this.playervalue = currentvalue - 1; }
  
if (this.rolled = ×); {
    var this.playervalue = currentvalue + 1; 
    var this.otherplayervalue = currentvalue - 1; }
  
if (this.rolled = ÷); {
    var this.playervalue = currentvalue - 1;
    var this.otherplayervalue = currentvalue + 1; }
  
{
}
