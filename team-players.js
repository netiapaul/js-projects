const team={
  _players:[
    {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
		},
    {
  firstName: 'paul',
  lastName: 'netia',
  age: 13
},
    {
  firstName: 'tony',
  lastName: 'mwash',
  age: 10
}
    
  ],
  _games:[
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
    {
  opponent: 'patriots',
  teamPoints: 41,
  opponentPoints: 33
},
    {
  opponent: 'fishers',
  teamPoints: 40,
  opponentPoints: 24
}
  ],
  
  get players(){
    return this._players;
  },
  get games (){
    return this._games ;
  },
  
  addPlayer(firstname,lastname,age){
    let player={
   firstname:firstname,
  	lastname:lastname,
    age:age,
    };
      this.players.push(player);
  },

};

team.addPlayer('Steph', 'Curry',28);
team.addPlayer('Lisa' ,'Leslie ',44);
team.addPlayer('Bugs', 'Bunny ',76);

console.log(team.players);
console.log(team.players);
console.log(team.players);