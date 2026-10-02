---
title: "AlarmedBehaviorGroup"
description: "AlarmedBehaviorGroup — class in SandBox.Missions.AgentBehaviors. 20 public members (1 static)."
---

<!-- v147-skeleton -->
# AlarmedBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`  
**Module:** `SandBox`  
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup`  
**Base:** `AgentBehaviorGroup`  
**Source:** `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs`

## Overview

`AlarmedBehaviorGroup` is a named type in the SandBox.Missions.AgentBehaviors namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AgentBehaviorGroup, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AlarmedBehaviorGroup`.
- **Static entry points** (1): `AlarmAgent`.
- **Instance members** (13): `AlarmFactor`, `SetCanMoveWhenCautious`, `GetVisualFactor`, `ResetAlarmFactor`, `AddAlarmFactor`, `Tick`, ….
- **Extension points** (7): `Tick`, `GetScore`, `OnActivate`, `OnAgentRemoved`, `OnDeactivate`, `ForceThink`, ….
- **Data and constants** (5): `SafetyDistance`, `SafetyDistanceSquared`, `DisableCalmDown`, `DoNotCheckForAlarmFactorIncrease`, `DoNotIncreaseAlarmFactorDueToSeeingOrHearingTheEnemy`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AlarmAgent` | method (static) | Static entry point. Takes 1 argument: `Agent agent`. |
| `ConversationTick` | method (override) | Overrides the base member. Takes no arguments. |
| `ForceThink` | method (override) | Overrides the base member. Takes 1 argument: `float inSeconds`. |
| `GetScore` | method (override) | Overrides the base member. Takes 1 argument: `bool isSimulation`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Tick` | method (override) | Overrides the base member. Takes 2 arguments: `float dt`, `bool isSimulation`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddAlarmFactor` | method | Instance entry point. Takes 2 arguments: `float addedAlarmFactor`, `in WorldPosition suspiciousPosition`. Adds to the collection or relation this type owns. |
| `AlarmFactor` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetClosestAlarmSource` | method | Instance entry point. Takes 1 argument: `out float distanceSquared`. Returns `Agent`. Read path: prefer it over reaching for the backing store. |
| `GetVisualFactor` | method | Instance entry point. Takes 5 arguments: `Vec3 usedGlobalLookDirection`, `Agent currentAgent`, `MBReadOnlyList<GameEntity> stealthIndoorLightingAreas`, `ref bool hasVisualOnCorpse`, …. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `ResetAlarmFactor` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetCanMoveWhenCautious` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SafetyDistance` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `SafetyDistanceSquared` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `AlarmedBehaviorGroup` | ctor | Instance entry point. Takes 2 arguments: `AgentNavigator navigator`, `Mission mission`. Returns ``. |
| `DisableCalmDown` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `DoNotCheckForAlarmFactorIncrease` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `DoNotIncreaseAlarmFactorDueToSeeingOrHearingTheEnemy` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

- Constructed as `public AlarmedBehaviorGroup(AgentNavigator navigator, Mission mission)`.

## Usage Example

```csharp
// Static entry points on AlarmedBehaviorGroup:
AlarmedBehaviorGroup.AlarmAgent(agent);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentBehaviorGroup](../AgentBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [SkinVoiceManager](../../mission-ext/SkinVoiceManager/) — `TaleWorlds.MountAndBlade`.
- [GameNetwork](../../mission-ext/GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [AgentBehavior](../AgentBehavior/) — `SandBox.Missions.AgentBehaviors`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.

Section: [api/sandbox/](../) — the other types in this bucket.
