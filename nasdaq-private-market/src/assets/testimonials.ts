type testimonial = {
  id: number;
  name: string;
  testimonial: string;
  image: string;
  logo: string;
  description: string;
};

const testimonials: testimonial[] = [
  {
    id: 1,
    name: "Brian Carroll",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi arcu, pellentesque ac imperdiet nec, eleifend tristique dolor. Aliquam venenatis lectus odio, quis fringilla nunc dictum id. Donec non leo enim.",
    image: "images/Square-Headshot_Vertical_Brian-Caroll.webp",
    logo: "images/Hopper-Testimonial.webp",
    description: "VP Corporate Development and General Counsel, Hopper",
  },
  {
    id: 2,
    name: "Scott Baumgartner",
    testimonial:
      "Duis ut arcu eget tortor porttitor maximus et sit amet quam. Etiam vestibulum, dolor quis vestibulum semper, nulla ligula viverra nisl, in placerat eros mi ut nisi.",
    image: "images/Docker-Testimonial-Image.webp",
    logo: "images/Docker-Testimonial.webp",
    description: "Chief Financial Officer, Docker",
  },
  {
    id: 3,
    name: "Matthew Rinegar",
    testimonial:
      "Phasellus elit metus, dictum ac massa quis, ultricies sollicitudin dui. Donec eu magna ut turpis facilisis consectetur sed a ligula. Morbi congue dolor a diam tincidunt commodo. Nullam vestibulum leo in tincidunt pharetra.",
    image: "images/Icertis-Image.webp",
    logo: "images/Icertis-Testimonial.webp",
    description: "Senior Corporate Counsel, Icertis",
  },
  {
    id: 4,
    name: "Jamie Hutchinson + Cammy Contizano",
    testimonial:
      "Pellentesque at turpis sed odio interdum mollis. Proin auctor elit massa, vel gravida odio interdum a. In vel odio quis lorem bibendum vestibulum ut eu eros. Nunc ut porta quam, et imperdiet risus.",
    image: "images/Goodwin-Testimonial-copy.webp",
    logo: "images/Goodwin-Testimonial.webp",
    description: "Partners, Goodwin Procter",
  },
  {
    id: 5,
    name: "Annie Frye",
    testimonial:
      "Proin turpis massa, laoreet id molestie non, consectetur sit amet sem. Proin viverra odio augue, sed condimentum tellus vehicula ac. Duis blandit nisl turpis, eget lobortis tellus euismod sit amet. Donec fermentum libero vel turpis pretium eleifend.",
    image: "images/annie.webp",
    logo: "images/strava-logo.webp",
    description: "Legal, Strava",
  },
  {
    id: 6,
    name: "Melissa Rick",
    testimonial:
      "Praesent ultrices, ipsum ac laoreet fringilla, erat justo molestie arcu, et mattis justo ligula quis quam. Nulla pretium ligula tempor elementum tempus. Integer sed lacus semper, mollis tortor in, sodales elit.",
    image: "images/Rick_Melissa.webp",
    logo: "images/WilsonSonsini-Stack-Black-2.webp",
    description: "Partner, Wilson Sonsini",
  },
  {
    id: 7,
    name: "Sacha Ross",
    testimonial:
      "Proin turpis massa, laoreet id molestie non, consectetur sit amet sem. Proin viverra odio augue, sed condimentum tellus vehicula ac. Duis blandit nisl turpis, eget lobortis tellus euismod sit amet.",
    image: "images/sacha.webp",
    logo: "images/cooley-logo.webp",
    description: "Partner, Cooley",
  },
  {
    id: 8,
    name: "Ryan Dzierniejko",
    testimonial:
      "Integer sollicitudin posuere sem, vel eleifend enim placerat ac. In hendrerit purus eget pulvinar pulvinar. Aliquam efficitur diam a nisi molestie placerat. Nam egestas massa ac laoreet scelerisque.",
    image: "images/MjdCOTdDNjI5MDgxRg.webp",
    logo: "images/Skadden-Testimonial.webp",
    description: "Partner, Capital Markets, Skadden Arps.",
  },
  {
    id: 9,
    name: "June Ko",
    testimonial:
      "We had the pleasure of using the NPM platform and had a fantastic overall experience. Nasdaq Private Market's Knowledgeable and efficient team enabled us to successfully launch in a ",
    image: "images/june.webp",
    logo: "images/circleci-logo.webp",
    description: "Legal, CircleCI",
  },
  {
    id: 10,
    name: "Scott Buxton",
    testimonial:
      "Nam pharetra, erat vel tempor hendrerit, ipsum mauris faucibus lacus, a tempor nulla ipsum eget orci. Pellentesque dignissim tempus nunc at fermentum. Praesent ut sodales lorem. Morbi egestas molestie felis, eu fringilla quam commodo et.",
    image: "images/scott.webp",
    logo: "images/datadog-logo.webp",
    description: "VP of Finance, DataDog",
  },
];

export { type testimonial, testimonials };
