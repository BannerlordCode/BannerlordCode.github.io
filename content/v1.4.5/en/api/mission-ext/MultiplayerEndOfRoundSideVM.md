---
title: "MultiplayerEndOfRoundSideVM"
description: "Auto-generated class reference for MultiplayerEndOfRoundSideVM."
---
# MultiplayerEndOfRoundSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundSideVM.cs`

## Overview

`MultiplayerEndOfRoundSideVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWinner` | `public bool IsWinner { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `CultureName` | `public string CultureName { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## Key Methods

### SetData
`public void SetData(BasicCultureObject culture, int score, bool isWinner, MultiplayerCultureColorInfo cultureColors)`

**Purpose:** Assigns a new value to data and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerEndOfRoundSideVM from the subsystem API first
MultiplayerEndOfRoundSideVM multiplayerEndOfRoundSideVM = ...;
multiplayerEndOfRoundSideVM.SetData(culture, 0, false, cultureColors);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerEndOfRoundSideVM from the subsystem API first
MultiplayerEndOfRoundSideVM multiplayerEndOfRoundSideVM = ...;
multiplayerEndOfRoundSideVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerEndOfRoundSideVM multiplayerEndOfRoundSideVM = ...;
multiplayerEndOfRoundSideVM.SetData(culture, 0, false, cultureColors);
```

## See Also

- [Area Index](../)