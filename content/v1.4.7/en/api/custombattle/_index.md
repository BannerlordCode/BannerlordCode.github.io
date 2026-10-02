---
title: "Custombattle — a battle mode that needs no campaign"
description: "Where TaleWorlds.MountAndBlade.CustomBattle lives: a battle mode independent of the campaign map. No pages."
---
# Custombattle — a battle mode that needs no campaign

`TaleWorlds.MountAndBlade.CustomBattle`, 16 `.cs` files. It owns one specific thing: a **battle that never touches the campaign map**. Arena-style fights are the model — pick a side, pick a composition, pick a map, fight.

The difference from an ordinary battle is in the flow, not the implementation. A normal battle is started from the campaign side (`CampaignBattle`) and its logic lives in [mission-ext](../mission-ext/); custom battle runs its own flow — side selection, composition, deployment, start — and the types for that are all in this bucket.

It is a 1.4.7-era bucket: the 1.4.5 documentation tree has no matching directory, because `TaleWorlds.MountAndBlade.CustomBattle` is a later namespace.

## Pages in this area (0)

There are no pages in this bucket.

## Not yet written

All 16 types. The load-bearing ones are `CustomBattleProvider` (supplies the match configuration), `CustomBattleSubModule` (the module entry point), `CustomBattleData` and `CustomBattleSceneData` (match and scene data), `CustomBattlePlayerSide` / `CustomBattlePlayerType` (sides), `CustomBattleCompositionData` (composition), `CustomBattleHelper` (flow helpers), and a cluster of interface models: `CustomBattleFactionSelectionVM`, `ArmyCompositionGroupVM`, `ArmyCompositionItemVM`, `CharacterItemVM`, `FactionItemVM`, `GameTypeItemVM`, `MapItemVM`, `PlayerSideItemVM` and `GauntletCustomBattleMissionCheatView`.

The bucket is small — about 21 documented types — but at zero pages "how do I set up a custom battle" has no answer anywhere in this documentation.

## Sibling areas

[mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [UI Stack](../../architecture/ui-stack)