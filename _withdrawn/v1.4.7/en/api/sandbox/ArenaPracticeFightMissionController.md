---
title: "ArenaPracticeFightMissionController"
description: "ArenaPracticeFightMissionController — class in SandBox.Missions.MissionLogics.Arena. 15 public members (1 static)."
---

<!-- v147-skeleton -->
# ArenaPracticeFightMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Arena`  
**Module:** `SandBox`  
**Type:** `public class ArenaPracticeFightMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs`

## Overview

`ArenaPracticeFightMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `GetParticipantCharacters`.
- **Instance members** (14): `RemainingOpponentCountFromLastPractice`, `IsPlayerPracticing`, `OpponentCountBeatenByPlayer`, `RemainingOpponentCount`, `IsPlayerSurvived`, `AfterPractice`, ….
- **Extension points** (6): `AfterStart`, `OnScoreHit`, `OnMissionTick`, `OnAgentRemoved`, `MissionEnded`, `OnEndMissionRequest`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `GetParticipantCharacters` | method (static) | Static entry point. Takes 1 argument: `Settlement settlement`. Returns `List<CharacterObject>`. Read path: prefer it over reaching for the backing store. |
| `MissionEnded` | method (override) | Overrides the base member. Takes 1 argument: `ref MissionResult missionResult`. Returns `bool`. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canPlayerLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnScoreHit` | method (override) | Overrides the base member. Takes 10 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `WeaponComponentData attackerWeapon`, `bool isBlocked`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AfterPractice` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `IsPlayerPracticing` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerSurvived` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OpponentCountBeatenByPlayer` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `RemainingOpponentCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `RemainingOpponentCountFromLastPractice` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `StartPlayerPractice` | method | Instance entry point. Takes no arguments. |
| `TeleportTime` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyArenaPracticeFightMissionController : MissionLogic
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}

// Static helpers: ArenaPracticeFightMissionController.GetParticipantCharacters(settlement);
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.
- [MissionConversationLogic](../MissionConversationLogic/) — `SandBox.Conversation.MissionLogics`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/sandbox/](../) — the other types in this bucket.
