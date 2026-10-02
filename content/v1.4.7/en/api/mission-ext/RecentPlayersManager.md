---
title: "RecentPlayersManager"
description: "RecentPlayersManager — class in TaleWorlds.MountAndBlade.Diamond. 8 public members (8 static)."
---

<!-- v147-skeleton -->
# RecentPlayersManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public static class RecentPlayersManager`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`

## Overview

`RecentPlayersManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (8): `RecentPlayers`, `Initialize`, `GetRecentPlayerInfos`, `GetRecentPlayerIds`, `AddOrUpdatePlayerEntry`, `TrimPlayers`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddOrUpdatePlayerEntry` | method (static) | Static entry point. Takes 4 arguments: `PlayerId playerId`, `string playerName`, `InteractionType interactionType`, `int forcedIndex`. Adds to the collection or relation this type owns. |
| `GetPlayersOrdered` | method (static) | Static entry point. Takes no arguments. Returns `IEnumerable<PlayerId>`. Read path: prefer it over reaching for the backing store. |
| `GetRecentPlayerIds` | method (static) | Static entry point. Takes no arguments. Returns `PlayerId[]`. Read path: prefer it over reaching for the backing store. |
| `GetRecentPlayerInfos` | method (static) | Static entry point. Takes no arguments. Returns `Task<MBReadOnlyList<RecentPlayerInfo>>`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method (static) | Static entry point. Takes no arguments. |
| `RecentPlayers` | property (static) | Static entry point `MBReadOnlyList<RecentPlayerInfo>` property. Read it for current state; a declared setter writes that state in place. |
| `Serialize` | method (static) | Static entry point. Takes no arguments. |
| `TrimPlayers` | method (static) | Static entry point. Takes no arguments. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var recentPlayersManager = RecentPlayersManager.GetRecentPlayerInfos();
RecentPlayersManager.Initialize();
RecentPlayersManager.GetRecentPlayerInfos();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
