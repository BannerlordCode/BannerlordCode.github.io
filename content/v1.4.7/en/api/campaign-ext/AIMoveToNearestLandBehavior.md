---
title: "AIMoveToNearestLandBehavior"
description: "AIMoveToNearestLandBehavior — class in TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# AIMoveToNearestLandBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `internal class AIMoveToNearestLandBehavior : CampaignBehaviorBase`  
**Base:** `CampaignBehaviorBase`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AIMoveToNearestLandBehavior.cs`

## Overview

`AIMoveToNearestLandBehavior` is an internal class in TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`AIMoveToNearestLandBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (2): `RegisterEvents`, `SyncData`.
- **Extension points** (2): `RegisterEvents`, `SyncData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |

## Usage Example

```csharp
// AIMoveToNearestLandBehavior is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   RegisterEvents()
//     void
//   SyncData(`IDataStore dataStore`)
//     void
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AIMoveToNearestLandBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [AiBehavior](../../campaign/AiBehavior/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
