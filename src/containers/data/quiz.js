const data = [
  {
    _id: 0,
    name: "My inner world",
    description: "some interesting psyhological test",
    fullDescription: "",
    image: "/images/9rVK_We3qC8.jpg",
    questions: [
      {
        _id: 0,
        metter: "Do you like this test?",
        variants: [
          {
            _id: 0,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 1,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
        ],
      },
    ],
  },
  {
    _id: 1,
    name: "My outter world",
    description: "just another test for you",
    fullDescription: "",
    image: "/images/crusade_career_by_chrisnfy85-d30l5dg.jpg",
    questions: [
      {
        _id: 0,
        metter: "Do you like this test?",
        variants: [
          {
            _id: 0,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 1,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
          {
            _id: 2,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 3,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
          {
            _id: 4,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 5,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
          {
            _id: 6,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 7,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
          {
            _id: 8,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 9,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
          {
            _id: 10,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 11,
            content: "Very",
            adjunct: "",
          }
        ],
      },
      {
        _id: 1,
        metter: "Are you sure?",
        variants: [
          {
            _id: 0,
            content: "Yes, ofcource",
            adjunct: "",
          },
          {
            _id: 1,
            content: "Positive",
            adjunct: "I'm still exited",
          },
        ],
      },
      {
        _id: 1,
        metter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        variants: [
          {
            _id: 0,
            content: "Yes, ofcource",
            adjunct: "",
          },
          {
            _id: 1,
            content: "Positive",
            adjunct: "I'm still exited",
          },
        ],
      },
    ],
  },
  {
    _id: 2,
    name: "My inner world",
    description: "some interesting psyhological test",
    fullDescription: "",
    image: "/images/crusade_career_by_chrisnfy85-d30l5dg.jpg",
    questions: [
      {
        _id: 0,
        metter: "Do you like this test?",
        variants: [
          {
            _id: 0,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 1,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
        ],
      },
    ],
  },
  {
    _id: 3,
    name: "My outter world",
    description: "just another test for you",
    fullDescription: "",
    image: "/images/9rVK_We3qC8.jpg",
    questions: [
      {
        _id: 0,
        metter: "Do you like this test?",
        variants: [
          {
            _id: 0,
            content: "Very",
            adjunct: "",
          },
          {
            _id: 1,
            content: "Veery-very much!",
            adjunct: "I'm so exited",
          },
        ],
      },
    ],
  },
];

exports.data = data;

exports.findById = (quizId) => {
    let result = data.find((quiz) => {
    return quiz._id === parseInt(quizId);
  });

  if (!result) {
    result = {
      _id: quizId,
      name: "",
      description: "",
      fullDescription: "",
      image: "",
      questions: [],
    };
  }

  return result;
};
