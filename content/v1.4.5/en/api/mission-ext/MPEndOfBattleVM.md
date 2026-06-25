---
title: "MPEndOfBattleVM"
description: "Auto-generated class reference for MPEndOfBattleVM."
---
# MPEndOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPEndOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MPEndOfBattleVM.cs`

## Overview

`MPEndOfBattleVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `CountdownTitle` | `public string CountdownTitle { get; set; }` |
| `Countdown` | `public int Countdown { get; set; }` |
| `Header` | `public string Header { get; set; }` |
| `BattleResult` | `public int BattleResult { get; set; }` |
| `ResultText` | `public string ResultText { get; set; }` |
| `AllySide` | `public MPEndOfBattleSideVM AllySide { get; set; }` |
| `EnemySide` | `public MPEndOfBattleSideVM EnemySide { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPEndOfBattleVM from the subsystem API first
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPEndOfBattleVM from the subsystem API first
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.OnFinalize();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MPEndOfBattleVM from the subsystem API first
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.RefreshValues();
```

## See Also

- [Area Index](../)