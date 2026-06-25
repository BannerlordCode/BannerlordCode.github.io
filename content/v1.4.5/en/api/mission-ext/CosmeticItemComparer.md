---
title: "CosmeticItemComparer"
description: "Auto-generated class reference for CosmeticItemComparer."
---
# CosmeticItemComparer

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class CosmeticItemComparer : IComparer<MPArmoryCosmeticItemBaseVM>`
**Base:** `IComparer<MPArmoryCosmeticItemBaseVM>`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryCosmeticsVM.cs`

## Overview

`CosmeticItemComparer` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of CosmeticItemComparer from the subsystem API first
CosmeticItemComparer cosmeticItemComparer = ...;
cosmeticItemComparer.SetSortMode(false);
```

### Compare
`public abstract int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of CosmeticItemComparer from the subsystem API first
CosmeticItemComparer cosmeticItemComparer = ...;
var result = cosmeticItemComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CosmeticItemComparer instance = ...;
```

## See Also

- [Area Index](../)