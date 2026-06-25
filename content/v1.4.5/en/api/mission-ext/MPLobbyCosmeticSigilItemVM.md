---
title: "MPLobbyCosmeticSigilItemVM"
description: "Auto-generated class reference for MPLobbyCosmeticSigilItemVM."
---
# MPLobbyCosmeticSigilItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyCosmeticSigilItemVM : MPLobbySigilItemVM`
**Base:** `MPLobbySigilItemVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyCosmeticSigilItemVM.cs`

## Overview

`MPLobbyCosmeticSigilItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |

## Key Methods

### SetOnSelectionCallback
`public static void SetOnSelectionCallback(Action<MPLobbyCosmeticSigilItemVM> onSelection)`

**Purpose:** Assigns a new value to on selection callback and updates the object's internal state.

```csharp
// Static call; no instance required
MPLobbyCosmeticSigilItemVM.SetOnSelectionCallback(onSelection);
```

### ResetOnSelectionCallback
`public static void ResetOnSelectionCallback()`

**Purpose:** Returns on selection callback to its default or initial condition.

```csharp
// Static call; no instance required
MPLobbyCosmeticSigilItemVM.ResetOnSelectionCallback();
```

### SetOnObtainRequestedCallback
`public static void SetOnObtainRequestedCallback(Action<MPLobbyCosmeticSigilItemVM> onObtainRequested)`

**Purpose:** Assigns a new value to on obtain requested callback and updates the object's internal state.

```csharp
// Static call; no instance required
MPLobbyCosmeticSigilItemVM.SetOnObtainRequestedCallback(onObtainRequested);
```

### ResetOnObtainRequestedCallback
`public static void ResetOnObtainRequestedCallback()`

**Purpose:** Returns on obtain requested callback to its default or initial condition.

```csharp
// Static call; no instance required
MPLobbyCosmeticSigilItemVM.ResetOnObtainRequestedCallback();
```

## Usage Example

```csharp
MPLobbyCosmeticSigilItemVM.SetOnSelectionCallback(onSelection);
```

## See Also

- [Area Index](../)