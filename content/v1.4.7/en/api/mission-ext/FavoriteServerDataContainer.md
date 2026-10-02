---
title: "FavoriteServerDataContainer"
description: "FavoriteServerDataContainer — class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# FavoriteServerDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class FavoriteServerDataContainer : MultiplayerLocalDataContainer<FavoriteServerData>`  
**Base:** `MultiplayerLocalDataContainer`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs`

## Overview

`FavoriteServerDataContainer` is a named type in the TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MultiplayerLocalDataContainer, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (3): `GetSaveDirectoryName`, `GetSaveFileName`, `TryGetServerData`.
- **Extension points** (2): `GetSaveDirectoryName`, `GetSaveFileName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetSaveDirectoryName` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetSaveFileName` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `TryGetServerData` | method | Instance entry point. Takes 2 arguments: `GameServerEntry serverEntry`, `out FavoriteServerData favoriteServerData`. Returns `bool`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// FavoriteServerDataContainer exposes no public members in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer/) — `TaleWorlds.MountAndBlade.Diamond.Lobby`.
- [FavoriteServerData](../FavoriteServerData/) — `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`.

Section: [api/mission-ext/](../) — the other types in this bucket.
