class Form {
    constructor(){
this.input = createInput("Name");
this.button = createButton('Play');
this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth-500, 0);

    this.input.position(displayWidth-500, displayHeight-750);
    this.button.position(displayWidth-450, displayHeight-700);


    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();        
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        this.greeting.html("Hello,"+ player.name);
        this.greeting.position(displayWidth-500,160);
    });

}
}