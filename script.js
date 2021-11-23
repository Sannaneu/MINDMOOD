// Declaration of the constant variables and array ///////////
// This is an array with for the moment two objects in it. You can put in more and separate them with a comma. The last one has no comma.
const mindfulnessArray = [
  {
    text: "Start to bring out some paper and pens, preferably with color. Start to draw something without any goal, give your mind a moment and see where it takes you. It doesn’t have to be any good or beautiful, it just has to be in the present.",
    title: "The Drawer ",
  },
  {
    text: "After a long day, it’s easy to be running high on thoughts and low on energy. So use the dinner as your time to rewind. Cook-eat-dish, all of these phases you can do with a lot of mindfulness, simply by staying focused on each moment. Put your phone on silent, DON’T eat infront of your TV. One suggestion to get in the right mood is to put on some instrumental music, and lower the lights a bit.",
    title: "Cookilama",
  },
  {
    text: "Walk to your nearest window and just take some minutes to notice  what is happening outside. Observe and look to see what’s in your environment without judging. Just simply watching makes your mind rewind and boosts your energy.",
    title: "Window Contemplation",
  },
  {
    text: "Put on your favorite song. Really try to listen to the lyrics, to the beat, and to the melody, what different instruments can you hear? Can you notice your body moving to the rhythm? If not, maybe start moving your body along with the music. Give the attention that the music deserves!",
    title: "The Enthusiastic Music-Listener",
  },
  {
    text: "Leave your phone and your headphones at home. This walk is all about connecting with your surroundings. Start by noticing the sounds, noticing the way your body feels when you are walking, then notice the temperature and the smells in your environment. Are there any distractions in your mind? If so, just gently give your attention back to the outside of yourself.",
    title: "Meditation-Walk",
  },
  {
    text: "Write a gratitude list, think of the good and valuable things that exist in your life. Try to put down five things, and try to stay with them for a while. There is always a light that shines on you, even if the cloud is over you.",
    title: "Appreciation And Release The Tension",
  },
  {
    text: "Lie down on your back with your palms facing up and your feet falling slightly apart. Relax and tune into what you’re feeling. Focus on your breathing. Start to scan your body, begin with your toes, and gently and calmly move up to your head. If thoughts arise, just simply move your attention back to your body.",
    title: "The Scanner",
  },
  {
    text: "Find a comfortable chair, and put your feet on the ground and straighten up your back and put your hand on your knees. Now visualize a box, it contains 4 sides.  Start to breathe in and visualize that one side gets filled, now breathe out, and imagine that two sides now are filled. So when you have to take four breaths you will have a box, so do this for 2 minutes and the calmness will come to you.",
    title: "Breathing In The Box",
  },
  {
    text: "Select an object that you like. It can be anything. Use your sense of sight to engage with that object. Try to see everything about that object until you observe the small details that you didn’t realize before. See how many colors it contains, how’s the shape of it? Just stay with it for a while.",
    title: "The Observer Of Objects",
  },
  {
    text: "This is a useful and powerful tool you can use everywhere. If you’re on your way home from school or work and taking the metro, for example, you can gently give your attention to all the sounds - the people that are talking, the creaky sound from the rails. Make something stressful into something calming.",
    title: "The Observer Of Sounds",
  },
  {
    text: "Now it’s time to give all your attention to your senses and try to find out as many sensations on each. Try to spend around 30sec on each sense. Be as curious and focused as possible, if you get distracted, just bring your attention back gently and calmly to your senses.  Suggested order - 1. Vision 2. Hearing 3. Smell 4. Taste 5. Touch.",
    title: "Just You, And Your Senses",
  },
  {
    text: "This one is useful when you’re emotionally triggered. Start to think of a wave, how big it is in the beginning, powerful and intense. But it doesn’t stay that way for long, slowly it decreases in intensity, and soon it’s only foam left. Now just think of this, as it would be your emotion, it raises and it turns into the calm ocean after a while. The key is to not fight against it.",
    title: "The Surfer",
  },
  {
    text: "We’re living in a world that is spinning at a pace that we haven’t experienced before. We’re constantly connected to the digital world. Now, just take a break from it. You decide where you want to do it, it could be on the couch, on a bench, on a chair, you get it!  Just simply do nothing for 5 min, no goal, no achievement, just let go and be present.",
    title: "Do Nothing",
  },
  {
    text: "Sometimes we struggle to get outside of our own mind, we build up a fictional world and it slowly drains us. So why not take the opportunity to call someone you haven’t talked to for long? Why not leave your own things for a while? And give your attention to someone else and come back with a clearer mind and hopefully more energy.",
    title: "Give Your Attention Away",
  },
  {
    text: "You have probably watched your vacuum cleaner for a long time, but I bet you have been saying “I will do it tomorrow” But tomorrow doesn’t exist, right? Take this time to do it, if you’re present in the cleaning process it will become more fun, really try to get your apartment or house as clean as possible, and you will notice that it actually is very relaxing! Don’t stress, let it take time, and get in the present moment.",
    title: "Cleanfulness",
  },
];
// Targeting the button on the page
const btn = document.querySelector("button");
// Targeting the cross to close the pop-up-window on the page
const cross = document.getElementById("x-cross");

// The action when the user clickes something///////////
// when the button is clicked then a random object is selected from the mindfulnessArray and inserted in the div and the div toggles to visible
btn.addEventListener("click", () => {
  toggle();
  randomObject();
});

// Toggles the exercise-div from hidden to visibile and vice versa
function toggle() {
  document.getElementById("wrapper-mindfulness").classList.toggle("show");
}

// Selects a random object from the array and puts it in the html
function randomObject() {
  //creates a random number for the index for the array
  const randomIndexNumber = Math.floor(Math.random() * mindfulnessArray.length);
  // inserts the text from the array in the html-document
  document.getElementById("text-mindfulness").innerHTML =
    mindfulnessArray[randomIndexNumber].text;
  document.getElementById("title-mindfulness").innerHTML =
    mindfulnessArray[randomIndexNumber].title;
}

// Closes the pop-up-window when the user clickes the cross respectively the div around the cross
cross.addEventListener("click", () => {
  toggle();
});
