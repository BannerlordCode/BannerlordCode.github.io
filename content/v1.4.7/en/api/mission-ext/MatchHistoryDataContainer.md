---
title: "MatchHistoryDataContainer"
description: "MatchHistoryDataContainer — class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MatchHistoryDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class MatchHistoryDataContainer : MultiplayerLocalDataContainer<MatchHistoryData>`  
**Base:** `MultiplayerLocalDataContainer`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs`

## Overview

`MatchHistoryDataContainer` is a named type in the TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MultiplayerLocalDataContainer, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MatchHistoryDataContainer`.
- **Instance members** (6): `GetSaveDirectoryName`, `GetSaveFileName`, `OnBeforeRemoveEntry`, `OnBeforeAddEntry`, `DeserializeInCompatibilityMode`, `TryGetHistoryData`.
- **Extension points** (5): `GetSaveDirectoryName`, `GetSaveFileName`, `OnBeforeRemoveEntry`, `OnBeforeAddEntry`, `DeserializeInCompatibilityMode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DeserializeInCompatibilityMode` | method (override) | Overrides the base member. Takes 1 argument: `string serializedJson`. Returns `List<MatchHistoryData>`. |
| `GetSaveDirectoryName` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetSaveFileName` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `OnBeforeAddEntry` | method (override) | Overrides the base member. Takes 2 arguments: `MatchHistoryData item`, `out bool canAddEntry`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeRemoveEntry` | method (override) | Overrides the base member. Takes 2 arguments: `MatchHistoryData item`, `out bool canRemoveEntry`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `TryGetHistoryData` | method | Instance entry point. Takes 2 arguments: `string matchId`, `out MatchHistoryData historyData`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `MatchHistoryDataContainer` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MatchHistoryDataContainer()`.

## Usage Example

```csharp
var matchHistoryDataContainer = new MatchHistoryDataContainer();
matchHistoryDataContainer.GetSaveDirectoryName();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer/) — `TaleWorlds.MountAndBlade.Diamond.Lobby`.
- [MatchHistoryData](../MatchHistoryData/) — `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`.

Section: [api/mission-ext/](../) — the other types in this bucket.
