---
title: "Sandbox — the SandBox module: content, AI and map events"
description: "Where the SandBox namespace lives: the campaign module shipped with the game. Roughly 321 types and no pages."
---
# Sandbox — the SandBox module

This bucket is the `SandBox` namespace — the campaign module that ships with the game, 37 `.cs` files under `bannerlord-1.4.7/SandBox/`. It owns what actually happens on the map: map events, AI decisions, and content definitions.

The difference from [campaign](../campaign/) is division of labour, not size. `campaign/` is the data (`Hero`, `Party`, `Clan`); `sandbox/` is the rules for what happens to that data. When a player runs into bandits on the map, the logic that runs is here, and changing it changes map behaviour.

This is one of the two largest empty buckets in the tree: roughly 321 documented types, no pages.

## Pages in this area (0)

There are no pages in this bucket.

## Not yet written

Everything the namespace rule puts here:

- **Managers**: `SandBoxGameManager`, `SandBoxManager`, `SandBox`, `CampaignAgentComponent`, `CampaignMissionManager`, `CampaignMapSiegePrefabEntityCache`.
- **Map events**: `MapEventSide`, `MapEvent`, `VillageLottery` and the map-event trigger family — the layer where the player encounters things on the map.
- **AI and cheats**: most of the 37 root `.cs` files are cheats (`GameplayCheatsManager`, `BoostSkillCheatGroup`, `Add1000GoldCheat`, `FillCraftingStaminaCheat`, and so on); the rest are `AgentNavigator`, `EditorSceneMissionManager` and similar. The cheat family is excluded from the documentation tree on purpose.
- **Content definitions**: settlement, village and notable content, and how it is loaded.

The bucket is empty. If you want to know how the sandbox campaign actually behaves, the pages here will not tell you — start from the layering conclusions in the [architecture overview](../../architecture/) and the source under `bannerlord-1.4.7/SandBox/`.

## Sibling areas

[campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [SDK Overview](../../architecture/sdk-overview)