---
title: "MapTrackerProvider"
description: "MapTrackerProvider — class in SandBox.ViewModelCollection.Map.Tracker. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# MapTrackerProvider

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MapTrackerProvider`  
**Source:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs`

## Overview

`MapTrackerProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapTrackerProvider`.
- **Instance members** (3): `OnTrackerAddedOrRemoved`, `GetTrackers`, `OnTrackerAddedOrRemovedDelegate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTrackers` | method | Instance entry point. Takes no arguments. Returns `MapTrackerItemVM[]`. Read path: prefer it over reaching for the backing store. |
| `OnTrackerAddedOrRemoved` | property | Instance entry point `MapTrackerProvider.OnTrackerAddedOrRemovedDelegate` property. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTrackerAddedOrRemovedDelegate` | method | Instance entry point. Takes 2 arguments: `MapTrackerItemVM tracker`, `bool added`. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MapTrackerProvider` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MapTrackerProvider()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var mapTrackerProvider = new MapTrackerProvider();
// Read the live state through mapTrackerProvider.OnTrackerAddedOrRemoved.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [MapTrackerItemVM](../../viewmodel/MapTrackerItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`.
- [CaravanPartyComponent](../../campaign/CaravanPartyComponent/) — `TaleWorlds.CampaignSystem.Party.PartyComponents`.
- [MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM/) — `SandBox.ViewModelCollection.Map.Tracker`.
- [MapArmyTrackItemVM](../MapArmyTrackItemVM/) — `SandBox.ViewModelCollection.Map.Tracker`.
- [MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM/) — `SandBox.ViewModelCollection.Map.Tracker`.

Section: [api/sandbox/](../) — the other types in this bucket.
