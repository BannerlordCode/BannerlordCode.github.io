---
title: "FlattenedTroopRosterElement"
description: "FlattenedTroopRosterElement — struct in TaleWorlds.CampaignSystem.Roster. 11 public members (1 static)."
---

<!-- v147-skeleton -->
# FlattenedTroopRosterElement

**Namespace:** `TaleWorlds.CampaignSystem.Roster`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public struct FlattenedTroopRosterElement : ISavedStruct`  
**Base:** `ISavedStruct`  
**Source:** `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRosterElement.cs`

## Overview

`FlattenedTroopRosterElement` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ISavedStruct, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `FlattenedTroopRosterElement`, `FlattenedTroopRosterElement`.
- **Instance members** (8): `Troop`, `IsWounded`, `IsRouted`, `IsKilled`, `Xp`, `XpGained`, ….
- **Extension points** (1): `ToString`.
- **Data and constants** (1): `DefaultFlattenedTroopRosterElement`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `DefaultFlattenedTroopRosterElement` | field (static) | Static entry point `FlattenedTroopRosterElement` field — direct storage with no validation or notification. |
| `Descriptor` | property | Instance entry point `UniqueTroopDescriptor` property. Read it for current state; a declared setter writes that state in place. |
| `IsKilled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsRouted` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsWounded` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Troop` | property | Instance entry point `CharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `Xp` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `XpGained` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `FlattenedTroopRosterElement` | ctor | Instance entry point. Takes 4 arguments: `CharacterObject troop`, `RosterTroopState state`, `int xp`, `UniqueTroopDescriptor uniqueNo`. Returns ``. |
| `FlattenedTroopRosterElement` | ctor | Instance entry point. Takes 2 arguments: `FlattenedTroopRosterElement rosterElement`, `RosterTroopState state`. Returns ``. |

- Constructed as `public FlattenedTroopRosterElement(CharacterObject troop, RosterTroopState state = RosterTroopState.Active, int xp = 0, UniqueTroopDescriptor uniqueNo = default(UniqueTroopDescriptor)`.
- Constructed as `public FlattenedTroopRosterElement(FlattenedTroopRosterElement rosterElement, RosterTroopState state)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ISavedStruct.
var flattenedTroopRosterElement = new FlattenedTroopRosterElement(troop, state, xp, uniqueNo);

// Lifecycle hooks this type declares:
//   public override string ToString()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRosterElement.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [RosterTroopState](../RosterTroopState/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign/](../) — the other types in this bucket.
