---
title: "MobilePartyVisualManager"
description: "MobilePartyVisualManager — class in SandBox.View.Map.Managers. 10 public members (1 static)."
---

<!-- v147-skeleton -->
# MobilePartyVisualManager

**Namespace:** `SandBox.View.Map.Managers`  
**Module:** `SandBox.View`  
**Type:** `public class MobilePartyVisualManager : EntityVisualManagerBase<PartyBase>`  
**Base:** `EntityVisualManagerBase`  
**Source:** `SandBox.View/Map/Managers/MobilePartyVisualManager.cs`

## Overview

`MobilePartyVisualManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends EntityVisualManagerBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `Current`.
- **Instance members** (9): `Priority`, `OnTick`, `ClearVisualMemory`, `OnVisualTick`, `OnVisualIntersected`, `GetVisualOfEntity`, ….
- **Extension points** (8): `Priority`, `OnTick`, `ClearVisualMemory`, `OnVisualTick`, `OnVisualIntersected`, `GetVisualOfEntity`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearVisualMemory` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `Current` | property (static) | Static entry point `MobilePartyVisualManager` property. Read it for current state; a declared setter writes that state in place. |
| `GetVisualOfEntity` | method (override) | Overrides the base member. Takes 1 argument: `PartyBase partyBase`. Returns `MapEntityVisual<PartyBase>`. Read path: prefer it over reaching for the backing store. |
| `OnTick` | method (override) | Overrides the base member. Takes 2 arguments: `float realDt`, `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnVisualIntersected` | method (override) | Overrides the base member. Takes 9 arguments: `Ray mouseRay`, `UIntPtr[] intersectedEntityIDs`, `Intersection[] intersectionInfos`, `int entityCount`, …. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnVisualTick` | method (override) | Overrides the base member. Takes 3 arguments: `MapScreen screen`, `float realDt`, `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Priority` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetPartyVisual` | method | Instance entry point. Takes 1 argument: `PartyBase partyBase`. Returns `MobilePartyVisual`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var mobilePartyVisualManager = MobilePartyVisualManager.Current;
// Read the live state through mobilePartyVisualManager.Priority.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Managers/MobilePartyVisualManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EntityVisualManagerBase](../EntityVisualManagerBase/) — `SandBox.View.Map.Managers`.
- [SandBoxViewSubModule](../SandBoxViewSubModule/) — `SandBox.View`.
- [MobilePartyVisual](../MobilePartyVisual/) — `SandBox.View.Map.Visuals`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/sandbox/](../) — the other types in this bucket.
