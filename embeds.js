// at the top of your file
const { MessageEmbed } = require("discord.js");

module.exports = {
  current_map: (current, next) => {
    return new MessageEmbed()
      .setColor("#B93038")
      .setTitle("Apex Legends current map")
      .setDescription(
        "Get the current apex legends (battle royale mode) map. use /map"
      )
      .setThumbnail(
        "https://image-testing.fra1.digitaloceanspaces.com/apex.png"
      )
      .setImage(current.asset)
      .addFields(
        { name: "\u200B", value: "\u200B" },
        { name: "Current map", value: current.map, inline: true },
        {
          name: "Remaining",
          value: `${current.remainingMins.toString()} minutes`,
          inline: true,
        }
      )
      .addFields(
        { name: "Next map", value: next.map, inline: true },
        {
          name: "Duration",
          value: `${next.DurationInMinutes.toString()} minutes`,
          inline: true,
        }
      )
      .setTimestamp(new Date())
      .setFooter(
        "♥ senseiacious#1111",
        "https://image-testing.fra1.digitaloceanspaces.com/current-map-logo.png"
      );
  },
  general_error: () =>
    new MessageEmbed()
      .setColor("#B93038")
      .setTitle("Apex Legends current map")
      .setDescription(
        "⚠ There was an error when trying to fetch the current map. Please try again later."
      )
      .setThumbnail(
        "https://image-testing.fra1.digitaloceanspaces.com/apex.png"
      )
      .addFields(
        { name: "\u200B", value: "\u200B" },
        { name: "Current map", value: "-", inline: true },
        { name: "Remaining", value: "-", inline: true }
      )
      .setTimestamp(new Date())
      .setFooter(
        "♥ senseiacious#1111",
        "https://image-testing.fra1.digitaloceanspaces.com/current-map-logo.png"
      ),
};
