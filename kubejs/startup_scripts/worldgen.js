WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "railcraft:lead_ore",
      "railcraft:deepslate_lead_ore",
      "railcraft:tin_ore",
      "railcraft:deepslate_tin_ore",
      "railcraft:zinc_ore",
      "railcraft:deepslate_zinc_ore"
      ]
    })
})