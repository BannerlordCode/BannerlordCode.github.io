---
title: "MultiplayerLocalDataManager"
description: "MultiplayerLocalDataManager — class in TaleWorlds.MountAndBlade.Diamond.Lobby. 7 public members (3 static)."
---

<!-- v147-skeleton -->
# MultiplayerLocalDataManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class MultiplayerLocalDataManager`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs`

## Overview

`MultiplayerLocalDataManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `Instance`, `InitializeManager`, `FinalizeManager`.
- **Instance members** (4): `TauntSlotData`, `MatchHistory`, `FavoriteServers`, `Tick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `FinalizeManager` | method (static) | Static entry point. Takes no arguments. |
| `InitializeManager` | method (static) | Static entry point. Takes no arguments. |
| `Instance` | property (static) | Static entry point `MultiplayerLocalDataManager` property. Read it for current state; a declared setter writes that state in place. |
| `FavoriteServers` | property | Instance entry point `FavoriteServerDataContainer` property. Read it for current state; a declared setter writes that state in place. |
| `MatchHistory` | property | Instance entry point `MatchHistoryDataContainer` property. Read it for current state; a declared setter writes that state in place. |
| `TauntSlotData` | property | Instance entry point `TauntSlotDataContainer` property. Read it for current state; a declared setter writes that state in place. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var multiplayerLocalDataManager = MultiplayerLocalDataManager.Instance;
MultiplayerLocalDataManager.InitializeManager();
MultiplayerLocalDataManager.FinalizeManager();
// Read the live state through multiplayerLocalDataManager.TauntSlotData.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MatchHistoryDataContainer](../MatchHistoryDataContainer/) — `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`.
- [FavoriteServerDataContainer](../FavoriteServerDataContainer/) — `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`.

Section: [api/mission-ext/](../) — the other types in this bucket.
