---
title: "MPEndOfBattlePlayerVM"
description: "Auto-generated class reference for MPEndOfBattlePlayerVM."
---
# MPEndOfBattlePlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPEndOfBattlePlayerVM : MPPlayerVM`
**Base:** `MPPlayerVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPEndOfBattlePlayerVM.cs`

## Overview

`MPEndOfBattlePlayerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlacementText` | `public string PlacementText { get; set; }` |
| `ScoreText` | `public string ScoreText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPEndOfBattlePlayerVM from the subsystem API first
MPEndOfBattlePlayerVM mPEndOfBattlePlayerVM = ...;
mPEndOfBattlePlayerVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPEndOfBattlePlayerVM mPEndOfBattlePlayerVM = ...;
mPEndOfBattlePlayerVM.RefreshValues();
```

## See Also

- [Area Index](../)