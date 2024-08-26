const champions = [
  {
    name: "Змій",
    icon: "",
    class: "космос",
    info: "",
    tiers: [2, 3, 4, 5, 6, 7],
    tags: ["Defensive: Tank", "Offensive: Burst", "Villain", "God"],
    size: "L",
    releaseDate: "March 14, 2024",

    ability: {
      main: [
        "страх",
        "пронизання",
        "невідворотність",
        "неблокованість",
        "максимальна зосередженість",
      ],
      signature: ["безсмерття"],
    },

    immunity: {
      main: [
        "безсилля",
        "заборона на спецатаки",
        "заборона на зцілення",
        "печатка долі",
        "похолодання",
      ],
    },
  },
];
function mainInfo(champions) {
  for (let champ of champions) {
    console.log(champ.ability);
  }

  return;
}
console.log(mainInfo(champions));
