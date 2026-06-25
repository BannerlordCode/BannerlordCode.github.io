---
title: "MPEndOfBattleSideVM"
description: "Auto-generated class reference for MPEndOfBattleSideVM."
---
# MPEndOfBattleSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPEndOfBattleSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MPEndOfBattleSideVM.cs`

## Overview

`MPEndOfBattleSideVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Side` | `public MissionScoreboardSide Side { get; }` |
| `FactionName` | `public string FactionName { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `IsRoundWinner` | `public bool IsRoundWinner { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPEndOfBattleSideVM from the subsystem API first
MPEndOfBattleSideVM mPEndOfBattleSideVM = ...;
mPEndOfBattleSideVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPEndOfBattleSideVM mPEndOfBattleSideVM = ...;
mPEndOfBattleSideVM.RefreshValues();
```

## See Also

- [Area Index](../)