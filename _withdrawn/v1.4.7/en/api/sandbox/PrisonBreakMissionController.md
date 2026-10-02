---
title: "PrisonBreakMissionController"
description: "PrisonBreakMissionController — class in SandBox.Missions.MissionLogics.Towns. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# PrisonBreakMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Towns`  
**Module:** `SandBox`  
**Type:** `public class PrisonBreakMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs`

## Overview

`PrisonBreakMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PrisonBreakMissionController`.
- **Instance members** (11): `OnCreated`, `OnBehaviorInitialize`, `AfterStart`, `OnAgentInteraction`, `IsThereAgentAction`, `OnAgentAlarmedStateChanged`, ….
- **Extension points** (10): `OnCreated`, `OnBehaviorInitialize`, `AfterStart`, `OnAgentInteraction`, `IsThereAgentAction`, `OnAgentAlarmedStateChanged`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `IsThereAgentAction` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `Agent otherAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAgentAlarmedStateChanged` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Agent.AIStateFlag flag`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentInteraction` | method (override) | Overrides the base member. Takes 3 arguments: `Agent userAgent`, `Agent agent`, `sbyte agentBoneIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnStealthMissionCounterFailed` | method | Instance entry point. Takes 1 argument: `OnStealthMissionCounterFailedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PrisonBreakMissionController` | ctor | Instance entry point. Takes 1 argument: `CharacterObject prisonerCharacter`. Returns ``. |

- Constructed as `public PrisonBreakMissionController(CharacterObject prisonerCharacter)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyPrisonBreakMissionController : MissionLogic
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AlarmedBehaviorGroup](../AlarmedBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.

Section: [api/sandbox/](../) — the other types in this bucket.
