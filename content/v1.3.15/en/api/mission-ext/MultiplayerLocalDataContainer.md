---
title: "MultiplayerLocalDataContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLocalDataContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerLocalDataContainer<T>`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs`

## Overview

`MultiplayerLocalDataContainer` lives in `TaleWorlds.MountAndBlade.Diamond.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddEntry
`public void AddEntry(T item)`

**Purpose:** Adds `entry` to the current collection or state.

### InsertEntry
`public void InsertEntry(T item, int index)`

**Purpose:** Handles logic related to `insert entry`.

### RemoveEntry
`public void RemoveEntry(T item)`

**Purpose:** Removes `entry` from the current collection or state.

### GetEntries
`public MBReadOnlyList<T> GetEntries()`

**Purpose:** Gets the current value of `entries`.

### CreateAsAdd
`public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsAdd(T item)`

**Purpose:** Creates a new `as add` instance or object.

### CreateAsRemove
`public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsRemove(T item)`

**Purpose:** Creates a new `as remove` instance or object.

### CreateAsInsert
`public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsInsert(T item, int index)`

**Purpose:** Creates a new `as insert` instance or object.

### Compare
`public int Compare(MultiplayerLocalDataContainer<T>.ContainerOperation x, MultiplayerLocalDataContainer<T>.ContainerOperation y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var implementation = new CustomMultiplayerLocalDataContainer();
```

## See Also

- [Complete Class Catalog](../catalog)