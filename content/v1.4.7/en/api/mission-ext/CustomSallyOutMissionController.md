---
title: "CustomSallyOutMissionController"
description: "CustomSallyOutMissionController — class in TaleWorlds.MountAndBlade.MissionSpawnHandlers. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomSallyOutMissionController

**Namespace:** `TaleWorlds.MountAndBlade.MissionSpawnHandlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class CustomSallyOutMissionController : SallyOutMissionController`  
**Base:** `SallyOutMissionController`  
**Source:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs`

## Overview

`CustomSallyOutMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends SallyOutMissionController, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomSallyOutMissionController`.
- **Instance members** (1): `GetInitialTroopCounts`.
- **Extension points** (1): `GetInitialTroopCounts`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetInitialTroopCounts` | method (override) | Overrides the base member. Takes 2 arguments: `out int besiegedTotalTroopCount`, `out int besiegerTotalTroopCount`. Read path: prefer it over reaching for the backing store. |
| `CustomSallyOutMissionController` | ctor | Instance entry point. Takes 2 arguments: `IBattleCombatant defenderBattleCombatant`, `IBattleCombatant attackerBattleCombatant`. Returns ``. |

- Constructed as `public CustomSallyOutMissionController(IBattleCombatant defenderBattleCombatant, IBattleCombatant attackerBattleCombatant)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyCustomSallyOutMissionController : SallyOutMissionController
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
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
