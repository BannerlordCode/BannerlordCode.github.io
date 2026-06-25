---
title: "MultiplayerLocalDataContainer"
description: "Auto-generated class reference for MultiplayerLocalDataContainer."
---
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

```csharp
// Obtain an instance of MultiplayerLocalDataContainer from the subsystem API first
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
multiplayerLocalDataContainer.AddEntry(item);
```

### InsertEntry
`public void InsertEntry(T item, int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerLocalDataContainer from the subsystem API first
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
multiplayerLocalDataContainer.InsertEntry(item, 0);
```

### RemoveEntry
`public void RemoveEntry(T item)`

**Purpose:** Removes `entry` from the current collection or state.

```csharp
// Obtain an instance of MultiplayerLocalDataContainer from the subsystem API first
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
multiplayerLocalDataContainer.RemoveEntry(item);
```

### GetEntries
`public MBReadOnlyList<T> GetEntries()`

**Purpose:** Reads and returns the `entries` value held by the current object.

```csharp
// Obtain an instance of MultiplayerLocalDataContainer from the subsystem API first
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
var result = multiplayerLocalDataContainer.GetEntries();
```

### CreateAsAdd
`public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsAdd(T item)`

**Purpose:** Constructs a new `as add` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerLocalDataContainer.CreateAsAdd(item);
```

### CreateAsRemove
`public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsRemove(T item)`

**Purpose:** Constructs a new `as remove` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerLocalDataContainer.CreateAsRemove(item);
```

### CreateAsInsert
`public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsInsert(T item, int index)`

**Purpose:** Constructs a new `as insert` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerLocalDataContainer.CreateAsInsert(item, 0);
```

### Compare
`public int Compare(MultiplayerLocalDataContainer<T>.ContainerOperation x, MultiplayerLocalDataContainer<T>.ContainerOperation y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MultiplayerLocalDataContainer from the subsystem API first
MultiplayerLocalDataContainer multiplayerLocalDataContainer = ...;
var result = multiplayerLocalDataContainer.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MultiplayerLocalDataContainer instance = ...;
```

## See Also

- [Area Index](../)