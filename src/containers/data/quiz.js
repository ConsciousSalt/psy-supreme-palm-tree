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
