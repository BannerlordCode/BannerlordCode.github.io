---
title: "StealthNameMarkerProvider"
description: "StealthNameMarkerProvider — class in SandBox.View.Missions.NameMarkers. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# StealthNameMarkerProvider

**Namespace:** `SandBox.View.Missions.NameMarkers`  
**Module:** `SandBox.View`  
**Type:** `public class StealthNameMarkerProvider : MissionNameMarkerProvider`  
**Base:** `MissionNameMarkerProvider`  
**Source:** `SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs`

## Overview

`StealthNameMarkerProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends MissionNameMarkerProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (3): `OnInitialize`, `OnDestroy`, `CreateMarkers`.
- **Extension points** (3): `OnInitialize`, `OnDestroy`, `CreateMarkers`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateMarkers` | method (override) | Overrides the base member. Takes 1 argument: `List<MissionNameMarkerTargetBaseVM> markers`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `OnDestroy` | method (override) | Overrides the base member. Takes 1 argument: `Mission mission`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes 1 argument: `Mission mission`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// StealthNameMarkerProvider exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerProvider](../MissionNameMarkerProvider/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [Hideout](../../campaign/Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [MissionStealthAreaUsePointNameMarkerTargetVM](../MissionStealthAreaUsePointNameMarkerTargetVM/) — `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`.

Section: [api/sandbox/](../) — the other types in this bucket.
