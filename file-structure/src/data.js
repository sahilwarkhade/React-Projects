const Data = [
  {
    id: 1,
    fileName: "public",
    isFolder: true,
    children: [
      {
        id: 2,
        fileName: "index.js",
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    id: 3,
    fileName: "src",
    isFolder: true,
    children: [
      {
        id: 4,
        fileName: "assets",
        isFolder: true,
        children: [
          {
            id: 5,
            fileName: "thumbnail.png",
            isFolder: false,
            children: [],
          },
        ],
      },
      {
        id: 6,
        fileName: "App.js",
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    id: 7,
    fileName: "package.json",
    isFolder: false,
    children: [],
  },
];

export default Data;
