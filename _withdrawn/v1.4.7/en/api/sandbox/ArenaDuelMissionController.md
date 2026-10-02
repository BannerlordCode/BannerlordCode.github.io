---
title: "ArenaDuelMissionController"
description: "ArenaDuelMissionController — class in SandBox.Missions.MissionLogics.Arena. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# ArenaDuelMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Arena`  
**Module:** `SandBox`  
**Type:** `public class ArenaDuelMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs`

## Overview

`ArenaDuelMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArenaDuelMissionController`.
- **Instance members** (4): `AfterStart`, `OnMissionTick`, `OnAgentRemoved`, `OnEndMissionRequest`.
- **Extension points** (4): `AfterStart`, `OnMissionTick`, `OnAgentRemoved`, `OnEndMissionRequest`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canPlayerLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ArenaDuelMissionController` | ctor | Instance entry point. Takes 5 arguments: `CharacterObject duelCharacter`, `bool requireCivilianEquipment`, `bool spawnBothSideWithHorses`, `Action<CharacterObject> onDuelEnd`, …. Returns ``. |

- Constructed as `public ArenaDuelMissionController(CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBothSideWithHorses, Action<CharacterObject> onDuelEnd, float customAgentHealth)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyArenaDuelMissionController : MissionLogic
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
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TournamentBehavior](../TournamentBehavior/) — `SandBox.Tournaments.MissionLogics`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/sandbox/](../) — the other types in this bucket.
