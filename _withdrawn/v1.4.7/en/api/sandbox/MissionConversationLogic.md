---
title: "MissionConversationLogic"
description: "MissionConversationLogic — class in SandBox.Conversation.MissionLogics. 19 public members (1 static)."
---

<!-- v147-skeleton -->
# MissionConversationLogic

**Namespace:** `SandBox.Conversation.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class MissionConversationLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Conversation/MissionLogics/MissionConversationLogic.cs`

## Overview

`MissionConversationLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `MissionConversationLogic`, `MissionConversationLogic`.
- **Static entry points** (1): `Current`.
- **Instance members** (16): `State`, `ConversationManager`, `IsReadyForConversation`, `ConversationAgent`, `OnBehaviorInitialize`, `OnRemoveBehavior`, ….
- **Extension points** (9): `OnBehaviorInitialize`, `OnRemoveBehavior`, `OnAgentBuild`, `OnMissionTick`, `EarlyStart`, `OnEndMission`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Current` | property (static) | Static entry point `MissionConversationLogic` property. Read it for current state; a declared setter writes that state in place. |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `IsThereAgentAction` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `Agent otherAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAgentBuild` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Banner banner`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentInteraction` | method (override) | Overrides the base member. Takes 3 arguments: `Agent userAgent`, `Agent agent`, `sbyte agentBoneIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRemoveBehavior` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRenderingStarted` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ConversationAgent` | property | Instance entry point `Agent` property. Read it for current state; a declared setter writes that state in place. |
| `ConversationManager` | property | Instance entry point `ConversationManager` property. Read it for current state; a declared setter writes that state in place. |
| `DisableStartConversation` | method | Instance entry point. Takes 1 argument: `bool isDisabled`. |
| `IsReadyForConversation` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetSpawnArea` | method | Instance entry point. Takes 1 argument: `Alley alley`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StartConversation` | method | Instance entry point. Takes 3 arguments: `Agent agent`, `bool setActionsInstantly`, `bool isInitialization`. |
| `State` | property | Instance entry point `MissionState` property. Read it for current state; a declared setter writes that state in place. |
| `MissionConversationLogic` | ctor | Instance entry point. Takes 1 argument: `CharacterObject teleportNearChar`. Returns ``. |
| `MissionConversationLogic` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionConversationLogic(CharacterObject teleportNearChar)`.
- Constructed as `public MissionConversationLogic()`.

## Usage Example

```csharp
public class MyMissionConversationLogic : MissionLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyMissionConversationLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Conversation/MissionLogics/MissionConversationLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [Workshop](../../campaign/Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [GameNetwork](../../mission-ext/GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AccompanyingCharacter](../../campaign/AccompanyingCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [AgentBehavior](../AgentBehavior/) — `SandBox.Missions.AgentBehaviors`.

Section: [api/sandbox/](../) — the other types in this bucket.
