---
title: "Source mission handlers family"
description: "Source-backed mission handlers from the MountAndBlade.Source module, kept as implementation references rather than stable SDK contracts."
---

# Source mission handlers family

## Mental Model

These types are the mission-facing implementation layer shipped with the
MountAndBlade source module. A mission creates and orders them through
`Mission`, `MissionBehavior`, and mission controllers; they are useful when
tracing official call order, but their concrete internals can change between
game versions. The v1.4.5 provenance is
`bannerlord-1.4.5/Bannerlord.Source/Modules.Native` and the source mission
folders, while the linked v1.3.15 pages describe the managed names present in
the inventory.

Read [Mission](../../mission/Mission), [MissionBehavior](../../mission/MissionBehavior), and
[MissionState](../MissionState) first. A controller must not mutate campaign
state directly: route persistent changes through campaign Actions and let the
mission end before releasing agents, scenes, or mission timers.

## Dependencies

- [Mission](../../mission/Mission) owns the scene lifetime and dispatches mission behavior callbacks.
- [MissionBehavior](../../mission/MissionBehavior) is the extension point for a mission instance.
- [Agent](../../mission/Agent), [Team](../../mission/Team), and [Formation](../../mission/Formation) expose live mission state.
- [Actions](../../campaign-ext/actions-index) remain the boundary for campaign-world mutations.

## Source-backed entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.MountAndBlade.Source.Missions | [BaseBattleMissionController](../BaseBattleMissionController) | Coordinates the shared battle mission setup and hands mission events to the configured controllers. | Mission construction and battle teardown |
| TaleWorlds.MountAndBlade.Source.Missions | [BattleSpawnLogic](../BattleSpawnLogic) | Chooses battle spawn points and applies reinforcement decisions to the active mission. | Before initial spawn and during reinforcement waves |
| TaleWorlds.MountAndBlade.Source.Missions | [CaravanBattleMissionHandler](../CaravanBattleMissionHandler) | Connects caravan encounter data to the mission-side battle setup and exit path. | Caravan battle creation and completion |
| TaleWorlds.MountAndBlade.Source.Missions | [DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController) | Provides the source module's debug-only agent teleport controls without becoming campaign state. | Debug mission sessions only |
| TaleWorlds.MountAndBlade.Source.Missions | [DebugObjectDestroyerMissionController](../DebugObjectDestroyerMissionController) | Removes selected mission objects for source diagnostics and test scenes. | Explicit debug input during a mission |
| TaleWorlds.MountAndBlade.Source.Missions | [EquipmentTestMissionController](../EquipmentTestMissionController) | Builds the equipment-test mission flow and keeps its test actors inside mission lifetime. | Equipment test mission startup and reset |
| TaleWorlds.MountAndBlade.Source.Missions | [HideoutPhasedMissionController](../HideoutPhasedMissionController) | Drives hideout phase transitions and the mission controller hand-offs between them. | Hideout phase changes and mission end |
| TaleWorlds.MountAndBlade.Source.Missions | [MissionOptionsComponent](../MissionOptionsComponent) | Exposes mission option state to the mission controller and option UI. | Mission option construction and refresh |
| TaleWorlds.MountAndBlade.Source.Missions | [SimpleMountedPlayerMissionController](../SimpleMountedPlayerMissionController) | Supplies the minimal mounted-player controller used by a focused mission flow. | Player spawn through mission teardown |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [BasicMissionHandler](../BasicMissionHandler) | Installs the common mission handler set used by source-backed mission entry points. | Mission initialization |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [IBoardGameHandler](../IBoardGameHandler) | Bridges a board-game mission to its handler callbacks and result hand-off. | Board-game mission setup and result |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [LordsHallFightMissionController](../LordsHallFightMissionController) | Controls the lords-hall fight scenario and its mission-specific completion path. | Scenario entry, combat, and exit |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | [MissionFacialAnimationHandler](../MissionFacialAnimationHandler) | Registers facial-animation work for actors participating in the active mission. | Actor spawn and animation updates |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | [AgentMoraleInteractionLogic](../AgentMoraleInteractionLogic) | Applies mission-side morale interactions to agents while preserving battle ownership. | Combat events and morale ticks |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | [AmmoSupplyLogic](../AmmoSupplyLogic) | Supplies and refreshes mission ammunition according to the active mission rules. | Spawn, resupply, and mission reset |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | [BattleMissionAgentInteractionLogic](../BattleMissionAgentInteractionLogic) | Resolves agent interaction callbacks that are specific to a battle mission. | Agent interaction events during combat |
| TaleWorlds.MountAndBlade.Source.Objects | [NavigationMeshDeactivator](../NavigationMeshDeactivator) | Disables selected navigation areas when a source mission object changes scene traversal. | Scene setup and object lifecycle |
| TaleWorlds.MountAndBlade.Source.Objects | [SceneLeveler](../SceneLeveler) | Applies the source scene-level adjustment used by mission object setup. | Scene load before agents are spawned |
| TaleWorlds.MountAndBlade.Source.Objects.Siege | [AgentPathNavMeshChecker](../AgentPathNavMeshChecker) | Checks an agent path against the siege navigation mesh for diagnostics and placement. | Siege scene setup and path checks |
| TaleWorlds.MountAndBlade.Source.Objects.Siege | [Direction](../Direction) | Encodes the siege-object direction value consumed by source placement logic. | Siege object creation and placement |

## Navigation

- [Parent: Mission extensions](..)
- [Related: Mission](../../mission/Mission) · [Mission behaviors](../../mission/MissionBehavior)
- [Policy: SandBox / StoryMode / Native](../../../architecture/sandbox-native-policy)
