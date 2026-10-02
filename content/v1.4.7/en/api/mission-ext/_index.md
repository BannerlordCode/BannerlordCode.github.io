---
title: "Mission ext — the whole battle implementation surface"
description: "Where TaleWorlds.MountAndBlade and TaleWorlds.Mission live: 669 .cs files and no pages at all."
---
# Mission ext — the whole battle implementation surface

This bucket holds the namespace `TaleWorlds.MountAndBlade` — 669 `.cs` files in 1.4.7 — plus `TaleWorlds.Mission` underneath it. It is the largest surface in the whole taxonomy: how a battle runs, how the AI decides, how a spawn phase is laid out, which events fire when.

By size it is more than three times `campaign/`. So if you arrive looking for a battle API and find this bucket empty, that is the actual state of the documentation, not a loading problem.

The four classes a mod actually inherits — `Mission`, `MissionState`, `MissionBehavior`, `Agent` — were carved out by name into [mission](../mission/) so their URLs stay short and findable. What is left here is implementation: roughly 669 classes, including `AgentCommonAILogic`, `AgentHumanAILogic`, `MissionCombatantsLogic`, `MissionSpawnPhase`, `MissionBoundaryPlacer` and `ActionIndexCache`, plus the `Missions`, `MissionSpawnHandlers`, `Objects` and `Options` sub-directories.

## Pages in this area (0)

There are no pages in this bucket. That is the current state of the documentation.

## Not yet written

Everything, in four groups:

- **Agent behaviour and decisions**: `AgentBuildData`, `AgentAIStateFlag`, `AgentState`, `AgentCommonAILogic`, `AgentHumanAILogic`, `AgentDrivenProperties`, `AgentProximityMap`, `AgentSpawnData`. If you are changing soldier AI, this is the only place it happens.
- **Battle logic and flow**: `MissionCombatantsLogic`, `MissionCombatMechanicsHelper`, `MissionBattleSchedulerClientComponent`, `MissionBattleSideSpawnContext`, `MissionSpawnPhase`, `MissionEquipment`, `MissionScoreboardComponent`, `MissionReinforcementsHelper`. The spawn phase and the resolution both run through here.
- **Formations**: `Formation`, `FormationClass`, `MissionFormationSpawnData`, `Action`, `AgentAction`, the `FormationPosition` family. Formations are the most fragmented corner of this bucket.
- **Mission objects and networking**: `MissionObject`, `MissionObjectId`, `MissionNetworkComponent`, `MissionNetwork`, `MissionPeer`, and the ten `MissionMultiplayer*` types (`MissionMultiplayerSiege`, `MissionMultiplayerTeamDeathmatch`, …).

If you came here to change how a battle plays out, the gap means that for now the source tree and the layering conclusions in the [architecture overview](../../architecture/) are what you have.

## Sibling areas

[mission](../mission/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [SDK Overview](../../architecture/sdk-overview)