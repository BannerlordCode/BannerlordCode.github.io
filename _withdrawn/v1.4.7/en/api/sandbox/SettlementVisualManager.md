---
title: "SettlementVisualManager"
description: "SettlementVisualManager — class in SandBox.View.Map.Managers. 10 public members (1 static)."
---

<!-- v147-skeleton -->
# SettlementVisualManager

**Namespace:** `SandBox.View.Map.Managers`  
**Module:** `SandBox.View`  
**Type:** `public class SettlementVisualManager : EntityVisualManagerBase<PartyBase>`  
**Base:** `EntityVisualManagerBase`  
**Source:** `SandBox.View/Map/Managers/SettlementVisualManager.cs`

## Overview

`SettlementVisualManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends EntityVisualManagerBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `Current`.
- **Instance members** (9): `Priority`, `OnTick`, `OnVisualIntersected`, `OnFrameTick`, `OnMouseClick`, `GetVisualOfEntity`, ….
- **Extension points** (8): `Priority`, `OnTick`, `OnVisualIntersected`, `OnFrameTick`, `OnMouseClick`, `GetVisualOfEntity`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Current` | property (static) | Static entry point `SettlementVisualManager` property. Read it for current state; a declared setter writes that state in place. |
| `GetVisualOfEntity` | method (override) | Overrides the base member. Takes 1 argument: `PartyBase partyBase`. Returns `MapEntityVisual<PartyBase>`. Read path: prefer it over reaching for the backing store. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMouseClick` | method (override) | Overrides the base member. Takes 4 arguments: `MapEntityVisual visualOfSelectedEntity`, `Vec3 intersectionPoint`, `PathFaceRecord mouseOverFaceIndex`, `bool isDoubleClick`. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 2 arguments: `float realDt`, `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnVisualIntersected` | method (override) | Overrides the base member. Takes 9 arguments: `Ray mouseRay`, `UIntPtr[] intersectedEntityIDs`, `Intersection[] intersectionInfos`, `int entityCount`, …. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Priority` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetSettlementVisual` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. Returns `SettlementVisual`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var settlementVisualManager = SettlementVisualManager.Current;
// Read the live state through settlementVisualManager.Priority.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Managers/SettlementVisualManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EntityVisualManagerBase](../EntityVisualManagerBase/) — `SandBox.View.Map.Managers`.
- [SandBoxViewSubModule](../SandBoxViewSubModule/) — `SandBox.View`.
- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [SettlementVisual](../SettlementVisual/) — `SandBox.View.Map.Visuals`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [IMapScene](../../campaign/IMapScene/) — `TaleWorlds.CampaignSystem.Map`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.

Section: [api/sandbox/](../) — the other types in this bucket.
