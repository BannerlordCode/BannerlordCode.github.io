---
title: "DisguiseMissionLogic"
description: "DisguiseMissionLogic — class in SandBox.Missions.MissionLogics. 23 public members (0 static)."
---

<!-- v147-skeleton -->
# DisguiseMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`  
**Base:** `MissionLogic, IPlayerInputEffector, IMissionBehavior`  
**Source:** `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs`

## Overview

`DisguiseMissionLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, IPlayerInputEffector, IMissionBehavior, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DisguiseMissionLogic`.
- **Instance members** (17): `IsInStealthMode`, `OnCreated`, `GetSpawnFrameOfPassage`, `IsContactAgentTracked`, `CanCommonAreaFightBeTriggered`, `ContactAlreadySetCommonCondition`, ….
- **Extension points** (6): `OnCreated`, `OnAgentBuild`, `OnAgentRemoved`, `OnEndMission`, `OnMissionTick`, `OnEndMissionRequest`.
- **Data and constants** (5): `PlayerSuspiciousLevelMin`, `PlayerSuspiciousLevelMax`, `ToggleStealthModeSuspiciousThreshold`, `MissionFailDistanceToTargetAgent`, `PlayerSuspiciousLevel`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnAgentBuild` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Banner banner`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canPlayerLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CanCommonAreaFightBeTriggered` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ContactAlreadySetCommonCondition` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `GetAgentOffenseInfo` | method | Instance entry point. Takes 1 argument: `Agent agent`. Returns `DisguiseMissionLogic.ShadowingAgentOffenseInfo`. Read path: prefer it over reaching for the backing store. |
| `GetSpawnFrameOfPassage` | method | Instance entry point. Takes 1 argument: `Location location`. Returns `MatrixFrame`. Read path: prefer it over reaching for the backing store. |
| `IsAgentInDetectionRadius` | method | Instance entry point. Takes 2 arguments: `Agent offenderAgent`, `Agent detectorAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsContactAgentTracked` | method | Instance entry point. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInStealthMode` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOnLeftSide` | method | Instance entry point. Takes 3 arguments: `Vec2 lineA`, `Vec2 lineB`, `Vec2 point`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnCollectPlayerEventControlFlags` | method | Instance entry point. Takes no arguments. Returns `Agent.EventControlFlag`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ShadowingAgentOffenseInfo` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `SpawnDisguiseMissionAgentInternal` | method | Instance entry point. Takes 5 arguments: `CharacterObject agentCharacter`, `Vec3 initialPosition`, `Vec2 initialDirection`, `string actionSetId`, …. Returns `Agent`. |
| `MissionFailDistanceToTargetAgent` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `PlayerSuspiciousLevelMax` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `PlayerSuspiciousLevelMin` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `ToggleStealthModeSuspiciousThreshold` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `DisguiseMissionLogic` | ctor | Instance entry point. Takes 3 arguments: `CharacterObject contractorCharacter`, `Location fromLocation`, `bool willSetUpContact`. Returns ``. |
| `PlayerSuspiciousLevel` | field | Instance entry point `float` field — direct storage with no validation or notification. |

- Constructed as `public DisguiseMissionLogic(CharacterObject contractorCharacter, Location fromLocation, bool willSetUpContact)`.

## Usage Example

```csharp
public class MyDisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyDisguiseMissionLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AlarmedBehaviorGroup](../AlarmedBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Passage](../Passage/) — `SandBox.Objects.Usables`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [NavigationMeshDeactivator](../../mission-ext/NavigationMeshDeactivator/) — `TaleWorlds.MountAndBlade.Source.Objects`.

Section: [api/sandbox/](../) — the other types in this bucket.
