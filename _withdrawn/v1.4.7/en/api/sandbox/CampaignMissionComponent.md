---
title: "CampaignMissionComponent"
description: "CampaignMissionComponent — class in SandBox.Missions.MissionLogics. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# CampaignMissionComponent

**Namespace:** `SandBox.Missions.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`  
**Base:** `MissionLogic, ICampaignMission`  
**Source:** `SandBox/Missions/MissionLogics/CampaignMissionComponent.cs`

## Overview

`CampaignMissionComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends MissionLogic, ICampaignMission, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Instance members** (17): `State`, `AgentSupplier`, `Location`, `LastVisitedAlley`, `OnAgentCreated`, `OnPreDisplayMissionTick`, ….
- **Extension points** (10): `OnAgentCreated`, `OnPreDisplayMissionTick`, `OnMissionTick`, `OnObjectDisabled`, `EarlyStart`, `OnCreated`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentCreated` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionResultReady` | method (override) | Overrides the base member. Takes 1 argument: `MissionResult missionResult`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPreDisplayMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnObjectDisabled` | method (override) | Overrides the base member. Takes 1 argument: `DestructableComponent missionObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AgentSupplier` | property | Instance entry point `IMissionTroopSupplier` property. Read it for current state; a declared setter writes that state in place. |
| `FadeOutCharacter` | method | Instance entry point. Takes 1 argument: `CharacterObject characterObject`. |
| `LastVisitedAlley` | property | Instance entry point `Alley` property. Read it for current state; a declared setter writes that state in place. |
| `Location` | property | Instance entry point `Location` property. Read it for current state; a declared setter writes that state in place. |
| `OnGameStateChanged` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PlayConversationSoundEvent` | method | Instance entry point. Takes 1 argument: `string soundPath`. |
| `State` | property | Instance entry point `GameState` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// CampaignMissionComponent is read through its properties:
//   State : GameState
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/CampaignMissionComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [ISiegeEventSide](../../campaign/ISiegeEventSide/) — `TaleWorlds.CampaignSystem.Siege`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [CampaignBattleResult](../../campaign/CampaignBattleResult/) — `TaleWorlds.CampaignSystem.Encounters`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [ConversationAnimData](../../campaign-ext/ConversationAnimData/) — `TaleWorlds.CampaignSystem.Conversation`.

Section: [api/sandbox/](../) — the other types in this bucket.
