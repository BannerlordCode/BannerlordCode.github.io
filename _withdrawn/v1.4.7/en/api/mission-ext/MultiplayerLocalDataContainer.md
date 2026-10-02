---
title: "MultiplayerLocalDataContainer"
description: "MultiplayerLocalDataContainer — class in TaleWorlds.MountAndBlade.Diamond.Lobby. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# MultiplayerLocalDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public abstract class MultiplayerLocalDataContainer<T> where T : MultiplayerLocalData`  
**Base:** `MultiplayerLocalData`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs`

## Overview

`MultiplayerLocalDataContainer` is a named type in the TaleWorlds.MountAndBlade.Diamond.Lobby namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MultiplayerLocalData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MultiplayerLocalDataContainer`.
- **Instance members** (10): `GetSaveDirectoryName`, `GetSaveFileName`, `AddEntry`, `InsertEntry`, `RemoveEntry`, `GetEntries`, ….
- **Extension points** (6): `GetSaveDirectoryName`, `GetSaveFileName`, `OnBeforeAddEntry`, `OnBeforeRemoveEntry`, `GetCompatibilityFilePath`, `DeserializeInCompatibilityMode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddEntry` | method | Instance entry point. Takes 1 argument: `T item`. Adds to the collection or relation this type owns. |
| `DeserializeInCompatibilityMode` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `string serializedJson`. Returns `List<T>`. |
| `GetCompatibilityFilePath` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `PlatformFilePath`. Read path: prefer it over reaching for the backing store. |
| `GetEntries` | method | Instance entry point. Takes no arguments. Returns `MBReadOnlyList<T>`. Read path: prefer it over reaching for the backing store. |
| `GetSaveDirectoryName` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetSaveFileName` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `InsertEntry` | method | Instance entry point. Takes 2 arguments: `T item`, `int index`. Adds to the collection or relation this type owns. |
| `OnBeforeAddEntry` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `T item`, `out bool canAddEntry`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeRemoveEntry` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `T item`, `out bool canRemoveEntry`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveEntry` | method | Instance entry point. Takes 1 argument: `T item`. Removes from or clears the collection this type owns. |
| `MultiplayerLocalDataContainer` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MultiplayerLocalDataContainer()`.

## Usage Example

```csharp
var multiplayerLocalDataContainer = new MultiplayerLocalDataContainer();
multiplayerLocalDataContainer.GetSaveDirectoryName();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MultiplayerLocalData](../MultiplayerLocalData/) — `TaleWorlds.MountAndBlade.Diamond.Lobby`.
- [MultiplayerLocalDataManager](../MultiplayerLocalDataManager/) — `TaleWorlds.MountAndBlade.Diamond.Lobby`.

Section: [api/mission-ext/](../) — the other types in this bucket.
