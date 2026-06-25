---
title: "MultiplayerEndOfBattleVM"
description: "Auto-generated class reference for MultiplayerEndOfBattleVM."
---
# MultiplayerEndOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerEndOfBattleVM.cs`

## Overview

`MultiplayerEndOfBattleVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasFirstPlace` | `public bool HasFirstPlace { get; set; }` |
| `HasSecondPlace` | `public bool HasSecondPlace { get; set; }` |
| `HasThirdPlace` | `public bool HasThirdPlace { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `FirstPlacePlayer` | `public MPEndOfBattlePlayerVM FirstPlacePlayer { get; set; }` |
| `SecondPlacePlayer` | `public MPEndOfBattlePlayerVM SecondPlacePlayer { get; set; }` |
| `ThirdPlacePlayer` | `public MPEndOfBattlePlayerVM ThirdPlacePlayer { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerEndOfBattleVM from the subsystem API first
MultiplayerEndOfBattleVM multiplayerEndOfBattleVM = ...;
multiplayerEndOfBattleVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MultiplayerEndOfBattleVM from the subsystem API first
MultiplayerEndOfBattleVM multiplayerEndOfBattleVM = ...;
multiplayerEndOfBattleVM.OnTick(0);
```

### OnBattleEnded
`public void OnBattleEnded()`

**Purpose:** **Purpose:** Invoked when the battle ended event is raised.

```csharp
// Obtain an instance of MultiplayerEndOfBattleVM from the subsystem API first
MultiplayerEndOfBattleVM multiplayerEndOfBattleVM = ...;
multiplayerEndOfBattleVM.OnBattleEnded();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerEndOfBattleVM multiplayerEndOfBattleVM = ...;
multiplayerEndOfBattleVM.RefreshValues();
```

## See Also

- [Area Index](../)