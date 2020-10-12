// Types
const newTestVariable: any = 'Hello';
const isBootcampAwsome: boolean = true;
const bootcampLengthInWeeks: number = 9;
const mostPopularReview: string = 'Life changing';
const techTaught: string[] = ['JavaScript', 'React', 'MongoDB'];
const randomNumbers: number[] = [1,2,3];
const stringsAndNumbers: (number | string)[] = ['hello', 1, 2, 'number', 2]
const tiredIndexVsCupsOfCoffee: [string, number, boolean] = ['Very', 1, true];
// =================
// Enum
enum TrafficLight {
  Red = 'RED',
  Orange = 'ORANGE',
  Green = 'GREEN',
}

const currentLight: TrafficLight = TrafficLight.Red;
const anotherLight: TrafficLight = TrafficLight.Orange;
// =================
// Interface
interface BootcampGraduate {
  mood: string;
  linesOfCodeWritten: number;
  favoriteEnergySource: EnergySources;
  favoriteTravelDestination?: TravelDestinations;
}

interface EnergySources {
  drink: string;
  activity: string;
  music: string;
}

interface TravelDestinations {
  country: string;
}

const graduateNumber1: BootcampGraduate = {
  mood: 'Thrilled',
  linesOfCodeWritten: 9000,
  favoriteEnergySource: {
    drink: 'Exspresso',
    activity: 'Breathing',
    music: 'Beyonce'
  },
  favoriteTravelDestination: {country: 'Israel'}
}

interface HaikuInput {
  a: number;
  b: string;
  c: string;
}

// =================
// Haiku function

export const haiku = ({a,b,c}:HaikuInput): string => {
  return `${a} ${b} ${c}`
}

haiku({a: 1, c: '2', b: '3'});
haiku({a: '1', b: '2', c: '3'});

// =================
// Umbrella problem

// export const isItRainingToday = ()

// =================
// twitter activity

const readTweet = (tweet: string | number):string | number => {
  return tweet;
}

readTweet("This is a tweet");
readTweet(1);
readTweet(true);
readTweet(graduateNumber1);

export const tweetsPostedLastMonth = (
  tweets: string[] | number[] | [number, string, number]
): string | number => {
  console.log(tweets[0]);
  return tweets[0];
}

tweetsPostedLastMonth(["Tweet", "Figure"]);
tweetsPostedLastMonth([2, 3]);
tweetsPostedLastMonth(["Tweet", 2]);
tweetsPostedLastMonth([2, "Figure"]);
tweetsPostedLastMonth([1, "Figure", 1]);

