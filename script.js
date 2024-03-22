
var quotes = 
[
"You might be alone at the moment... But someday... You'll definitely find nakama! No one is born in this world to be alone! ",
"I want to live!! Take me to sea with you!",
"A man's dream... will never die!!",
"When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It’s when… they are forgotten.",
"Fools who don't respect the past are doomed to repeat it.",
"Thank you... for loving me!!",
"Don't try to find a reason for somebody's love!",
"It's never a crime to exist!",
"I’m going to be the Pirate King!",
"My wealth and treasures? If you want it, i’ll let you have it. Look for it, I left all of it at that place!",
"I’ve set myself to become the King of Pirates… and if I die trying… then at least I tried.",
"Scars on the back are a swordsman’s shame.",
"Pirates are evil? The Marines are righteous?… Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",
"Men who can’t wipe away the tears from a woman’s eyes aren’t real men.",
"Life is like a pencil that will surely run out, but will leave the beautiful writing of life.",
"There comes a time when a man has to stand and fight! That time is when his friends’ dreams are being laughed at! And I won’t let you laugh at that!",
"We both share foolish dreams.",
"Don't start a fight if you can't end it.",
"No matter what happens, don’t be sorry you were born, don’t forget to smile in any situation. As long as you’re alive there will be better things later…and there will be many.",
"Maybe nothing in this world happens by accident. As everything happens for a reason, our destiny slowly takes form.",
"To true friendship, how long you’ve known each other means nothing.",
"The weak don’t get to decide anything, not even how they die.",
"Nothing..Happened.",
"Over the nine moutains, across the eight seas, there is nothing I cannot cut.",
"If you don't take risks, you can't create a future.",
"We shouldn't worry about being able to achieve our dreams, as long as we have the desire to do it.",
"What keeps me alive in this world is neither bodily organs nor muscles, it’s my soul.",
"There is no such thing as impossible in this world.",
"What good are your happy ideals if you can't do anything to make them a reality?",
"Sometimes the only thing you have to doubt is your own common sense.",
"Have you ever been kicked at the speed of light?",
"By experiencing both victory and defeat, running away and shedding tears, a man will become a man. It’s okay to cry, but you have to move on.",
"I'll die smiling! Because if you ever think of me in the future, I want you to remember me smiling." ,
"All for one, one for all! There are times when a man has no choice but to act!",
"Being alone is more painful than getting hurt.",
"I have no sympathy for criminals but for my family, I do.",
"This thing called Justice… changes its shape depending on where you stand." ,
"Compared to the 'righteous' greed of the rulers, the criminals of the world seem much more honorable.",
"Don’t ever think there’s any perfect society made by humans! If you think that way you’ll overlook the enemy! Don’t be fooled by appearances!",
"Luffy will be the man who becomes the Pirate King!",
"It's a man's duty to forgive women's lies.",
"The time is almost here. Go and lay the groundwork. A world where only true pirates can survive will soon be upon us. Those without power, flee while you can.",
"My wealth and treasures? If you want it, I’ll let you have it. Look for it, I left all of it at that place!",
"The One Piece does exist!"
]

function newQuote(){
    var rand = Math.floor(quotes.length * Math.random());
    document.getElementById("quote").innerHTML = '<i id="mark" class="fas fa-quote-left"></i>' + quotes[rand];
}


