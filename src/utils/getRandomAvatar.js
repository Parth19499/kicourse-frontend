exports.getRandomAvatarSrc = () =>
  `https://avatars.dicebear.com/api/human/${Math.floor(
    Math.random() * 5000
  )}.svg`;
